import rebeca from '../../assets/rebeca1.png'
import Contato from '../contato/Contato';
import Razoes from '../razoes/Razoes';
import Servico from '../servico/Servico';
import Sobre from '../sobre/Sobre';

function Home() {
    const calendar = `https://calendar.app.google/1yfoC2DBV5Vb5mE99`;

    return (

        <>
            <section id="home" className="w-full md:h-screen flex md:flex-col items-center pt-16 md:py-12 px-2 mx-0 justify-center bg-gradient-to-r text-cor2">
                <div className="container h-full flex-row md:flex items-center gap-2 justify-between px-2 md:px-6 ">
                    <div className=" flex-row grid place-items-center gap-2 w-full h-full space-y-4 text-center   ">
                        <div>
                            <h1 className=" h-auto pt-2 flex justify-center text-4xl text-cor3 tracking-tighter md:text-5xl lg:text-6xl/none">
                                <p className='font-nome py-2 text-6xl'>Rebeca Ouriques</p>
                            </h1>
                        </div>
                        <div className="h-auto flex justify-center items-center  ">
                            <p className=' py-2 text-cor3 text-3xl md:text-5xl font-corpo md:w-[70vh]'>Seja bem-vindo ao espaço onde o <span className="text-cor2 italic ">acolhimento</span> e o <span className='text-cor2 italic'>autoconhecimento</span> se encontram.</p>
                        </div>

                        <div className="h-auto space-x-4 pb-4 mt-2 flex justify-center items-center ">

                            <a
                                href={calendar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cor3 text-white mt-2 border-3 rounded-lg p-2 m-4 md:m-2 font-corpo text-2xl animate-pulse"
                            >
                                Agende sua consulta
                            </a>

                        </div>
                    </div>


                    <div className='container relative my-auto mx-auto w-[40vh] h-[57vh] md:h-[85vh] md:w-[90vh] mb-[-2.5rem] overflow-y-hidden'>
                        <img src={rebeca} alt="" className=' flex justify-start mt-3 md:mt-0 items-start pb-[-2.5rem]' />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-10 md:pt-8'>
                <Sobre />
            </section>
            <section id="servico" className='md:pt-8'>
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