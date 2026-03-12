import { useEffect } from "react";

export default function GoogleReviews() {

  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="text-4xl font-corpo font-bold text-center xl:text-left bg-cor1 md:bg-inherit text-white md:text-slate-600 p-3">
        Avaliações
      </div>

      <div className="text-slate-600 text-4xl py-3 text-center">
        A experiência de quem já passou por aqui
      </div>

      <div className="w-full max-w-full overflow-x-hidden">
        <div
          className="elfsight-app-2e7c9135-23f5-4b22-9d7e-bd37c447f036"
          data-elfsight-app-lazy
        />
      </div>
    </>
  );
}