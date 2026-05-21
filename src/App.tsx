import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Galeria from "@/pages/Galeria";
import Kontakt from "@/pages/Kontakt";
import Pokoje from "@/pages/Pokoje";
import Wpis from "@/pages/Wpis";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<Pokoje />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Wpis />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </Router>
  );
}
