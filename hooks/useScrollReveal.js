import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(triggerSelector = ".reveal") {
  useGSAP(() => {
    gsap.utils.toArray(triggerSelector).forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // when element enters viewport
          toggleActions: "play none none reverse", // animate in/out
        },
      });
    });
  }, []);
}