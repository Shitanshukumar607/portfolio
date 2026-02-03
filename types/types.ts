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
