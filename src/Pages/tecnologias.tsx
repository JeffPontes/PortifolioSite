import { useState } from "react";
import { motion } from "framer-motion";

const THEME = {
  ACCENT: '#cd4631',
  TEXT_MAIN: '#e3e3e3',
  TEXT_MUTED: '#888888',
  BG_CARD: '#161616',
  BORDER: '#333333',
  BORDER_HOVER: '#cd4631'
};

function Tecnologias() {
  const [activeGroup, setActiveGroup] = useState(null);

  const techGroups = [
    {
      id: "FRONTEND",
      label: "Client Side Architecture",
      index: "01",
      techs: [
        { id: "react", name: "React JS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: "tailwind", name: "Tailwind CSS", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { id: "js", name: "JavaScript ES6+", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { id: "ts", name: "TypeScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      id: "BACKEND",
      label: "Server Side Processing",
      index: "02",
      techs: [
        { id: "node", name: "Node.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id: "python", name: "Python 3", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { id: "express", name: "Express", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true }
      ]
    },
    {
      id: "DATABASE",
      label: "Data Structures",
      index: "03",
      techs: [
        { id: "postgres", name: "PostgreSQL", level: 82, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { id: "mongo", name: "MongoDB", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { id: "mysql", name: "MySQL", level: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      id: "DEVOPS",
      label: "Pipeline & Ops",
      index: "04",
      techs: [
        { id: "docker", name: "Docker", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { id: "git", name: "Git / Versioning", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { id: "postman", name: "API Testing", level: 88, logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, duration: 0.6 } 
    }
  };

  const cardVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "tween", ease: "easeOut", duration: 0.5 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-screen flex flex-col pt-4 overflow-auto" 
    >
      
      <div className="mb-8 flex flex-col gap-2 shrink-0">
         <h1 
            className="text-4xl md:text-5xl text-[#e3e3e3] tracking-tight"
            style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 400 }}
         >
            Toolkit
         </h1>
         <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[#cd4631]"></div>
            <p className="text-xs font-mono text-[#888] tracking-widest uppercase">
               Selected Technologies & Proficiency
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto pr-2 pb-6 custom-scrollbar">
        
        {techGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={cardVariants}
            onMouseEnter={() => setActiveGroup(group.id)}
            onMouseLeave={() => setActiveGroup(null)}
            className={`
               group relative flex flex-col p-6 
               bg-[#161616] border border-[#333] 
               transition-all duration-500 ease-out
               hover:border-[#cd4631]/50 hover:bg-[#1a1a1a]
            `}
          >
            <div className="flex justify-between items-start mb-6 border-b border-[#333] pb-4 group-hover:border-[#cd4631]/30 transition-colors">
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#666] mb-1">SECTION {group.index}</span>
                  <h3 className="text-lg text-[#e3e3e3] font-light tracking-wide">
                     {group.label}
                  </h3>
               </div>
               <div className={`text-[#444] group-hover:text-[#cd4631] transition-colors duration-300`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
               </div>
            </div>

            <div className="flex flex-col gap-4">
              {group.techs.map((tech) => (
                <div key={tech.id} className="flex flex-col gap-2 group/tech">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 grayscale opacity-60 group-hover/tech:grayscale-0 group-hover/tech:opacity-100 transition-all duration-300">
                           <img 
                              src={tech.logo} 
                              alt={tech.name} 
                              className={`w-full h-full object-contain ${tech.invert ? 'invert' : ''}`}
                           />
                        </div>
                        <span className="text-sm text-[#ccc] group-hover/tech:text-white transition-colors font-medium">
                           {tech.name}
                        </span>
                     </div>
                     <span className="text-xs font-mono text-[#555] group-hover/tech:text-[#cd4631] transition-colors">
                        {tech.level}/100
                     </span>
                  </div>

                  <div className="w-full h-[1px] bg-[#333] relative overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="h-full bg-[#cd4631]"
                     />
                  </div>

                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

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

export default Tecnologias;
