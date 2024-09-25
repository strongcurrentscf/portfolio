import { useRef } from "react";
import { projectsData } from "lib";
import { useScroll, motion, useTransform } from "framer-motion";

// Define the type for the props using the type from `projectsData`
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  tags,
  link,
  repository,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Set up the scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative m-auto max-w-[95%] overflow-hidden rounded-xl bg-gray-100/60 shadow-sm transition group-even:pl-8 sm:h-[26rem] sm:max-w-[42rem] sm:pr-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-left text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag: string) => (
              <li
                key={tag}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            {title === "Node Services" ? (
              <button
                type="button"
                className="mb-2 me-2 rounded-full bg-gray-800 px-4 py-2 text-xs text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-700"
                disabled
              >
                <div className="flex items-center gap-2">
                  <p>Service is live</p>
                  <div className="h-[5px] w-[5px] rounded-full bg-green-500"></div>
                </div>
              </button>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="mb-2 me-2 rounded-full bg-gray-800 px-4 py-2 text-xs text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  View Live App
                </button>
              </a>
            )}
            <a href={repository} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="text-gray-700 mb-2 me-2 rounded-full border border-gray-200/30 bg-gray-200 px-4 py-2 text-xs hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-200/30 dark:hover:bg-white dark:focus:ring-gray-700"
              >
                View Repository
              </button>
            </a>
          </div>
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition hover:-translate-x-3 hover:translate-y-3 hover:-rotate-6 hover:scale-[1.04] group-even:-left-40 group-even:right-[initial] sm:block"
        />
      </section>
    </motion.div>
  );
}
