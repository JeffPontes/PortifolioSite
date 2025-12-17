import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DropDown() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/Projetos" },
    { name: "Tecnologias", href: "/tecnologias" },
    { name: "Sobre mim", href: "/sobreMim" },
  ];

  return (
    <nav className="lg:hidden ">
      {/* BOTÃO */}
      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bottom-4 absolute z-10 right-10 mb-10 w-40 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-3"
          >
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition active:scale-95"
      >
        <span className="text-white text-lg">☰</span>
      </button>

      
    </nav>
  );
}
