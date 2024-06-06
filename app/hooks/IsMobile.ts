import { useRef, useEffect } from "react";

const useMobile = () => {
  const isMobile = useRef(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      isMobile.current = true;
    } else {
      isMobile.current = false;
    }
    console.log("Mobile View? - " + isMobile.current);
  }, []);

  return isMobile;
};

export default useMobile;
