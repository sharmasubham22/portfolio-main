import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import Menu from './components/Menu';
import ScrollTop from './components/ScrollTop';
import Error from "./components/Error";
import { useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/sections/Home";
// import Cursor from "./components/Cursor";

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
          <Loader/>
          {/* <Cursor/> */}
          <ScrollTop />
          <Nav toggle={toggleMode} mode={mode} />
          <Menu toggle={toggleMode} mode={mode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
