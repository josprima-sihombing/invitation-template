import * as yup from "yup";

export const schema = yup
	.object({
		name: yup.string().required("Name can't be empty"),
		phoneNumber: yup.string(),
		attend: yup.boolean().required("Please confirm your attendant"),
		food: yup.string().default(""),
		drink: yup.string().default(""),
	})
	.required();
