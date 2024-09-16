import { type Schema, schema } from "@/schemas/schema-2";
import { yupResolver } from "@hookform/resolvers/yup";
import { type SubmitHandler, useForm } from "react-hook-form";

import css from "./rsvp-form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { spreadSheetsId } from "@/spreadsheets-id";

type RsvpFormProps = {
  afterSubmit?: () => void;
};

const dictionary = {
  name: "Nama Anda",
  namePlaceholder: "Isikan nama anda...",
  wish: "Kirim Ucapan",
  attend: "Bersedia Hadir?",
  yes: "Ya",
  no: "Tidak",
  submit: "Kirim",
};

export default function RsvpForm({ afterSubmit }: RsvpFormProps) {
  const t = dictionary;
  const [loadingForm, setLoadingForm] = useState(false);
  const pathName = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // @ts-ignore
  const isAttend = watch("attend") === "true";

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    setLoadingForm(true);
    const paths = pathName.split("/");
    const id = paths[paths.length - 1] as keyof typeof spreadSheetsId;

    if (!spreadSheetsId[id]) {
      toast.success("Form berhasil disubmit!", {
        position: "bottom-center",
      });
      reset();
      setLoadingForm(false);
      afterSubmit?.();
      return;
    }

    try {
      await axios.post(`/api/rsvp/${id}`, data);
      toast.success("Form berhasil disubmit!", {
        position: "bottom-center",
      });
      reset();
      setLoadingForm(false);
      afterSubmit?.();
    } catch (error) {
      toast.error("Opppsss, Error. Silahkan coba lagi!", {
        position: "bottom-center",
      });
      setLoadingForm(false);
    }
  };

  useEffect(() => {
    setValue("session", "");
  }, [isAttend]);

  return (
    <div className={css.form}>
      <h1 className="text-[#D3A043]">Konfirmasi Kehadiran Anda</h1>

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

        {isAttend && (
          <div className={css.form_field}>
            <label htmlFor="attend">Pilih Sesi</label>

            <div className={css.radio_container}>
              <div className={css.radio}>
                <input
                  type="radio"
                  value="Jam 16:00-17:30"
                  {...register("session")}
                />
                <span>Jam 16:00-17:30</span>
              </div>
              <div className={css.radio}>
                <input
                  type="radio"
                  value="Jam 18:00-19:00"
                  {...register("session")}
                />
                <span>Jam 18:00-19:00</span>
              </div>
            </div>

            <p className={css.input_error}>{errors.session?.message}</p>
          </div>
        )}

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
