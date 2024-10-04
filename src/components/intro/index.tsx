import { BaldManAnimation } from "components";
import { ToggleBtn } from "components";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView, useActiveSection } from "hooks";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { ref } = useSectionInView({ sectionName: "Home" });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center flex-col">
        <BaldManAnimation />

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold dark:text-gray-300">
            Hello, I'm Christian.
          </span>{" "}
          I'm a{" "}
          <span className="font-bold dark:text-gray-300">
            full-stack developer
          </span>{" "}
          that is{" "}
          <span className="font-bold dark:text-gray-300">passionate</span> about
          building{" "}
          <span className="italic dark:text-gray-300">sites & apps</span>. My
          focus is <span className="underline dark:text-gray-300">React</span>.
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          href="/CF-Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          href="https://www.linkedin.com/in/christian-francis-webdev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-105 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          href="https://github.com/strongcurrentscf"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <ToggleBtn />
      </motion.div>
    </section>
  );
}
