import { spreadSheetsId } from "@/spreadsheets-id";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
	credentials: {
		accessKeyId: process.env.ses_accesskeyid!,
		secretAccessKey: process.env.ses_secretaccesskey!,
	},
	region: process.env.aws_region,
});

export const sendEmail = (payload: any) =>
	new Promise(async (resolve, reject) => {
		const sendEmailCommand = new SendEmailCommand({
			Source: "notification@kreasikanvas.com",
			Destination: {
				ToAddresses: ["kreasikanvas.com@gmail.com"],
			},
			ReplyToAddresses: [],
			Message: {
				Body: {
					Html: {
						Charset: "UTF-8",
						Data: `
							<h1>Halo, ${payload.name} baru saja mengisi RSVP mu</h1>
							<p>Silahkan lihat file google sheetmu untuk lihat detail rsvp nya</p>
							<a href="https://docs.google.com/spreadsheets/d/${spreadSheetsId.chairi}">Link google sheet</a>
						`,
					},
					Text: {
						Charset: "UTF-8",
						Data: "Halo, ada yang mengisi RSVP mu",
					},
				},
				Subject: {
					Charset: "UTF-8",
					Data: "Form RSVP notification",
				},
			},
		});

		try {
			const response = await sesClient.send(sendEmailCommand);
			resolve(response);
		} catch (error) {
			reject(error);
		}
	});
