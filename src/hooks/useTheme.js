import { useContext } from "react";
import StyleContext from "../contexts/StyleContext"; // Adjust the path as needed

export const useTheme = () => {
  const { isDark } = useContext(StyleContext);
  return { isDark };
};
