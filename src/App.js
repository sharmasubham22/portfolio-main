import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/sections/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/sections/Contact';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import Menu from './components/Menu';
import ScrollTop from './components/ScrollTop';
// import { useState } from 'react';

function App() {
  //   const [mode, setmode] = useState("light");

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     document.querySelector("body").setAttribute("data-theme", "dark");
     
  //   } else {
  //     setmode("light");
  //     document.querySelector("body").setAttribute("data-theme", "light");

  //   }
  // };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ScrollTop />
          <Nav />
          <Menu />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
