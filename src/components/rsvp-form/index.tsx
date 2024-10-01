import { type Schema, schema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { type SubmitHandler, useForm } from "react-hook-form";

import css from "./rsvp-form.module.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { spreadSheetsId } from "@/spreadsheets-id";

type RsvpFormProps = {
  language?: "id" | "en";
  afterSubmit?: () => void;
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

export default function RsvpForm({
  language = "en",
  afterSubmit,
}: RsvpFormProps) {
  const t = dictionary[language];
  const [loadingForm, setLoadingForm] = useState(false);
  const pathName = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    setLoadingForm(true);
    const paths = pathName.split("/");
    const id = paths[paths.length - 1] as keyof typeof spreadSheetsId;

    if (!spreadSheetsId[id]) {
      toast.success("Form submitted successfully!", {
        position: "bottom-center",
      });
      reset();
      setLoadingForm(false);
      afterSubmit?.();
      return;
    }

    try {
      await axios.post(`/api/rsvp/${id}`, data);
      toast.success("Form submitted successfully!", {
        position: "bottom-center",
      });
      reset();
      setLoadingForm(false);
      afterSubmit?.();
    } catch (error) {
      toast.error("Opppsss, Error occured. Please try again", {
        position: "bottom-center",
      });
      setLoadingForm(false);
    }
  };

  return (
    <div className={css.form}>
      <h1>{t.formTitle}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form_field}>
          <label htmlFor="name">{t.name}</label>
          <input
            id="name"
            type="text"
            placeholder={t.namePlaceholder}
            {...register("name")}
          />
          <p className={css.input_error}>{errors.name?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="phone_number">{t.phoneNumber}</label>
          <input
            id="phone_number"
            type="text"
            placeholder={t.phoneNumberPlaceholder}
            {...register("phoneNumber")}
          />
          <p className={css.input_error}>{errors.phoneNumber?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="wish">{t.wish}</label>
          <textarea id="wish" rows={2} {...register("wish")} />
          <p className={css.input_error}>{errors.wish?.message}</p>
        </div>

        <div className={css.form_field}>
          <label htmlFor="attend">{t.attend}</label>

          <div className={css.radio_container}>
            <div className={css.radio}>
              <input type="radio" value="true" {...register("attend")} />
              <span>{t.yes}</span>
            </div>
            <div className={css.radio}>
              <input type="radio" value="false" {...register("attend")} />
              <span>{t.no}</span>
            </div>
          </div>

          <p className={css.input_error}>{errors.attend?.message}</p>
        </div>

        <button
          type="submit"
          className={classNames("disabled:opacity-40")}
          disabled={loadingForm}
        >
          {loadingForm ? "Loading..." : t.submit}
        </button>
      </form>
    </div>
  );
}
