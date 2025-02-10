interface SocialIconProps {
    href: string;
    ariaLabel: string;
    children: React.ReactNode;
  }
  const phoneNumber = "5521984548915";
    const message = "Olá, gostaria de saber mais sobre o serviço de terapia.";
  
    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
  
  const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-cor1 text-white hover:bg-cor3 transition-colors duration-300"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  export default function SocialIcons() {
    return (
      <div className="flex space-x-4 items-center justify-center ">
        <SocialIcon href={whatsappUrl} ariaLabel="formattedMessage" >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/psicologarebecaouriques/" ariaLabel="Me siga no Instagram">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </SocialIcon>
      </div>
    );
  }
  