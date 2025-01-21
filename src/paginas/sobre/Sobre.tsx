import mental from '../../assets//mental.png'

function Sobre() {
    return (

        <>
        <h2 className='font-semibold text-2xl text-center xl:text-left pb-3 bg-cor1 md:bg-cor4 text-white md:pl-2'>Sobre mim</h2>
            <div className="justify-around py-1 bg-cor4 font-semibold text-white">
            
                <div className=" justify-around">

                   
                    <div className='px-3'>
                    <p className="text-justify text-evenly py-2">
                        <p>Meu nome é Rebeca Ouriques, sou Psicóloga (CRP 05/XXXXX), formada pela Universidade Estácio de Sá em 2019. Minha trajetória profissional é marcada por 12 anos de atuação em uma multinacional, onde exerci funções de gestão de filial e equipes, além de dois anos dedicados à prática clínica como psicóloga. Essa experiência me proporcionou uma visão abrangente sobre a complexidade das relações humanas e organizacionais, enriquecendo meu olhar para a prática clínica.</p>

                            
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
                
                <div className="flex justify-center py-2">
                    <img src={mental} alt="" className=' flex justify-center mt-2 w-[50vh] rounded-lg' />
                </div>
</div>
        </>
    )
}

export default Sobre