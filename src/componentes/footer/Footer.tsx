import SocialIcons from "../socialIcons/SocialIcons";
import psi from '../../assets/psychological2.png';

function Footer() {

  return (

    <>
      <div className="bg-cor2 flex flex-col justify-center">
        <div className="flex flex-row justify-center mt-2">
          <img src={psi} className="h-5 md:h-6 text-transparent mt-1 pr-2" />
          <p><span className="text-white flex justify-center font-corpo text-xl md:text-3xl md:font-nome m-0">Rebeca Ouriques</span>
          - Psicóloga CRP 05/80537.</p>
        </div>
        <div className="text-white">
          <SocialIcons />
        </div>
        <p className="text-white flex justify-center font-corpo text-xl">© 2025</p>
      </div >
    </>
  );
}

export default Footer;


