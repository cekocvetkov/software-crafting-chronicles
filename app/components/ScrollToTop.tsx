import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function ScrollToTop() {
  const router = usePathname();

  useEffect(() => {
    const contentBody = document.querySelector("#content")!;

    contentBody.scroll({ top: 0, behavior: "smooth" });
  }, [router]);

  // Rest of your component logic
  return null;
}
export default ScrollToTop;
