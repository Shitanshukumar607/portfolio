"use client";

import { pageLoadGSAP } from "@/utils/use-gsap";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    date: "Current",
    title: "Craft Your Portfolio",
    description:
      "A Next.js app that parses the resume, maps sections to templates, then uses the GitHub API to create a repo and trigger a GitHub Pages deployment automatically.",
    stack: "Next.js · Github API · GitHub Pages",
    url: "https://CraftYourPortfolio.vercel.app",
  },
  {
    date: "2026-01",
    title: "CP Discord Bot",
    description:
      "A Discord.js bot that connects with Codeforces to track ratings, maintain server leaderboards, auto-update user roles on rank changes.",
    stack: "Node.js · Discord.js · Codeforces API",
    url: "https://github.com/ShitanshuKumar607/CP-Discord-Bot",
  },
  {
    date: "2025-12",
    title: "Drawspace",
    description:
      "A collaborative whiteboard for real-time drawing. I used Konva.js for the canvas layer and WebSockets to sync strokes, cursors, and history across users with low latency.",
    stack: "Next.js · Konva.js · WebSockets",
    url: "https://Drawspace.vercel.app",
  },
  {
    date: "2025-11",
    title: "AsciiYou",
    description:
      "A live webcam-to-ASCII visualizer which captures frames with getUserMedia, sampled pixel blocks, mapped brightness to characters, and rendered the output in a canvas for real-time performance.",
    stack: "React · getUserMedia · Canvas API",
    url: "https://asciiYou.vercel.app",
  },
];

const Now = () => {
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
      <h1 className="text-5xl sm:text-6xl font-extrabold">What's New?</h1>
      <h2 className="text-xl sm:text-2xl mt-2">
        Updates on what I’m working on.
      </h2>

      <div className="mt-12 flex flex-col ">
        {timelineData.map((item, index) => (
          <div key={index} className="relative group pb-8 last:pb-0">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-[.3rem] before:h-full before:px-px before:bg-neutral-300 dark:before:bg-gray-700 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-[.3rem] after:w-3 after:h-3 after:bg-neutral-300 dark:after:bg-gray-700 after:mt-[-4.5px] after:border-8 after:box-content after:border-background after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
              <div className="pl-6 sm:pl-8 text-xl text-gray-500 font-semibold">
                <time>{item.date}</time>
              </div>
            </div>
            <div className="pl-6 sm:pl-8 mt-1 space-y-2">
              {"title" in item && item.title ? (
                <div className="text-lg font-semibold">
                  {item.url ? (
                    <a
                      href={item.url}
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
              ) : null}
              <p className="text-lg text-foreground">{item.description}</p>
              {"stack" in item && item.stack ? (
                <p className="text-sm text-muted-foreground">{item.stack}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Now;
