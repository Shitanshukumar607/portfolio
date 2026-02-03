import { AboutSection } from "@/types/types";
import Link from "next/link";

export const aboutData: AboutSection[] = [
  {
    topicName: "Intro",
    details:
      "I started coding in late 2023, building small websites for friends and personal ideas. Nothing fancy, but it was enough to get me hooked. From there, I've been consistently learning and experimenting with web technologies.",
  },
  {
    topicName: "Work & Projects",
    details: (
      <>
        I've built multiple full-stack projects using React, Next.js, and
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
      "These days, I'm focused on strengthening my core CS fundamentals, improving my problem-solving skills, and learning backend, databases, and system design.",
  },
  {
    topicName: "Outside of Coding",
    details:
      "Outside of coding, you'll usually find me playing chess, participating in hackathons, and collaborating with other developers. Currently based  in Banglore.",
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
