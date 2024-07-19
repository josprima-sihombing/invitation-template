import { spreadSheetsId } from "@/spreadsheets-id";
import { google } from "googleapis";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { sendEmail } from "@/utils/send-email";

const auth = new google.auth.GoogleAuth({
	credentials: {
		project_id: process.env.google_project_id,
		private_key_id: process.env.google_private_key_id,
		private_key: process.env.google_private_key,
		client_email: process.env.google_client_email,
		client_id: process.env.google_client_id,
	},
	scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const ratelimit = new Ratelimit({
	redis: kv,
	// 10 requests from the same IP in 10 seconds
	limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function POST(
	request: NextRequest,
	{ params }: { params: { slug: string } },
) {
	const ip = request.ip ?? "127.0.0.1";

	const { success } = await ratelimit.limit(ip);

	if (!success) {
		return Response.json({ data: "Error!" }, { status: 500 });
	}

	const id = params.slug as keyof typeof spreadSheetsId;

	if (!spreadSheetsId[id]) {
		return Response.json({ data: "Error!" }, { status: 500 });
	}

	const payload = await request.json();

	// TODO: Validate payload

	try {
		const client = await auth.getClient();

		// @ts-ignore
		const googleSheets = google.sheets({
			version: "v4",
			auth: client,
		});

		// @ts-ignoree
		await googleSheets.spreadsheets.values.append({
			auth,
			spreadsheetId: spreadSheetsId[id],
			range: "Sheet1!A:E",
			valueInputOption: "RAW",
			resource: {
				values: [
					[
						payload.name,
						payload.phoneNumber,
						payload.attend ? "Yes" : "No",
						payload.food,
						payload.drink,
					],
				],
			},
		});

		//TODO: send notification
		await sendEmail(payload);

		return Response.json({ data: "Hello World" });
	} catch (error) {
		return Response.json({ data: "Error!" }, { status: 500 });
	}
}
