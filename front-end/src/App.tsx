import { BrowserRouter } from 'react-router-dom';
import './Styles/App.css';
import Menu from './Pages/menu';
import AnimateRoutes from './animatedComponents';
import DropDown from './Pages/dropDown';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen overflow-x-hidden h-screen lg:overflow-hidden flex bg-[#0c0c0c] text-[#e3e3e3] font-sans selection:bg-[#cd4631] selection:text-white relative">

        {/* TEXTURA DE FUNDO */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* LUZ AMBIENTE */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-[#cd4631]/10 via-[#2a2a2a]/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>

        {/* GRID */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] mask-image-gradient-to-b from-black to-transparent"></div>

        {/* ÁREA DE CONTEÚDO */}
        <div className="relative z-10 w-full lg:w-2/3 h-full flex flex-col justify-center px-8 lg:px-20 py-12">

          <div className="w-full">
            <AnimateRoutes />
          </div>

          {/* MENU MOBILE — FIXO NO CANTO INFERIOR DIREITO */}
          <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <DropDown />
          </div>

        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:block relative z-20 lg:w-1/3 h-full border-l border-[#ffffff]/10 bg-[#111111] flex flex-col p-12 justify-between">

          <div className="flex flex-col h-full justify-center pl-4">
            <h2 className="text-4xl font-thin mb-10 tracking-tight text-[#666]">
              Index
              <span className="text-[#cd4631] text-lg align-top ml-2">.</span>
            </h2>

            <div className="space-y-2 menu-container-style">
              <Menu />
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-end border-t border-[#ffffff]/5 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cd4631] animate-pulse"></div>
                <span className="text-xs text-[#888]">Available for work</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#333]">
              Lat: 40.7128° N
            </span>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
