import React, { useRef, useEffect, useState } from "react";
import useNav from "./NavbarWrapper";
function TriggerEyeSection({ children }) {
  const { setEyeAnimation, eyeAnimation } = useNav();
  const ref = useRef();
  useEffect(() => {
    const onScroll = (e) => {
      if (!ref.current || eyeAnimation) return;
      const { offsetTop } = ref.current;
      if (
        e.target.documentElement.scrollTop >= offsetTop &&
        e.target.documentElement.scrollTop <= offsetTop + 100
      ) {
        setEyeAnimation(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <section ref={ref}>{children}</section>;
}

export default TriggerEyeSection;
