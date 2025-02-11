import { useEffect, useRef } from "react";

declare global {
    interface Window {
      calendar?: {
        schedulingButton: {
          load: (options: { url: string; color: string, label: string, target: Element | null }) => void;
        };
      };
    }
  }

  const Botao: React.FC = () => {
    const buttonRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Verifica se o script já foi carregado
      const scriptAlreadyLoaded = document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]');
      
      if (!scriptAlreadyLoaded) {
        const script = document.createElement("script");
        script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
        script.async = true;
  
        script.onload = () => {
          if (window.calendar?.schedulingButton && buttonRef.current) {
            window.calendar.schedulingButton.load({
              url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ19q-fY9iPttlGl6Aln_gJp9le7KQhM1LohJFY79Oc846qAE1phg9ABv-ppms-BG5P0uLS0PkQr?gv=true",
              color: "#039BE5",
              label: "Agendar um compromisso",
              target: buttonRef.current,
            });
          }
        };
  
        script.onerror = (error) => {
          console.error("Erro ao carregar o script do Google Calendar:", error);
        };
  
        document.body.appendChild(script);
      }
  
      // Garantir que o botão seja carregado uma única vez
      return () => {
        const script = document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]');
        if (script) {
          script.remove();
        }
      };
    }, []);
  
    return <div ref={buttonRef} className="fixed bottom-10 right-10 z-50" ></div>;
  };
  
  export default Botao;
  