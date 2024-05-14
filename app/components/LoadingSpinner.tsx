import styles from "./LoadingSpinner.module.css";
function LoadingSpinner() {
	return (
		<div className={styles.loadingWrapper}>
			<div className={styles.loading}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default LoadingSpinner;
