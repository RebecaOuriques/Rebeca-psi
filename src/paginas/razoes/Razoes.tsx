import { useState } from "react";
import { Search, Brain, Heart, Users, Compass, Star, Sparkles, Shield, Leaf, Smile } from "lucide-react";

function Razoes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      icone: Search,
      titulo: "Autoconhecimento",
      descricao:
        "A terapia oferece um espaço seguro para explorar seus pensamentos, emoções e comportamentos, ajudando você a se conhecer melhor e a entender suas necessidades e desejos.",
    },
    {
      icone: Brain,
      titulo: "Gestão do Estresse e Ansiedade",
      descricao:
        "Se você sente que o estresse e a ansiedade estão afetando sua vida, a terapia pode ajudar a identificar as causas e desenvolver estratégias eficazes para enfrentá-los.",
    },
    {
      icone: Heart,
      titulo: "Superação de Traumas",
      descricao:
        "Experiências difíceis ou traumáticas podem deixar marcas profundas. Na terapia, você encontrará apoio para processar essas vivências e seguir em frente.",
    },
    {
      icone: Users,
      titulo: "Melhoria nos Relacionamentos",
      descricao:
        "Seja com familiares, amigos ou parceiros, a terapia pode ajudar a compreender dinâmicas interpessoais e a construir conexões mais saudáveis e significativas.",
    },
    {
      icone: Compass,
      titulo: "Suporte em Momentos de Mudança",
      descricao:
        "Transições na vida, como mudanças de carreira, separações ou perdas, podem ser desafiadoras. A terapia oferece suporte para lidar com esses momentos de forma mais equilibrada.",
    },
    {
      icone: Star,
      titulo: "Desenvolvimento da Autoestima",
      descricao:
        "Para quem enfrenta inseguranças ou dúvidas sobre si mesmo, a terapia é um caminho para fortalecer a autoestima e a confiança.",
    },
    {
      icone: Sparkles,
      titulo: "Melhoria na Saúde Mental",
      descricao:
        "Condições como depressão, ansiedade ou transtornos de humor podem ser tratadas na terapia, promovendo maior bem-estar emocional e psicológico.",
    },
    {
      icone: Shield,
      titulo: "Um Espaço Sem Julgamentos",
      descricao:
        "Na terapia, você encontrará um ambiente acolhedor e confidencial, onde pode expressar seus sentimentos e preocupações sem medo de julgamentos.",
    },
    {
      icone: Leaf,
      titulo: "Prevenção de Problemas Futuros",
      descricao:
        "Buscar terapia mesmo quando tudo parece estar bem pode ajudar a desenvolver resiliência e habilidades para lidar com desafios futuros.",
    },
    {
      icone: Smile,
      titulo: "Promoção do Bem-Estar Geral",
      descricao:
        "A terapia não é apenas para resolver problemas; ela também pode ser um espaço para cultivar uma vida mais plena, saudável e significativa.",
    },
  ];

  return (
    <>
      <div className="text-xl font-bold text-white md:text-slate-600 text-center bg-cor1 md:bg-inherit xl:text-left p-3">
        Razões para fazer terapia
      </div>
      <div className="grid gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-3 p-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-cor1 border-1 rounded-md p-3 shadow-md"
          >
            <div>
              <div
                className="h-15 rounded-full bg-primary/10 flex align-middle items-center justify-center mb-4 cursor-pointer md:cursor-default"
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
              >
                <service.icone className="w-10 h-10 md:h-18 md:w-18 flex justify-center text-center items-center align-middle text-white" />
              </div>
              <div className="text-center font-semibold text-white text-xl p-2">
                {service.titulo}
              </div>
              <div className="hidden md:block text-white font-semibold text-justify">
                {service.descricao}
              </div>
              {activeIndex === index && (
                <div className="block md:hidden text-white font-semibold text-justify mt-2">
                  {service.descricao}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Razoes;
