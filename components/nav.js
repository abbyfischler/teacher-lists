import Link from "next/link";
import { useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Make List", href: "/makelists" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log("Made by Abby Fischler Want to hire me? abbyfischler.com");
  });
  return (
    
    <nav className="dark:text-white bg-maroonx-11">
          <title>TeacherLists</title>
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-6 mt-4 sm:mt-0">
        <li>
          <img src="/logo.png" className="w-28 h-28"></img>
          </li>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                document
                  .querySelector("#theme_toggle")
                  .classList.toggle("rotate-180");
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
              id="theme_toggle"
            >
              <CgDarkMode size={24} />
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
