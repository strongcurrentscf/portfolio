import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BaldManAnimation() {
  const imageUrl =
    "https://avatars.githubusercontent.com/u/76409685?s=400&u=b73f36d512c82236ae1b5334cd2f8a12a76a4083&v=4";

  const [isMobile, setIsMobile] = useState(false);

  // Use matchMedia for more accurate mobile detection
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
    };

    // Set initial state
    handleResize();

    // Add event listener
    mobileMediaQuery.addListener(handleResize);

    return () => mobileMediaQuery.removeListener(handleResize);
  }, []);

  return (
    <div className="w-full h-[300px] relative overflow-hidden">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle 1 */}
        <motion.circle
          cx="50"
          cy="150"
          r="30"
          fill="url(#grad1)"
          stroke="white"
          strokeWidth="2"
          initial={{ x: 0, y: -30, scale: 0, opacity: 1 }}
          whileInView={{
            x: [0, 700],
            y: [0, -30, 0],
            scale: [0, 1.5, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
          }}
          viewport={{ once: true }} // Ensure animation only runs when the element is in view
        />

        {/* Circle 2 */}
        <motion.circle
          cx="50"
          cy="150"
          r="40"
          fill="url(#grad2)"
          stroke="white"
          strokeWidth="2"
          initial={{ x: 0, y: -50, scale: 0, opacity: 1 }}
          whileInView={{
            x: [0, 700],
            y: [0, -50, 0],
            scale: [0, 1.3, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        />

        {/* Circle 3 */}
        <motion.circle
          cx="50"
          cy="150"
          r="20"
          fill="url(#grad3)"
          stroke="white"
          strokeWidth="2"
          initial={{ x: 0, y: -20, scale: 0, opacity: 1 }}
          whileInView={{
            x: [0, 700],
            y: [0, -20, 0],
            scale: [0, 1.4, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        />

        {/* Circle 4 */}
        <motion.circle
          cx="50"
          cy="150"
          r="50"
          fill="url(#grad4)"
          stroke="white"
          strokeWidth="2"
          initial={{ x: 0, y: -60, scale: 0, opacity: 1 }}
          whileInView={{
            x: [0, 700],
            y: [0, -60, 0],
            scale: [0, 1.6, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 1.75,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        />

        {/* Circular Image Moving to Center */}
        <motion.foreignObject
          x="0"
          y="0"
          width={isMobile ? "192" : "120"} // Adjust size for mobile
          height={isMobile ? "192" : "120"} // Adjust size for mobile
          className="rounded-full object-cover border-[0.25rem] border-white dark:border-gray-200 shadow-sm"
          initial={
            isMobile
              ? { opacity: 0, x: 300, y: 0, scale: 0 }
              : { opacity: 0, x: 0, y: 100, scale: 0 }
          }
          whileInView={{
            x: isMobile ? [300] : [0, 340], // Different values for mobile
            y: isMobile ? [0] : [100, 33],
            opacity: [0, 1],
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.875,
            ease: "easeInOut",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              borderRadius: "50%", // Circular
            }}
            aria-label="Christian's profile picture"
          ></div>
        </motion.foreignObject>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FF6F91", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFC1E3", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFABAB", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFDAC1", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#B5EAD7", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#C7CEEA", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#9AECDB", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#55EFC4", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
