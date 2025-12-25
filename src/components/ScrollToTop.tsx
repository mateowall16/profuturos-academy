import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Pequeno delay garante que o DOM já foi renderizado
    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 90; // altura do header fixo
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          return;
        }
      }

      // Caso não tenha hash, vai pro topo
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
