import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import autoconhecimento from '../../assets/autoconhecimento.png';
import gestao from '../../assets/gestaoEstresse.png';
import autoestima from '../../assets/autoestima.png';
import futuro from '../../assets/futuro.png';
import mudanca from '../../assets/mudanca.png';
import relacionamento from '../../assets/relacionamento.png';
import semJulgamento from '../../assets/semJulgamento.png';
import traumas from '../../assets/traumas.png';
import bemestar from '../../assets/bemEstar.png';
import saudeMental from '../../assets/saudeMental.png';

function Razoes() : JSX.Element{


  const razoes = [
    {
      imagem: autoconhecimento,
      titulo: "Autoconhecimento",
      descricao:
        "A terapia oferece um espaço seguro para explorar seus pensamentos, emoções e comportamentos, ajudando você a se conhecer melhor e a entender suas necessidades e desejos.",
    },
    {
      imagem: gestao,
      titulo: "Gestão do Estresse e Ansiedade",
      descricao:
        "Se você sente que o estresse e a ansiedade estão afetando sua vida, a terapia pode ajudar a identificar as causas e desenvolver estratégias eficazes para enfrentá-los.",
    },
    {
      imagem: traumas,
      titulo: "Superação de Traumas",
      descricao:
        "Experiências difíceis ou traumáticas podem deixar marcas profundas. Na terapia, você encontrará apoio para processar essas vivências e seguir em frente.",
    },
    {
      imagem: relacionamento,
      titulo: "Melhoria nos Relacionamentos",
      descricao:
        "Seja com familiares, amigos ou parceiros, a terapia pode ajudar a compreender dinâmicas interpessoais e a construir conexões mais saudáveis e significativas.",
    },
    {
      imagem: mudanca,
      titulo: "Apoio em Momentos de Mudança",
      descricao:
        "Transições na vida, como mudanças de carreira, separações ou perdas, podem ser desafiadoras. A terapia oferece suporte para lidar com esses momentos de forma mais equilibrada.",
    },
    {
      imagem: autoestima,
      titulo: "Desenvolvimento da Autoestima",
      descricao:
        "Para quem enfrenta inseguranças ou dúvidas sobre si mesmo, a terapia é um caminho para fortalecer a autoestima e a confiança.",
    },
    {
      imagem: saudeMental,
      titulo: "Melhoria na Saúde Mental",
      descricao:
        "Condições como depressão, ansiedade ou transtornos de humor podem ser tratadas na terapia, promovendo maior bem-estar emocional e psicológico.",
    },
    {
      imagem: semJulgamento,
      titulo: "Um Espaço Sem Julgamentos",
      descricao:
        "Na terapia, você encontrará um ambiente acolhedor e confidencial, onde pode expressar seus sentimentos e preocupações sem medo de julgamentos.",
    },
    {
      imagem: futuro,
      titulo: "Prevenção de Problemas Futuros",
      descricao:
        "Buscar terapia mesmo quando tudo parece estar bem pode ajudar a desenvolver resiliência e habilidades para lidar com desafios futuros.",
    },
    {
      imagem: bemestar,
      titulo: "Promoção do Bem-Estar Geral",
      descricao:
        "A terapia não é apenas para resolver problemas; ela também pode ser um espaço para cultivar uma vida mais plena, saudável e significativa.",
    },
  ];

  return (
    <>
      <div className="text-4xl font-corpo font-bold text-white md:text-slate-600 text-center bg-cor1 md:bg-inherit xl:text-left p-3">
        Razões para fazer terapia
      </div>
      <div className="bg-white font-corpo text-center text-5xl px-4 py-3 text-slate-600">
      Você não precisa ter um diagnóstico para se beneficiar da terapia      </div>

      <div className="">
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 2, 
        },
        1280: {
          slidesPerView: 3, 
        },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
      className="w-full max-w-8xl center py-2"
    >
      {razoes.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col mb-12 items-center justify-start border-2 shadow-xl rounded-2xl m-4 h-[60vh] md:h-[75vh]">
            <img src={slide.imagem} alt={`Slide ${index + 1}`} className="flex justify-center items-center object-contain h-56 w-2/3"/>
            <div className="text-cor3 px-2 pt-3">
              <p className="text-center font-bold font-corpo text-3xl">
                {slide.titulo}
              </p>
              <p className="font-corpo text-slate-600 font-semibold text-justify text-2xl px-2 pt-4">
                {slide.descricao}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </>
  );
}


export default Razoes;
