import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/sections/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/sections/Contact';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
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
