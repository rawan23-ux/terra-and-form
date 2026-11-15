import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Project";
import Approach from "./components/Approach";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Account from "./components/Account";

function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Approach />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;