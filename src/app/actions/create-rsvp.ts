"use server";

import { createClient } from "@/utils/supabase/server";
import { type Schema, schema } from "@/schemas";

export async function createRSVP(website: string, payload: Schema) {
  const supabase = await createClient();

  try {
    schema.validateSync(payload);
  } catch (error) {
    return {
      message: "error",
    };
  }

  const { data: websiteData } = await supabase
    .from("website")
    .select()
    .eq("website", website);

  if (!websiteData?.length) {
    return {
      message: "error",
    };
  }

  await supabase.from("rsvp").insert({
    name: payload.name,
    attend: payload.attend,
    phone_number: payload.phoneNumber,
    message: payload.wish,
    website_id: websiteData[0].id,
  });
}
