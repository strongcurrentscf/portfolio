import { links } from "../../lib";

export default function Header() {
  return (
    <header className="z-[100] relative">
      <div className="fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem] sm:top-6 sm:h-[3.25rem] sm:w-[41rem] sm:rounded-full dark:bg-opacity-75"></div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
            >
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
