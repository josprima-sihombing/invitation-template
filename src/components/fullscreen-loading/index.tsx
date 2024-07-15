import Spinner from "./spinner";

import css from "./fullscreen-loading.module.css";

export default function FullScreenLoading() {
	return (
		<div className={css.overlay}>
			<Spinner />
		</div>
	);
}
