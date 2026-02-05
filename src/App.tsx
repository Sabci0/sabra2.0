import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Wyroby from "./pages/Wyroby";
import Galeria from "./pages/Galeria";
import Kontakt from "./pages/Kontakt";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wyroby" element={<Wyroby />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Route>
        <Route path="*" element={<div className="p-10">404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
