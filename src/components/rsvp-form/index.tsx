import { schema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import css from "./rsvp-form.module.css";
import { solenoidalFont } from "@/fonts";

export default function RsvpForm() {
  const onSubmit = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={css.form}>
      <h1 className={solenoidalFont.className}>
        Please submit your rsvp below
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form_field}>
          <label htmlFor="name" className={solenoidalFont.className}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name..."
            className={solenoidalFont.className}
            {...register("name")}
          />
          <p className={css.input_error}>{errors.name?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="phone_number" className={solenoidalFont.className}>
            Phone Number
          </label>
          <input
            id="phone_number"
            type="text"
            placeholder="08xx"
            className={solenoidalFont.className}
            {...register("phoneNumber")}
          />
          <p className={css.input_error}>{errors.phoneNumber?.message}</p>
        </div>
        <div className={css.form_field}>
          <label htmlFor="wish" className={solenoidalFont.className}>
            Your wish for us
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
            Attend?
          </label>

          <div className={css.radio_container}>
            <div className={css.radio}>
              <input type="radio" value="true" {...register("attend")} />
              <span className={solenoidalFont.className}>Yes</span>
            </div>
            <div className={css.radio}>
              <input type="radio" value="false" {...register("attend")} />
              <span className={solenoidalFont.className}>No</span>
            </div>
          </div>

          <p className={css.input_error}>{errors.attend?.message}</p>
        </div>

        <button type="submit" className={solenoidalFont.className}>
          Submit
        </button>
      </form>
    </div>
  );
}
