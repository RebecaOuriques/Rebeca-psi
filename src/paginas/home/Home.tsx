import rebeca from '../../assets/rebeca1.png'
import WhatsAppButton from '../../componentes/whatsapp/Whatsapp'
import Contato from '../contato/Contato';
import Razoes from '../razoes/Razoes';
import Servico from '../servico/Servico';
import Sobre from '../sobre/Sobre';

function Home() {

    const phoneNumber = "5521984548915";
    const message = "Olá, gostaria de agendar uma consulta!";

    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    return (

        <>
            <section id="home" className="w-full md:h-screen flex md:flex-col items-center pt-14 md:py-12 lg:py-16 xl:py-20 px-2 mx-0 justify-center bg-gradient-to-r text-cor2">
                <div className="container h-full flex-row md:flex items-center gap-2 justify-between px-2 md:px-6 ">
                    <div className=" flex-row grid place-items-center gap-2 w-full h-full space-y-4 text-center  ">

                        <div>
                            <h1 className=" h-auto pt-2 flex justify-center text-xl font-semibold text-black tracking-tighter md:text-2xl lg:text-3xl/none">
                                Psicóloga Rebeca Ouriques
                            </h1>
                        </div>
                        <div className="h-auto flex justify-center items-center">
                            <p className=' py-2 text-cor2 text-2xl md:text-3xl font-semibold md:w-[70vh]'>Seja bem-vindo ao espaço onde o acolhimento e o
                                autoconhecimento se encontram.</p>
                        </div>
                   
                    <div className="h-auto space-x-4 pb-4 mt-2 flex justify-center items-center">
                        <div className='hover:scale-105 transition-transform duration-300'>
                            <WhatsAppButton
                                phoneNumber={phoneNumber}
                                message="Olá, gostaria de mais informações sobre o serviço de teparia!"
                                showImage={false}
                            />
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cor1 text-white mt-2 border-3 rounded-lg p-2 m-4 md:m-2 font-semibold hover:bg-cor3 "
                            >
                                Agende sua consulta
                            </a>
                        </div>
                    </div>
                    </div>


                    <div className='container relative my-auto mx-auto w-[50vh] h-[57vh] md:h-[90vh] md:w-[100vh] md:mt-[-.3rem] mb-[-2.5rem] overflow-y-hidden'>
                        <img src={rebeca} alt="" className=' flex justify-start mt-3 md:mt-0 items-start pb-[-2.5rem]' />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-10 md:pt-8'>
                <Sobre />
            </section>
            <section id="servico" className='pt-10 md:pt-8'>
                <Servico />
            </section>
            <section id="contato" className='pt-6 md:pt-6'>
                <Contato />
            </section>
            <section id="razoes" className='pt-11 md:pt-9'>
                <Razoes />
            </section>

        </>
    )
}

export default Home