"use client";
import { useEffect } from "react";

function ResetHeader() {
  useEffect(() => {
    const header = document.querySelector("#header")!;
    const postBody = document.querySelector("#post-body")!;
    header.classList.remove("hide");
    postBody.classList.remove("move");
  }, []);
  return <></>;
}

export default ResetHeader;
