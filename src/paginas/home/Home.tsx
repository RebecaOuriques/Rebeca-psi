import rebeca from '../../assets/mental.png'
import WhatsAppButton from '../../componentes/whatsapp/Whatsapp'
import Contato from '../contato/Contato';
import Razoes from '../razoes/Razoes';
import Servico from '../servico/Servico';
import Sobre from '../sobre/Sobre';

function Home() {

    const phoneNumber = "5521989409557";
    const message = "Olá, gostaria de agendar uma consulta!";

    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    return (

        <>
            <section className="w-full flex py-12 md:py-12 lg:py-16 xl:py-20 px-2 mx-0 justify-center bg-gradient-to-r text-cor2">
                <div className="container flex px-2 md:px-6">
                    <div className="flex flex-col justify-center items-center space-y-4 text-center ">
                        <div className="space-y-2 flex-row ">
                            <h1 className="text-2xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Psicóloga Rebeca Ouriques
                            </h1>
                            <p className="mx-auto max-w-[700px] text-daniAzul md:text-xl dark:text-daniAzul"></p>
                            <p className=' text-daniAzul md:text-xl dark:text-cor3'>Seja bem-vindo ao espaço onde o acolhimento e o
                                autoconhecimento se encontram.</p>
                        </div>
                        <div className="space-x-4 flex justify-center items-center">
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
                                className="bg-cor1 text-white border-3 rounded-lg p-2 hover:bg-cor3 "
                            >
                                Agende sua consulta
                            </a>
                            </div>
                             {/* // <div className='hover:scale-105 transition-transform duration-300'>
                              <button className="bg-daniRose border-3 rounded-lg p-2 hover:bg-daniVermelho">Saiba +</button>
                             </div> */}
                          </div>
                    </div>

                    <div className='container mx-auto w-[50vh] flex'>
                        <img src={rebeca} alt="" className=' flex justify-center mt-2 w-[50vh] rounded-lg ' />
                    </div>
                </div>

            </section>

            <Sobre />
                <Servico />
                <Contato />
                <Razoes />

        </>
    )
}

export default Home