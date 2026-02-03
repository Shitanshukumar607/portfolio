import { ReactNode } from "react";

export interface ProjectParagraph {
  text: string;
  link?: {
    url: string;
    text: string;
  };
}

export interface ProjectType {
  title: string;
  desc: string;
  stack: string;
  image: string;
  date: string;
  url: string;
  slug: string;
  githubUrl?: string;
  paragraphs?: (string | ProjectParagraph)[];
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  stack: string;
  url: string;
}

export interface AboutSection {
  topicName: string;
  details: string | ReactNode;
}
