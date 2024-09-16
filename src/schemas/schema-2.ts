import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Nama tidak boleh kosong"),
    wish: yup.string(),
    attend: yup.boolean().required("Mohon konfirmasi kehadiran anda"),
    session: yup.string().when("attend", {
      is: true,
      then: (schema) => schema.required("Mohon pilih sesi anda"),
      otherwise: (schema) => schema.default(""),
    }),
  })
  .required();

export type Schema = yup.InferType<typeof schema>;
