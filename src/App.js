import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/sections/Projects';
import About from './components/About';
import Footer from './components/Footer';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import Menu from './components/Menu';
import ScrollTop from './components/ScrollTop';
import Error from "./components/Error";
import { useState } from "react";

function App() {
    const [mode, setmode] = useState("light");

    const toggleMode = () => {
      if (mode === "light") {
        setmode("dark");
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme","dark");
      } else {
        setmode("light");
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme","dark");
      }
    };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ScrollTop />
          <Nav toggle={toggleMode} mode={mode} />
          <Menu toggle={toggleMode} mode={mode} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Projects />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
