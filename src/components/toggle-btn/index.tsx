import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "hooks";

interface ToggleBtnProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  className?: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({
  position = {},
  className = "",
}) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const {
    top = "auto",
    bottom = "auto",
    left = "auto",
    right = "auto",
  } = position;

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed p-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center transition duration-300 hover:scale-[1.15] active:scale-105 cursor-pointer border border-black/10 shadow-lg dark:border-gray-600 ${className}`}
      style={{ top, bottom, left, right }}
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

export default ToggleBtn;
