import { spreadSheetsId } from "@/spreadsheets-id";
import { google } from "googleapis";

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

export async function POST(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const id = params.slug as keyof typeof spreadSheetsId;

	if (!spreadSheetsId[id]) {
		return Response.json({ data: "Error!" }, { status: 500 });
	}

	const payload = await request.json();

	// TODO: Validate payload

	try {
	} catch (error) {}

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

		return Response.json({ data: "Hello World" });
	} catch (error) {
		return Response.json({ data: "Error!" }, { status: 500 });
	}
}
