import Link from "next/link";

const navigationLinks = [
  { name: "About", link: "/about" },
  { name: "Now", link: "/now" },
  { name: "Contact", link: "/contact" },
  { name: "GitHub", link: "https://github.com/ShitanshuKumar607" },
];

const Footer = () => {
  return (
    <footer className=" rounded-lg -mt-25">
      <div className="pt-4 pb-12 md:py-8 mx-auto w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="mb-4 sm:mb-0 flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="shadow-hand text-4xl font-semibold whitespace-nowrap select-none">
              Shitanshu
            </span>
          </Link>

          <ul className="mb-6 sm:mb-0 flex flex-wrap items-center text-sm font-medium">
            {navigationLinks.map((link) => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  className="mr-4 sm:ml-6 sm:mr-0 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}{" "}
          </ul>
        </div>
        <hr className="my-4 sm:mx-auto" />
        <span className="block text-sm text-gray-500 dark:text-neutral-400">
          © 2026 <Link href="/">Shitanshu</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
