import psi from '../../assets/psychological2.png';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.marginTop = '110px'; 
    } else {
      document.body.style.marginTop = '0';
    }

    return () => {
      document.body.style.marginTop = '0';
    };
  }, [isOpen]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 100; 
      window.scrollTo({
        top: offset,
        behavior: 'smooth', 
      });
    }
  
    setIsOpen(false);
  }
  return (
    <nav className="grid grid-flow-col justify-between px-4 bg-cor1 border-gray-200 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className=" py-2.5 flex justify-start font-semibold hover:scale-105 transition-transform duration-400">
        <img src={psi} className="h-6 mx-1 text-transparent" /> 
        <p className="font-nome block px-1">Rebeca Ouriques</p> <p className='pl-1 mt-1 font-corpo'>| Psicóloga</p>
      </div>

      <div className={`py-2.5 md:flex md:items-center bg-transparent justify-items-center  md:justify-evenly w-[10vh] md:w-[90vh] font-corpo transition-transform duration-400 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className='py-1 md:py-0'>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Home
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')} className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Sobre
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#servico" onClick={(e) => handleLinkClick(e, 'servico')} className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Serviços
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')} className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Contato
          </a>
        </div>
        <div className='py-1 md:py-0'>
          <a href="#razoes" onClick={(e) => handleLinkClick(e, 'razoes')} className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Razões
          </a>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-start pt-1.5 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
