import styles from "./page.module.css";
import React from "react";

function Journal() {
  return (
    <div className={styles.journalWrapper}>
      <div className={styles.input}>
        <input type="text" />
      </div>
      <div className={styles.results}>results</div>
    </div>
  );
}

export default Journal;
