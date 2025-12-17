import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/", icon: "01" },
    { name: "Projects", href: "/Projetos", icon: "02" },
    { name: "Stack", href: "/tecnologias", icon: "03" },
    { name: "About", href: "/sobreMim", icon: "04" },
  ];

  return (
    <nav className="w-full flex flex-col justify-center">
      <ul className="flex flex-col gap-1 w-full">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <li key={item.name} className="relative group block">
              <Link
                to={item.href}
                className="relative z-10 flex items-baseline justify-between py-3 w-full group"
              >
                <div className="flex items-center gap-4 transition-all duration-500 ease-out group-hover:translate-x-2">
                  
                  <span className={`
                    h-1.5 w-1.5 rounded-full transition-all duration-300
                    ${isActive ? 'bg-[#cd4631] opacity-100' : 'bg-[#e3e3e3] opacity-0 group-hover:opacity-50'}
                  `}></span>

                  <span 
                    className={`
                      text-2xl tracking-wide transition-colors duration-300
                      ${isActive 
                        ? 'text-[#cd4631]' 
                        : 'text-[hsl(0,100%,91%)] group-hover:text-[#e3e3e3]' 
                      }
                    `}
                    style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 400 }}
                  >
                    {item.name}
                  </span>
                </div>

                <span className={`
                  font-mono text-xs transition-colors duration-300
                  ${isActive ? 'text-[#cd4631] opacity-100' : 'text-[#333] group-hover:text-[#666]'}
                `}>
                  {item.icon}
                </span>


                <div className="absolute bottom-0 left-0 w-full h-px bg-[#ffffff] opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 origin-left"></div>
                
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;