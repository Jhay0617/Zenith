import { useState } from "react";

import { darkTheme, lightTheme } from "./ui/Theme";
import { ThemeProvider } from "styled-components";
import Dashboard from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Dashboard currentTheme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
