import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";

import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

export default function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </Suspense>
  );
}
