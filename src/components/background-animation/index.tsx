import { motion } from "framer-motion";

export default function BackgroundAnimations() {
  return (
    <div>
      {/* First Circle - Pastel Pink */}
      <motion.div
        className="fixed -z-10 left-[11rem] h-[31.25rem] w-[21.25rem] rounded-full blur-[3rem]"
        style={{ backgroundColor: "#FFD1DC" }} // Pastel Pink
        animate={{
          rotate: 180,
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Second Circle - Pastel Blue */}
      <motion.div
        className="fixed -z-10 left-[25rem] h-[24.25rem] w-[35.25rem] top-[15rem] rounded-full blur-[5rem]"
        style={{ backgroundColor: "#AEC6CF" }} // Pastel Blue
        animate={{
          rotate: -180,
          scale: [1, 1.1, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Third Circle - Pastel Mint */}
      <motion.div
        className="fixed top-[0rem] -z-10 right-[11rem] h-[51.25rem] w-[31.25rem] rounded-full blur-[4rem]"
        style={{ backgroundColor: "#B2F2BB" }} // Pastel Mint
        animate={{
          rotate: 180,
          scale: [1, 1.3, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
}
