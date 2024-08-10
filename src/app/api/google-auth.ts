import { google } from "googleapis";

export const auth = new google.auth.GoogleAuth({
  credentials: {
    project_id: process.env.google_project_id,
    private_key_id: process.env.google_private_key_id,
    private_key: process.env.google_private_key,
    client_email: process.env.google_client_email,
    client_id: process.env.google_client_id,
  },
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});
