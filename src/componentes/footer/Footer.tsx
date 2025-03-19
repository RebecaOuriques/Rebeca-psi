import SocialIcons from "../socialIcons/SocialIcons";
import psi from '../../assets/psychological2.png';

function Footer() {

  const anoAtual = new Date().getFullYear();
  const textoCopyright = "Todos os direitos reservados.";

  return (

    <>
      <div className="bg-cor2 flex flex-col justify-center py-2 w-full">
        <footer className="flex flex-col items-center">
          <div className="flex flex-row justify-center">
            <img src={psi} alt="Ícone Psicóloga" className="h-5 md:h-6 text-transparent mt-1 pr-2" />
            <p className="text-white flex justify-center font-corpo text-xl lg:text-3xl lg:font-nome">
              Rebeca Ouriques
              <span className="md:font-corpo pl-2 lg:mt-1">- Psicóloga CRP 05/80537.</span>
            </p>
          </div>
          <div className="text-white">
            <SocialIcons />
          </div>
          <p className="text-white flex justify-center font-corpo text-xl">
            © {anoAtual}. {textoCopyright}
          </p>
        </footer>
      </div>

    </>
  );
}

export default Footer;


