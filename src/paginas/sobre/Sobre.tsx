import rebeca from '../../assets/rebeca4.png'
import jung from '../../assets/jung.jpg'


function Sobre() {
    return (

        <>
            <div className='bg-cor1'>
                <h2 className='font-bold text-4xl text-center xl:text-left py-3 md:bg-inherit text-white font-corpo md:pl-2'>Sobre mim</h2>
                <div className="justify-around py-1 font-semibold text-white">

                    <div className="justify-around font-corpo text-2xl">

                        <div className='px-3'>
                            <p className="text-justify text-evenly py-2 ">
                                Meu nome é Rebeca Ouriques, sou Psicóloga (CRP 05/80537), formada pela Universidade Estácio de Sá em 2019. Minha trajetória profissional é marcada por 12 anos de atuação em uma multinacional, onde exerci funções de gestão de filial e equipes, além de dois anos dedicados à prática clínica como psicóloga. Essa experiência me proporcionou uma visão abrangente sobre a complexidade das relações humanas e organizacionais, enriquecendo meu olhar para a prática clínica.
                            </p>
                            <p className='py-2 text-justify'> Sou fluente em inglês e possuo nível intermediário em francês, o que me permite atender pessoas de diferentes nacionalidades e contextos culturais. Com isso, posso oferecer um espaço inclusivo e acolhedor para um público diversificado.
                            </p>
                            <p className='py-2 text-justify'>
                                Além da psicologia, sou uma pessoa curiosa e apaixonada por aprender e explorar o mundo. No meu tempo livre, gosto de ler livros, assistir filmes e séries que me fazem refletir, e passar momentos preciosos com amigos e familiares. Também encontro equilíbrio em atividades como fazer trilhas na natureza, jogar videogames e até mesmo desenvolver projetos na área de tecnologia, um hobby que alimenta minha criatividade e disciplina.
                            </p>

                            <p className='py-2 text-justify'>Acredito que essas experiências e interesses pessoais me ajudam a criar uma conexão genuína com cada pessoa que atendo, mostrando que, assim como você, também estou em constante aprendizado e evolução.</p>
                            <p className='py-2 text-justify'>
                                Estou comprometida em proporcionar um ambiente seguro e profissional, onde cada pessoa possa explorar suas questões emocionais, fortalecer sua autoestima e desenvolver estratégias para uma vida mais saudável e equilibrada.
                            </p>

                            <p className='py-2 text-justify'>
                                Se você está buscando apoio psicológico ou deseja saber mais sobre como podemos trabalhar juntos para alcançar seus objetivos, entre em contato. Vamos iniciar essa jornada em direção ao seu bem-estar.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-evenly py-2 font-corpo">
                        <img src={rebeca} alt="" className='flex justify-center mt-2 w-[50vh] rounded-full' />
                        <div className='flex flex-col md:flex md:flex-row justify-center items-center py-2 mt-4 border-4 border-x-transparent md:border-x-white rounded-xl md:border-y-transparent md:shadow-xl'>
                            <p className='italic font-medium md:font-normal text-center md:rounded-xl  m-1 p-1 md:w-[40vh] text-3xl  md:border-0 md:shadow-none '>
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