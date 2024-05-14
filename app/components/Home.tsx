import styles from "./Home.module.css";
function HomeComponent() {
	return (
		<div className={styles.home}>
			<div className={styles.title}>software crafting chronicles</div>
			<div className={styles.author}>TSVETAN TSVETKOV</div>
		</div>
	);
}

export default HomeComponent;
