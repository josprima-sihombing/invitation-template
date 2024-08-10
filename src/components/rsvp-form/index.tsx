import { schema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import css from "./rsvp-form.module.css";
import { solenoidalFont } from "@/fonts";

type RsvpFormProps = {
  language?: "id" | "en";
};

const dictionary = {
  en: {
    formTitle: "Please submit your rsvp below",
    name: "Name",
    namePlaceholder: "Your name...",
    phoneNumber: "Phone Number",
    phoneNumberPlaceholder: "08xxx",
    wish: "Your wish for us",
    attend: "Attend?",
    yes: "Yes",
    no: "No",
    submit: "Submit",
  },
  id: {
    formTitle: "Ucapan & Doa Terbaik Anda!",
    name: "Nama Anda",
    namePlaceholder: "Isikan nama anda...",
    phoneNumber: "No. HP",
    phoneNumberPlaceholder: "08xxx",
    wish: "Kirim Ucapan",
    attend: "Bersedia Hadir?",
    yes: "Ya",
    no: "Tidak",
    submit: "Kirim",
  },
};

export default function RsvpForm({ language = "en" }: RsvpFormProps) {
  const onSubmit = () => {};
  const t = dictionary[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={css.form}>
      <h1 className={solenoidalFont.className}>{t.formTitle}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form_field}>
          <label htmlFor="name" className={solenoidalFont.className}>
            {t.name}
          </label>
          <input
            id="name"
            type="text"
            placeholder={t.namePlaceholder}
            className={solenoidalFont.className}
            {...register("name")}
          />
          <p className={css.input_error}>{errors.name?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="phone_number" className={solenoidalFont.className}>
            {t.phoneNumber}
          </label>
          <input
            id="phone_number"
            type="text"
            placeholder={t.phoneNumberPlaceholder}
            className={solenoidalFont.className}
            {...register("phoneNumber")}
          />
          <p className={css.input_error}>{errors.phoneNumber?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="wish" className={solenoidalFont.className}>
            {t.wish}
          </label>
          <textarea
            id="wish"
            className={solenoidalFont.className}
            rows={2}
            {...register("wish")}
          />
          <p className={css.input_error}>{errors.wish?.message}</p>
        </div>

        <div className={css.form_field}>
          <label htmlFor="attend" className={solenoidalFont.className}>
            {t.attend}
          </label>

          <div className={css.radio_container}>
            <div className={css.radio}>
              <input type="radio" value="true" {...register("attend")} />
              <span className={solenoidalFont.className}>{t.yes}</span>
            </div>
            <div className={css.radio}>
              <input type="radio" value="false" {...register("attend")} />
              <span className={solenoidalFont.className}>{t.no}</span>
            </div>
          </div>

          <p className={css.input_error}>{errors.attend?.message}</p>
        </div>

        <button type="submit" className={solenoidalFont.className}>
          {t.submit}
        </button>
      </form>
    </div>
  );
}
