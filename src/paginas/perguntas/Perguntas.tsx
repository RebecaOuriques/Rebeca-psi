import { useState } from 'react';

function Perguntas() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleToggle = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            pergunta: "O que é psicologia?",
            resposta: "A psicologia é a ciência que estuda o comportamento humano e os processos mentais."
        },

        {
            pergunta: "Como ela pode me ajudar?",
            resposta: "Através da terapia, é possível entender melhor suas emoções, comportamentos e relações, promovendo o bem-estar e o desenvolvimento pessoal."
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
            pergunta: "Qual a duração do tratamento?",
            resposta: "A duração do processo terapêutico varia conforme as necessidades de cada pessoa. Pode ser um trabalho de curto, médio ou longo prazo, dependendo das questões que estão sendo trabalhadas e das metas terapêuticas estabelecidas. O psicólogo e o paciente irão discutir o tempo e a frequência ideal durante o processo."
        },
        {
            pergunta: "Quanto tempo dura uma sessão?",
            resposta: "Uma sessão geralmente dura entre 40 a 50 minutos, mas isso pode variar conforme a necessidade do paciente."
        },
        {
            pergunta: "Qual o valor da consulta?",
            resposta: "O conselho federal de psicologia, em seu Código de Ética profissional Art. 20, não permite a divulgação de valores. Entre em contato pelo WhatApp para saber mais."
        },
        {
            pergunta: "Aceita plano de saúde?",
            resposta: "Não aceito planos de saúde. Pedidos de reembolso podem ser efetuados para seu plano de saúde com o recibo fornecido após o pagamento (verifique esta possibilidade junto a sua operadora)."
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

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.resposta.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>

            <div className="text-4xl font-corpo font-bold text-white md:text-slate-600 p-3 text-center bg-cor1 md:bg-white xl:text-left">FAQ - Perguntas Frequentes</div>
            <div className='bg-white font-corpo text-center text-4xl px-2 py-2 text-slate-600 md:pb-2'>Aqui você encontra respostas para as dúvidas mais comuns sobre o processo terapêutico</div>

            <div className='flex justify-center my-4'>
                <input
                    type='text'
                    placeholder='Buscar perguntas...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-full px-4 py-2 w-[90%] md:w-[60%] lg:w-[40%] text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cor3"
                >
                </input>

            </div>

            <div className="md:grid md:grid-cols-2 w-full px-1 md:px-4 gap-2 mb-2">
                {filteredFaqs.map((faq, index) => (
                    <div className="bg-white border-2 my-2 mx-1 border-opacity-55 border-cor3 rounded-3xl text-center shadow-2xl p-1" key={index}>
                        <div className="flex items-center justify-between" onClick={() => handleToggle(index)}>
                            <p className="w-full text-cor3 font-corpo font-semibold text-center text-2xl md:text-xl lg:text-2xl py-1">
                                {faq.pergunta}
                            </p>
                            <span className=' '>
                                {activeIndex === index ? (
                                    <MinusIcon className='bg-slate-300 rounded-full lg:m-1 text-cor3 p-2 my-1 w-8 h-8'></MinusIcon>
                                ) : (
                                    <PlusIcon className='bg-slate-300 rounded-full lg:m-1 text-cor3 p-2 w-8 h-8'></PlusIcon>
                                )}
                            </span>
                        </div>

                        {activeIndex === index && (
                            <p className="text-justify py-3 border-t-2 px-1 text-slate-600 font-corpo text-2xl font-semibold">
                                {faq.resposta}
                            </p>
                        )}

                    </div>
                ))}
            </div>

        </>
    );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049 Z" transform="translate(-362 -1037)" />
        </svg>
    );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 ${props.className ?? ''}`}
        >
            <path d="M390,1053 L366,1053 C363.791,1053 362,1054.79 362,1057 C362,1059.21 363.791,1061 366,1061 L390,1061 C392.209,1061 394,1059.21 394,1057 C394,1054.79 392.209,1053 390,1053 Z" transform="translate(-362 -1037)" />
        </svg>
    );
}


export default Perguntas;
