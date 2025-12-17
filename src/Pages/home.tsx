import { motion } from "framer-motion";

// Array de redes sociais
const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jeff_ll0/',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jefferson-pontes-martins-aa74a8348/',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  }
];

function Home() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full h-full justify-center px-4 sm:px-8 text-[color:#e3e3e3]"
    >
      <div className="flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className='text-4xl sm:text-6xl lg:text-8xl tracking-tight font-[Fredoka] font-normal'
        >
          JEFFERSON PONTES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-2xl font-light tracking-wider text-[color:#cd4631]"
        >
          Desenvolvedor Full-Stack
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative pl-4 sm:pl-6 border-l-2 border-[#333] text-[#888] leading-relaxed mt-4 sm:mt-6 text-sm sm:text-base transition-colors duration-300 hover:border-[#cd4631] max-w-xl font-[Sawarabi\ Mincho]"
        >
          Desenvolvedor Full-Stack focado em criar experiências digitais eficientes e intuitivas. Apaixonado por tecnologia, boas práticas e soluções escaláveis. Sempre aprendendo e aplicando novas tecnologias para entregar projetos de qualidade.
        </motion.p>
      </div>

      <div className="border-t border-[#333] pt-8 sm:pt-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex gap-4 sm:gap-6"
        >
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-[#333] bg-[#161616] group-hover:border-[#cd4631]">
                <img
                  src={social.logo}
                  alt={social.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
