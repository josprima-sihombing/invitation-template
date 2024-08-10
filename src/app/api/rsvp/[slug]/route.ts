import { spreadSheetsId } from "@/spreadsheets-id";
import { google } from "googleapis";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { type Schema, schema } from "@/schemas";
import { auth } from "../../google-auth";

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

  const payload = (await request.json()) as Schema;

  try {
    schema.validateSync(payload);
  } catch (error) {
    return Response.json({ data: "Error!" }, { status: 500 });
  }

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
      range: "Sheet1!A:D",
      valueInputOption: "RAW",
      resource: {
        values: [
          [
            payload.name,
            payload.phoneNumber,
            payload.wish,
            payload.attend ? "Yes" : "No",
          ],
        ],
      },
    });

    return Response.json({ data: "Hello World" });
  } catch (error) {
    return Response.json({ data: "Error!" }, { status: 500 });
  }
}
