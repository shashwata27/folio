import { Container } from "@mui/joy";
import { ReactNode, useEffect, useRef } from "react";

import { debounce } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AutoScrollContainer = ({
  baseURI,
  children,
}: {
  baseURI: string;
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);
  const navigate = useNavigate();

  const debouncedNavigate = debounce((id: string) => {
    // ensure only one navigate call will be made in 10ms
    navigate(`/${baseURI}#${id}`);
  }, 500);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // Adjust the threshold as needed
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && !initialRender.current) {
            debouncedNavigate(id);
          }
          initialRender.current = false;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      // Observe each section with the specified class
      containerRef.current
        .querySelectorAll("section[id]")
        .forEach((section) => {
          observer.observe(section);
        });
    }

    return () => {
      observer.disconnect(); // Cleanup when component unmounts
    };
  }, [navigate]);

  return (
    <Container
      sx={{ py: 2, maxHeight: "90vh", overflow: "auto" }}
      ref={containerRef}
    >
      {children}
    </Container>
  );
};

export default AutoScrollContainer;
