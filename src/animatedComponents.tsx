import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/home'
import Projetos from './Pages/projetos'
import Tecnologias from './Pages/tecnologias'
import SobreMim from './Pages/sobreMim'
import { AnimatePresence } from "framer-motion";

function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobreMim" element={<SobreMim />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimateRoutes;
