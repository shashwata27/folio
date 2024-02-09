import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function useLocationToScroll(baseURI: string) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      targetElement!.scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .querySelector(`#${baseURI}`)!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
}
