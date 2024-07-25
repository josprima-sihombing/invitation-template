import { schema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import css from "./rsvp-form.module.css";

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
		<div>
			<h1>Please submit your rsvp below</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						placeholder="Your name..."
						{...register("name")}
					/>
					<p className={css.input_error}>{errors.name?.message}</p>
				</div>
				<div>
					<label htmlFor="phone_number">Phone Number</label>
					<input
						id="phone_number"
						type="text"
						placeholder="08xx"
						{...register("phoneNumber")}
					/>
					<p className={css.input_error}>{errors.phoneNumber?.message}</p>
				</div>
				<div>
					<label htmlFor="wish">Your wish</label>
					<textarea id="wish" {...register("wish")} />
					<p className={css.input_error}>{errors.wish?.message}</p>
				</div>

				<div>
					<label htmlFor="attend">Attend?</label>

					<div className="radio">
						<input type="radio" value="true" {...register("attend")} />
						<span>Yes</span>
					</div>
					<div className="radio">
						<input type="radio" value="false" {...register("attend")} />
						<span>No</span>
					</div>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
