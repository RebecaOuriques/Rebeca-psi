import { useState } from 'react';

function Perguntas() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            pergunta: "O que é psicologia e como pode me ajudar?",
            resposta: "A psicologia é a ciência que estuda o comportamento humano e os processos mentais. Através da terapia, é possível entender melhor suas emoções, comportamentos e relações, promovendo o bem-estar e o desenvolvimento pessoal."
        },
        {
            pergunta: "Como sei se preciso de terapia?",
            resposta: "Se você está enfrentando dificuldades emocionais, estresse, ansiedade, problemas de relacionamento ou simplesmente deseja um espaço para se entender melhor, a terapia pode ser uma boa opção."
        },
        {
            pergunta: "Como escolher um psicólogo?",
            resposta: "Escolher um psicólogo é uma decisão pessoal. É importante sentir-se confortável com o profissional e confiar no processo. Procure um psicólogo com quem você se identifique, que tenha experiência na área que você precisa de ajuda, e que tenha uma abordagem que ressoe com suas necessidades e valores."
        },
        {
            pergunta: "Como é o seu atendimento?",
            resposta: "Cada pessoa é única. Meu trabalho é personalizado para atender às suas necessidades específicas, proporcionando um espaço de escuta ativa e empatia. Vamos juntos construir caminhos para o autodescobrimento e a melhoria da qualidade de vida."
        },
        {
            pergunta: "Qual a duração do processo terapêutico?",
            resposta: "A duração do processo terapêutico varia conforme as necessidades de cada pessoa. Pode ser um trabalho de curto, médio ou longo prazo, dependendo das questões que estão sendo trabalhadas e das metas terapêuticas estabelecidas. O psicólogo e o paciente irão discutir o tempo e a frequência ideal durante o processo."
        },
        {
            pergunta: "Quanto tempo dura uma sessão?",
            resposta: "Uma sessão geralmente dura entre 40 a 50 minutos, mas isso pode variar conforme a necessidade do paciente."
        },
        {
            pergunta: "A terapia é confidencial?",
            resposta: "Sim, a terapia é um espaço seguro e confidencial. Todas as informações compartilhadas durante as sessões são mantidas em sigilo, exceto em situações onde há risco de danos a você ou a terceiros."
        },
        {
            pergunta: "Como é a avaliação psicológica?",
            resposta: "A avaliação psicológica é realizada com base em entrevistas e testes padronizados, com o objetivo de entender o funcionamento emocional, cognitivo e comportamental da pessoa. Os resultados ajudam a formular um plano de tratamento adequado às necessidades de cada indivíduo."
        },
        {
            pergunta: "A terapia online é eficaz?",
            resposta: "Sim, a terapia online é tão eficaz quanto a presencial, especialmente em tempos onde a conveniência e a flexibilidade são importantes. Através de videochamadas seguras, você pode manter o acompanhamento psicológico no conforto de sua casa, mantendo a qualidade do atendimento."
        },
    ];
    

    return (
        <>

            <div className="text-4xl font-corpo font-bold text-white md:text-slate-600 p-3 text-center bg-cor1 md:bg-white xl:text-left">FAQ - Perguntas Frequentes</div>
            <div className='bg-white font-corpo text-center text-4xl px-2 py-2 text-slate-600 md:pb-2'>Aqui você encontra respostas para as dúvidas mais comuns sobre o processo terapêutico</div>
            <div className="md:grid md:grid-cols-3 w-full px-1 md:px-4 gap-2 mb-6">
                {faqs.map((faq, index) => (
                    <div className="bg-cor2 border-2 rounded-3xl text-center shadow-2xl p-1 my-2" key={index}>
                        <div className="flex items-center justify-between" onClick={() => handleToggle(index)}>
                            <span className={`max-w-1 pr-2 cursor-pointer  ${activeIndex === index ? 'rotate-90' : ''}`}>&#9654;</span>
                            <p className="w-full ml-2 text-white font-corpo font-semibold text-center text-2xl md:text-3xl py-1">{faq.pergunta}</p>

                        </div>
                        {activeIndex === index && (
                            <p className="text-justify py-3 px-1 text-white font-corpo text-2xl font-semibold">{faq.resposta}</p>
                        )}
                    </div>
                ))}
            </div>

        </>
    );
}

export default Perguntas;
