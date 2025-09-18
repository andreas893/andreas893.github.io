// src/hooks/useScrollReveal.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Reusable scroll reveal.
 * - Add class "reveal" (or pass your own selector) to any element you want animated.
 * - Pass dependencies (like state that changes the DOM) so the hook re-runs after fetch.
 */
export function useScrollReveal(selector = ".reveal", deps = []) {
  useGSAP(() => {
    const els = gsap.utils.toArray(selector);

    els.forEach((el) => {
      // avoid double-binding in React Strict Mode by tagging once
      if (el.dataset.revealBound) return;
      el.dataset.revealBound = "true";

      gsap.from(el, {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse", // change to "play none none none" if you don't want it to reverse
        },
      });
    });

    // ensure ScrollTrigger recalculates after layout changes
    ScrollTrigger.refresh();
  }, { dependencies: deps });
}
