import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Name can't be empty"),
    phoneNumber: yup.string(),
    wish: yup.string(),
    attend: yup.boolean().required("Please confirm your attendant"),
  })
  .required();

export type Schema = yup.InferType<typeof schema>;
