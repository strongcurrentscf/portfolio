// import { SectionHeading } from "components";
// import { motion } from "framer-motion";
// import { useSectionInView } from "hooks";

// export default function AboutMe() {
//   const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] scroll-mt-28 p-5 text-center leading-8 sm:mb-40 sm:rounded-2xl sm:bg-gray-100/60 sm:leading-10 sm:shadow-sm"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>about me</SectionHeading>
//       <p className="mb-3">
//         After starting college with a degree in{" "}
//         <span className="font-medium">Media Studies</span>, I discovered my
//         passion for{" "}
//         <span className="font-medium">
//           web development and computer science
//         </span>{" "}
//         while working in e-commerce management for a friend’s{" "}
//         <span className="font-medium">STEM startup</span>. Prior to that, I
//         spent several years working in customer-facing roles, where I developed{" "}
//         <span className="italic">
//           strong communication, problem-solving, and time management skills
//         </span>
//         . These experiences taught me the value of{" "}
//         <span className="font-medium">adaptability</span> and{" "}
//         <span className="font-medium">efficiency</span>, which I now apply to my
//         work in web development. Fascinated by the problem-solving nature of
//         programming, I decided to fully commit to learning{" "}
//         <span className="font-medium">full-stack web development</span>.
//       </p>
//       <p>
//         Since then, I’ve focused on building applications and services with a
//         core stack that includes{" "}
//         <span className="font-medium">
//           React, Next.js, Node.js, and TypeScript
//         </span>
//         . My favorite aspect of programming is the{" "}
//         <span className="italic">problem-solving process</span>, and I{" "}
//         <span className="underline">thrive</span> on the challenge of finding
//         solutions to complex issues.
//       </p>
//       <p>
//         I’ve primarily worked in{" "}
//         <span className="font-medium">smaller, close-knit teams</span>, where
//         I’ve taken ownership of both client-side features and backend
//         functionalities. My work emphasizes creating{" "}
//         <span className="font-medium">seamless user experiences</span> while
//         ensuring{" "}
//         <span className="font-medium">
//           efficient and scalable backend services
//         </span>
//         , always with a focus on delivering impactful digital solutions.
//       </p>
//     </motion.section>
//   );
// }

import { SectionHeading } from "components";
import { motion } from "framer-motion";
import { useSectionInView } from "hooks";

export default function AboutMe() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 p-5 text-center leading-8 sm:mb-40 sm:rounded-2xl sm:bg-gray-100/60 sm:leading-10 sm:shadow-sm dark:bg-gray-800/60 dark:text-gray-200"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        After starting college with a degree in{" "}
        <span className="font-medium dark:text-gray-300">Media Studies</span>, I
        discovered my passion for{" "}
        <span className="font-medium dark:text-gray-300">
          web development and computer science
        </span>{" "}
        while working in e-commerce management for a friend’s{" "}
        <span className="font-medium dark:text-gray-300">STEM startup</span>.
        Prior to that, I spent several years working in customer-facing roles,
        where I developed{" "}
        <span className="italic dark:text-gray-400">
          strong communication, problem-solving, and time management skills
        </span>
        . These experiences taught me the value of{" "}
        <span className="font-medium dark:text-gray-300">adaptability</span> and{" "}
        <span className="font-medium dark:text-gray-300">efficiency</span>,
        which I now apply to my work in web development. Fascinated by the
        problem-solving nature of programming, I decided to fully commit to
        learning{" "}
        <span className="font-medium dark:text-gray-300">
          full-stack web development
        </span>
        .
      </p>
      <p>
        Since then, I’ve focused on building applications and services with a
        core stack that includes{" "}
        <span className="font-medium dark:text-gray-300">
          React, Next.js, Node.js, and TypeScript
        </span>
        . My favorite aspect of programming is the{" "}
        <span className="italic dark:text-gray-400">
          problem-solving process
        </span>
        , and I <span className="underline dark:text-gray-300">thrive</span> on
        the challenge of finding solutions to complex issues.
      </p>
      <p>
        I’ve primarily worked in{" "}
        <span className="font-medium dark:text-gray-300">
          smaller, close-knit teams
        </span>
        , where I’ve taken ownership of both client-side features and backend
        functionalities. My work emphasizes creating{" "}
        <span className="font-medium dark:text-gray-300">
          seamless user experiences
        </span>{" "}
        while ensuring{" "}
        <span className="font-medium dark:text-gray-300">
          efficient and scalable backend services
        </span>
        , always with a focus on delivering impactful digital solutions.
      </p>
    </motion.section>
  );
}
