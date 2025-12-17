import { motion } from "framer-motion";


const COLORS = {
  ACCENT: '#cd4631',    
  LIGHT_TEXT: '#e3e3e3',
  MUTED_TEXT: '#888',    
  BG_CARD: '#161616',    
  BORDER_DARK: '#333333', 
};

function SobreMim() {
  const stats = [
    { label: "Disciplina (Discipline)", value: 90, color: COLORS.ACCENT },
    { label: "Criatividade (Creation)", value: 85, color: COLORS.ACCENT },
    { label: "Foco (Zen Mode)", value: 95, color: COLORS.ACCENT } 
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen lg:h-full flex items-start lg:overflow-hidden lg:items-center justify-center p-4 relative overflow-y-auto"
    >
 

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}

        className="relative z-10 w-full max-w-5xl bg-[#161616] border border-[#333333] rounded-sm shadow-xl flex flex-col md:flex-row my-8 lg:my-0 overflow-hidden"
      >
   
        <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col items-center justify-center 
              border-b md:border-b-0 md:border-r border-[#333333] bg-[#0c0c0c] relative">

          <div className="relative w-40 h-40 md:w-56 md:h-56 mt-4 md:mt-0">
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#333333] z-10">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                 alt="Profile" 
                 className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-xl font-normal text-[#e3e3e3] tracking-wider" style={{ fontFamily: '"Fredoka", sans-serif' }}>[SEU NOME]</h2>
            <p className="text-xs font-mono text-[#888] mt-1">AX-9021-JP</p>
          </div>


             <a href="mailto:exemplo@email.com" className="mt-6 text-xs font-mono text-[#cd4631] hover:text-white transition-colors duration-300 border border-[#cd4631]/50 px-3 py-1 rounded-sm opacity-80 hover:opacity-100">
                Fale Comigo
             </a>
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-center">
          <motion.div 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 mt-4 md:mt-0"
          >
            <h1 
              className="text-4xl md:text-5xl font-light text-[#e3e3e3] tracking-tight mb-2"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              Biografia
            </h1>
            <div className="h-px w-16 bg-[#cd4631]"></div> 
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
          
             className="text-[#e3e3e3]/90 text-base leading-relaxed font-light mb-8 border-b border-[#333] pb-6"
          >
            <p className="mb-3">
              Sou um <span className="text-[#cd4631] font-normal">desenvolvedor em formação</span> que vive entre linhas de código, música e um toque de Zen.
            </p>
            <p className="mb-3">
              Gosto de criar com intenção, estudar o Caminho todos os dias e evoluir a cada *commit*. 
              Trabalho com disciplina, busco clareza e acredito que a <span className="text-[#cd4631] font-normal">simplicidade bem feita</span> pode transformar sistemas.
            </p>
            <p className="font-mono text-xs opacity-70 mt-4 border-l-2 border-[#888] pl-3 italic">
              "Caminhando firme em direção ao futuro, com calma e com fogo ao mesmo tempo."
            </p>
          </motion.div>

          <div className="space-y-4">
            <span className="text-sm font-mono text-[#888] block mb-2">STATS (SOFT)</span>
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
              >
                <div className="flex justify-between text-xs font-mono mb-1 text-[#e3e3e3]">
                  <span className="text-[#888]">{stat.label}</span>
                  <span className="text-[#cd4631]">{stat.value}%</span>
                </div>
                <div className="w-full h-1 bg-[#333] overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="h-full"
                    style={{ backgroundColor: stat.color }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SobreMim;