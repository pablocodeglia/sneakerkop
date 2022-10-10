import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Nav from "./components/Layout/Nav";
import DetailPage from "./components/Pages/DetailPage";
import VidBG from "./components/Pages/VidBG";
import Catalog from "./components/Pages/Catalog";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<VidBG />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
