"use client";

import { pageLoadGSAP } from "@/utils/use-gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const data = [
  {
    topicName: "Intro",
    details:
      "I started coding in late 2023, building small websites for friends and personal ideas. Nothing fancy, but it was enough to get me hooked. From there, I’ve been consistently learning and experimenting with web technologies.",
  },
  {
    topicName: "Work & Projects",
    details: (
      <>
        I’ve built multiple full-stack projects using React, Next.js, and
        JavaScript that including games, browser extensions, and collaborative
        tools. Alongside building, I actively participate in contests on{" "}
        <Link
          href="https://leetcode.com/u/Shitanshukumar607"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          LeetCode
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.codechef.com/users/shitanshukumar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          CodeChef
        </Link>
        .
      </>
    ),
  },
  {
    topicName: "Nowadays",
    details:
      "These days, I’m focused on strengthening my core CS fundamentals, improving my problem-solving skills, and learning backend, databases, and system design.",
  },
  {
    topicName: "Outside of Coding",
    details:
      "Outside of coding, you’ll usually find me playing chess, participating in hackathons, and collaborating with other developers. Currently based  in Banglore.",
  },
  {
    topicName: "Get in Touch",
    details: (
      <>
        If you're around and want to chat,{" "}
        <Link
          href="mailto:shitanshukumar639@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          drop me a message
        </Link>
        .
      </>
    ),
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { cleanup } = pageLoadGSAP(containerRef.current);

    return () => {
      cleanup();
    };
  }, []);

  return (
    <main ref={containerRef} className="my-25">
      <h1 className="text-5xl sm:text-6xl font-extrabold">About Shitanshu</h1>
      <h2 className="mt-2 text-xl sm:text-2xl">
        A bit about me and how I got into coding.
      </h2>

      <div className="mt-12 flex flex-col gap-10">
        {data.map((d, i) => {
          return (
            <div key={i}>
              <h3 className="text-xl text-gray-500 font-semibold">
                {d.topicName}
              </h3>
              <p className="text-lg">{d.details}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default About;
