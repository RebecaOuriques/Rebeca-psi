import rebeca from '../../assets/rebeca4.png'
import jung from '../../assets/jung.jpg'


function Sobre() {
    return (

        <>
            <div className='bg-cor1'>
                <h2 className='font-bold text-4xl text-center xl:text-left pt-3 md:bg-inherit text-white font-corpo md:pl-2'>Sobre mim</h2>
                <div className="justify-around pt-1 md:pb-3 font-semibold text-white">

                    <div className="justify-around font-corpo text-2xl">

                        <div className='px-3'>

                            <p className="text-justify text-evenly py-2 ">
                                Sou Rebeca S. Ouriques, Psicóloga (CRP 05/80537), formada pela Universidade Estácio de Sá em 2019. Com 12 anos de experiência em uma multinacional, onde liderei equipes e gerenciei filiais, e 2 anos de prática clínica, desenvolvi uma visão ampla sobre relações humanas e organizacionais, que enriquece minha atuação na psicologia.
                            </p>

                            <p className='py-2 text-justify'>
                                Sou fluente em inglês e tenho francês intermediário, permitindo atender a pessoas de diferentes nacionalidades e contextos culturais. No meu tempo livre, gosto de ler, assistir filmes e séries, passar tempo com amigos e familiares, fazer trilhas, jogar videogames e explorar a tecnologia. Acredito que essas experiências e interesses pessoais me ajudam a criar uma conexão genuína com cada pessoa que atendo, mostrando que, assim como você, também estou em constante aprendizado e evolução.
                            </p>

                            <p className='py-2 text-justify'>
                                Estou comprometida em criar um ambiente seguro e acolhedor para que você possa explorar suas questões emocionais e alcançar uma vida equilibrada e saudável. Se busca apoio psicológico, entre em contato para começarmos essa jornada juntos.
                            </p>

                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center md:justify-evenly md:my-1 font-corpo ">
                        <img src={rebeca} alt="" className='flex justify-center mt-1 w-[50vh] lg:w-[40vh] rounded-full' />
                        <div className='bg-white md:bg-inherit md:text-white text-cor2 flex flex-col md:flex md:flex-row justify-center items-center py-2 mt-4 border-4 border-x-transparent border-y-cor2 md:border-x-white rounded-2xl md:border-y-transparent md:shadow-xl'>
                            <p className='italic font-medium md:font-normal text-center md:rounded-xl  m-1 p-1 md:w-[40vh] lg:w-[30vh] text-3xl  md:border-0 md:shadow-none '>
                                “Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.”
                            </p>
                            <div className='flex flex-col md:grid-flow-col p-4 items-center justify-center font-medium italic text-xl'>
                                <img src={jung} alt='' className='hidden md:block rounded-full w-auto md:h-36 shadow-2xl border-2' />
                                <p className='text-center border-t-4 pt-4 md:border-t-0'>Carl Gustav Jung</p>
                                <p className='text-center '>Psiquiatra e Psicoterapeuta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre