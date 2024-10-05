import { SectionHeading } from "components";
import { useSectionInView } from "hooks";
import { experiencesData } from "lib";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const leftAlign =
  "mb-0 flex justify-between flex-row-reverse items-center w-full left-timeline";

const rightAlign = "flex justify-between items-center w-full right-timeline";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });
  return (
    <section
      ref={ref}
      id="experience"
      className="text-center sm:mb-0 scroll-mt-28"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
          <div
            className="hidden sm:block absolute bg-gray-200 dark:bg-gray-700 h-full w-1 rounded-full"
            style={{ left: "49.9%" }}
          ></div>
          {experiencesData.map((data, index) => (
            <motion.div
              key={index}
              className={index % 2 === 0 ? leftAlign : rightAlign}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <TimelineCard value={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ value }: { value: (typeof experiencesData)[number] }) {
  return (
    <>
      <div className="order-1 hidden sm:block sm:w-5/12"></div>
      <div className="z-20 items-center order-1 bg-gray-800 dark:bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden sm:flex">
        <h1 className="mx-auto font-semibold text-lg text-white dark:text-white">
          {value.icon}
        </h1>
      </div>
      <div className="w-full order-1 bg-white/70 rounded-xl sm:w-5/12 px-6 py-4 text-left min-h-[10rem] text-gray-600 mb-4 sm:mb-0 shadow-sm dark:bg-gray-800/60 dark:text-gray-300">
        <h3 className="text-lg text-gray-800 font-semibold dark:text-gray-100">
          {value.title}
        </h3>
        <h4 className="text-sm text-gray-800 mb-2 dark:text-gray-200">
          {value.company}
        </h4>
        <p className="text-xs dark:text-gray-400">{value.location}</p>
        <p className="text-xs dark:text-gray-400">{value.date}</p>
        <hr className="my-3 h-[1px] border-t-0 bg-gray-300 opacity-100 dark:bg-gray-700 dark:opacity-50" />
        <p className="dark:text-gray-400">{value.description}</p>{" "}
      </div>
    </>
  );
}
