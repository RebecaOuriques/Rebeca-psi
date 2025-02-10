import SocialIcons from "../socialIcons/SocialIcons";

function Footer() {

  return (
    <div className=" bg-cor1 flex flex-col justify-center p-2">
      <div className="text-white">
      <SocialIcons />
      </div>
      <div>
      <p className="text-white flex justify-center font-corpo text-xl">© 2025 Psicóloga Rebeca Ouriques.</p>
      </div>
    </div>
  );
}

export default Footer;


