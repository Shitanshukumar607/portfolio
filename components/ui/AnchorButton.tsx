import Link from "next/link";
import { ReactNode } from "react";

interface AnchorButtonProps {
  text: string;
  href: string;
  icon?: ReactNode;
}

const AnchorButton = ({ text, href, icon }: AnchorButtonProps) => {
  return (
    <Link
      href={href}
      className="group relative inline-flex h-12 gap-2 text-lg items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 dark:border-gray-700 bg-transparent px-6 font-medium text-neutral-600 dark:text-[#DDDDDD] transition-all [box-shadow:0px_4px_0.5px_#d4d4d4] dark:[box-shadow:0px_4px_0.5px_#374151] hover:translate-y-0.5 hover:shadow-none"
    >
      {text} {icon}
    </Link>
  );
};

export default AnchorButton;
