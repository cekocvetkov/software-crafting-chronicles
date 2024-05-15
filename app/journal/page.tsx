"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./page.module.css";
import React, { ChangeEvent } from "react";

function Journal() {
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    router.push(`${pathname}?search=${input}`);
  }

  return (
    <div className={styles.journalWrapper}>
      <div className={styles.input}>
        <input className={styles.input} autoFocus={true} type="text" placeholder="search" onChange={handleSearch} />
      </div>
    </div>
  );
}

export default Journal;
