import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "hooks";
const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center transition duration-300 hover:scale-[1.15] active:scale-105 cursor-pointer border border-black/10"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-blue-400 w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
