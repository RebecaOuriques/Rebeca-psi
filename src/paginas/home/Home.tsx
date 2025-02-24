import rebeca from '../../assets/rebeca1.png'
import Contato from '../contato/Contato';
import Perguntas from '../perguntas/Perguntas';
import Razoes from '../razoes/Razoes';
import Servicos from '../servico/Servicos';
import Sobre from '../sobre/Sobre';

function Home() {
    const calendar = `https://calendar.app.google/1yfoC2DBV5Vb5mE99`;

    return (

        <>
            <section id="home" className="md:overflow-y-hidden w-full md:h-screen flex md:flex-col items-center pt-16 md:py-12 px-2 mx-0 justify-center text-cor2">
                <div className="container h-full flex-row md:flex items-center justify-between px-2 md:px-6 ">
                    <div className=" flex flex-col  place-items-center justify-evenly w-full h-full space-y-2 text-center">
                        <div>
                            <h1 className="h-auto pt-4 flex justify-center text-4xl text-cor3 tracking-tighter md:text-5xl lg:text-6xl/none">
                                <p className='font-nome py-2 text-6xl '>Rebeca Ouriques</p>
                            </h1>
                        </div>
                        <div className="h-auto flex justify-center items-center  ">
                            <p className=' py-1 text-cor3 text-3xl md:text-5xl font-corpo md:w-[70vh]'>Seja bem-vindo ao espaço onde o <span className="text-cor2 italic ">acolhimento</span> e o <span className='text-cor2 italic'>autoconhecimento</span> se encontram.</p>
                        </div>

                        <div className="h-auto space-x-4 py-1 flex justify-center items-center  ">

                            <a
                                href={calendar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cor2 text-white mt-1 border-3 rounded-3xl shadow-2xl p-3 m-4 md:m-2 font-corpo text-2xl animate-pulse"
                            >
                                Agende sua consulta
                            </a>

                        </div>
                    </div>


                    <div className='container relative my-auto mx-auto w-[40vh] h-[57vh] md:h-[85vh] md:w-[90vh]  mb-[-2.0rem]  '>
                        <img src={rebeca} alt="" className='flex justify-start items-end md:overflow-y-hidden' />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-12 md:pt-0'>
                <Sobre />
            </section>
            <section id="servico" className='pt-12 md:pt-0'>
                <Servicos />
            </section>
            <section id="contato" className='pt-12 md:pt-0'>
                <Contato />
            </section>
            <section id="razoes" className='pt-11 md:pt-3'>
                <Razoes />
            </section>
            <section id="perguntas" className='pt-12 md:pt-3'>
                <Perguntas />
            </section>

        </>
    )
}

export default Home