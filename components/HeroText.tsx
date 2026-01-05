import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { forwardRef, useImperativeHandle, useRef } from "react";

gsap.registerPlugin(SplitText);

export type HeroTextHandle = {
  gsapText: () => gsap.core.Timeline;
};

const HeroText = forwardRef<HeroTextHandle>((_, ref) => {
  const bandRef = useRef<HTMLParagraphElement | null>(null);
  const splitTextInstance = useRef<SplitText | null>(null);

  const gsapText = () => {
    if (!bandRef.current) return gsap.timeline();

    // cleanup previous split
    if (splitTextInstance.current) {
      splitTextInstance.current.revert();
    }

    splitTextInstance.current = new SplitText(bandRef.current, {
      type: "chars,words,lines",
      charsClass: "bandChar",
      wordsClass: "word",
      linesClass: "line",
      position: "relative",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    splitTextInstance.current.lines.forEach((line: Element, i: number) => {
      const charsInLine = line.querySelectorAll(".bandChar");

      tl.from(
        charsInLine,
        {
          y: -50,
          autoAlpha: 0,
          stagger: 0.02,
          duration: 0.6,
        },
        i * 0.1
      );
    });

    gsap.set(bandRef.current, { visibility: "visible" });

    return tl;
  };

  // expose to parent (same as defineExpose)
  useImperativeHandle(ref, () => ({
    gsapText,
  }));

  return (
    <p
      ref={bandRef}
      className="hero-text band invisible font-semibold pb-1 text-4xl sm:text-5xl"
    >
      Just a guy who enjoys building cool things for the web and beyond.
      {/* Currently living and working in Banglore. */}
    </p>
  );
});

export default HeroText;
