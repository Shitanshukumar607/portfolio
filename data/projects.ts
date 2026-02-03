import { ProjectType, TimelineItem } from "@/types/types";

export const projects: ProjectType[] = [
  {
    title: "Craft Your Portfolio",
    desc: "Automatically turns your resume into a clean portfolio and deploys it on GitHub Pages.",
    stack: "Next.js · Github API · GitHub Pages",
    image: "/craftYourPortfolio.png",
    date: "2026-01",
    url: "https://CraftYourPortfolio.vercel.app",
    slug: "craft-your-portfolio",
    paragraphs: [
      "Craft Your Portfolio is a tool that automatically transforms your resume into a beautifully designed portfolio website.",
      "Simply upload your resume, and the app parses your experience, skills, and projects to generate a personalized portfolio.",
      {
        text: "The generated portfolio is then deployed directly to GitHub Pages, giving you a live website in minutes. Check out the ",
        link: {
          url: "https://CraftYourPortfolio.vercel.app",
          text: "live demo here",
        },
      },
      "This project leverages the GitHub API to create repositories and manage deployments seamlessly.",
    ],
  },
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Konva.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-12",
    url: "https://Drawspace.vercel.app",
    slug: "drawspace",
    githubUrl: "https://github.com/shitanshukumar607/drawspace",
    paragraphs: [
      "Drawspace is a collaborative whiteboard application that enables real-time drawing and brainstorming with multiple users.",
      "Built with Konva.js for canvas rendering, the app provides smooth drawing experiences with various tools including brushes, shapes, and text.",
      "WebSockets power the real-time collaboration, ensuring all participants see changes instantly without any noticeable delay.",
      "Perfect for remote teams, educators, and creative collaborations.",
    ],
  },
  {
    title: "AsciiYou",
    desc: "Turns your live webcam feed into real-time ASCII art using pixel sampling and canvas rendering.",
    stack: "React · getUserMedia · Canvas API",
    image: "/asciiYou.png",
    date: "2025-11",
    url: "https://asciiYou.vercel.app",
    slug: "asciiyou",
    paragraphs: [
      "AsciiYou transforms your live webcam feed into mesmerizing ASCII art in real-time.",
      "Using the getUserMedia API, the app captures your video stream and processes each frame through a custom pixel sampling algorithm.",
      "The Canvas API is used to render the ASCII characters, mapping brightness values to a carefully selected character set for optimal visual effect.",
      "Customize the output with different character sets, colors, and resolution settings to create unique ASCII portraits.",
    ],
  },
];

export const timelineData: TimelineItem[] = [
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

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return projects.find((project) => project.slug === slug);
}
