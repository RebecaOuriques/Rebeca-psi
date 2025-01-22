import psi from '../../assets/psychological.png';

function Navbar() {
  return (
    <nav className="flex justify-between px-4 border-gray-200 bg-cor1 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="py-2.5 flex justify-between font-semibold hover:scale-105 transition-transform duration-400">
        <img src={psi} className="h-6 mx-1" /> 
        <p className="text-sm hidden md:block">Rebeca Ouriques | Psicóloga</p>
      </div>

      <div className="py-2.5 flex items-center justify-around w-[50vh] transition-transform duration-400">
        <div>
          <a href="#home" className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Home
          </a>
        </div>
        <div>
          <a href="#sobre" className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Sobre
          </a>
        </div>
        <div>
          <a href="#servico" className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Serviços
          </a>
        </div>
        <div>
          <a href="#contato" className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Contato
          </a>
        </div>
        <div>
          <a href="#razoes" className="hover:text-cor3 hover:font-bold font-semibold text-sm">
            Razões
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
