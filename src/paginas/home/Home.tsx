import rebeca from '../../assets/rebeca1.png'
import GoogleReviews from '../../componentes/googlereviews/GoogleReviews';
import Contato from '../contato/Contato';

import Sobre from '../sobre/Sobre';


function Home() {
    // const calendar = `https://calendar.app.google/1yfoC2DBV5Vb5mE99`;
    const phoneNumber = "5521976266447";
    const message = "Olá, gostaria de saber mais sobre o serviço de terapia.";

    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

    return (

        <>
            <section id="home" className="md:overflow-y-hidden w-full md:h-screen flex md:flex-col items-center pt-16 md:py-12 px-2 mx-0 justify-center text-cor2">
                <div className="container h-full flex-row md:flex items-center justify-between px-2 md:px-6 ">
                    <div className=" flex flex-col  place-items-center justify-evenly w-full h-full space-y-2 text-center">
                        <div>
                            <h1 className="h-auto pt-4 flex justify-center text-4xl text-cor3 tracking-tighter md:text-5xl lg:text-6xl/none">
                                <p className='font-nome py-2 text-5xl '>Rebeca Ouriques</p>
                            </h1>
                        </div>
                        <div className="h-auto flex justify-center items-center  ">
                            <p className=' py-1 text-cor3 text-2xl md:text-4xl lg: font-corpo md:w-[70vh]'>Atendimento psicológico respeitando sua história, seu tempo e sua singularidade.
                            </p>
                        </div>

                        <div className="h-auto space-x-4 py-1 flex justify-center items-center  ">

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cor2 text-white mt-1 border-3 rounded-3xl shadow-2xl p-3 m-4 md:m-2 font-corpo text-2xl animate-pulse"
                            >
                                Agende sua consulta
                            </a>

                        </div>
                    </div>


                    <div className="relative my-auto mx-auto w-[40vh] h-[57vh] sm:h-[56vh] md:h-[80vh] md:w-[100vh] lg:h-[80vh] xl:h-full mb-[-3.0rem] overflow-hidden">
                        <img
                            src={rebeca}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-12 md:pt-0'>
                <Sobre />
            </section>
            <section id="como-posso-ajudar" className='pt-12 md:pt-3 font-corpo'>
                <div className=" text-4xl font-corpo font-bold text-center xl:text-left bg-cor1 md:bg-inherit text-white md:text-slate-600 p-3">
                    Como posso ajudar
                </div>
                <div className="bg-transparent font-corpo text-slate-600 font-semibold text-justify text-2xl px-2 pt-4">
                    <p>
                        O acompanhamento psicológico pode auxiliar em momentos como:
                    </p>

                    <ul className="list-disc pl-5 space-y-2 pt-2">
                        <li>Ansiedade, estresse e sobrecarga emocional</li>
                        <li>Dificuldades nos relacionamentos afetivos e familiares</li>
                        <li>Sentimentos persistentes de tristeza, desânimo ou vazio</li>
                        <li>Processos de autoconhecimento e desenvolvimento emocional</li>
                    </ul>
                </div>
            </section>
            <section id="reviews" className='pt-12 md:pt-3 font-corpo'>
                <GoogleReviews />
            </section>
            <section id="contato" className='pt-12 md:pt-0'>
                <Contato />
            </section>

        </>
    )
}

export default Home