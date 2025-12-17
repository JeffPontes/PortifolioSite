import { motion } from "framer-motion";

// Nova Paleta: Sóbria, Editorial
const COLORS = {
  BASE: '#0c0c0c',      // Fundo Principal (para transparência)
  ACCENT: '#cd4631',    // Terracota / Vermelho Tijolo
  LIGHT_TEXT: '#e3e3e3', // Off-white
  MUTED_TEXT: '#888',    // Cinza médio
  BORDER_DARK: '#333333', // Borda escura
};

// As cores das tags devem ser mais neutras, mas o ACCENT pode ser usado no hover.
const PROJECTS_DATA = [
  {
    title: "Mini CRM",
    description: "Sistema completo para gestão de clientes, construído com foco em escalabilidade.",
    tech: [
      { name: "React", color: "text-[#e3e3e3]" }, // Cor do texto principal
      { name: "Node.js", color: "text-[#888]" },
      { name: "TypeScript", color: "text-[#888]" },
    ],
    link: "#" 
  },
  {
    title: "Gerador de Automações N8N",
    description: "Ferramenta para criar fluxos de trabalho customizados, integrando IA e transformação de dados em tempo real.",
    tech: [
      { name: "TypeScript", color: "text-[#888]" },
      { name: "IA/NLP", color: "text-[#cd4631]" }, // Destaque na tech principal
      { name: "React", color: "text-[#e3e3e3]" },
    ],
    link: "#"
  },
  {
    title: "Estruturas de Dados",
    description: "Coleção de implementações de estruturas e algoritmos em Python, com análise de complexidade.",
    tech: [
      { name: "Python", color: "text-[#e3e3e3]" },
      { name: "Algorithms", color: "text-[#cd4631]" },
      { name: "Big O", color: "text-[#888]" },
    ],
    link: "#"
  },
  {
    title: "Design de Sistemas",
    description: "Arquiteturas e diagramas para sistemas distribuídos escaláveis (caching, microserviços, filas).",
    tech: [
      { name: "Architecture", color: "text-[#cd4631]" },
      { name: "Microservices", color: "text-[#888]" },
      { name: "Scalability", color: "text-[#e3e3e3]" },
    ],
    link: "#"
  },
];

const cardVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

function Projetos() {
  return (
    <motion.div
      // Animação de entrada da página
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen lg:h-full pt-4  pr-4 custom-scrollbar"
      style={{ color: COLORS.LIGHT_TEXT }}
    >
      {/* --- CABEÇALHO EDITORIAL --- */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <h1 
          className="text-4xl md:text-5xl text-[#e3e3e3] tracking-tight"
          style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 400 }}
        >
          Portfolio
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="h-px w-12 bg-[#cd4631]"></div>
          <p className="text-xs font-mono text-[#888] tracking-widest uppercase">
            Code & Concepts
          </p>
        </div>
      </motion.div>

      {/* --- GRID DE PROJETOS --- */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate="visible"
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            // Efeito de Hover: Sombra sutil escura e borda fina
            whileHover={{ 
              boxShadow: `0 4px 15px ${COLORS.BORDER_DARK}80`, 
              translateY: -2 
            }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-[#161616] border border-[#333] rounded-sm p-5 transition-all duration-300 hover:border-[#cd4631]/50 relative flex flex-col justify-between group"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-3">
                {/* Título: Mais simples e menos bold */}
                <h2 className="text-xl font-normal text-[#e3e3e3] tracking-tight">{project.title}</h2>
                
                {/* Link: Ícone Sutil */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-[#cd4631] transition-colors text-xs font-mono tracking-widest self-start p-1"
                  title="View Repository"
                >
                  {/* Ícone de Seta (Mais elegante que [VIEW]) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100">
                    <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                  </svg>
                </a>
              </div>
              
              {/* Descrição: Texto cinza suave */}
              <p className="text-[#888] text-sm mb-4 flex-1">
                {project.description}
              </p>
            </div>
            
            {/* Tags de Tecnologia: Foco na borda e cor do texto */}
            <div className="flex flex-wrap gap-2 mt-auto border-t border-[#333]/50 pt-3">
              {project.tech.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`
                    px-2 py-0.5 text-xs rounded-sm border 
                    border-[#333] transition-colors duration-300
                    ${tag.color} 
                    hover:border-[#cd4631]
                  `}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Styles para Scrollbar (Minimalista) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cd4631;
        }
      `}</style>

    </motion.div>
  );
}

export default Projetos;