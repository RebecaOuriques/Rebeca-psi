import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import online from '../../assets/online.png';
import sessaoUnica from '../../assets/sessaoUnica.png';
import palestra from '../../assets/palestra.png';
import terapiaInd from '../../assets/terapia-individual2.png';
import individual from '../../assets/individual.png';


function Servicos() {
  const slidesData = [
    {
      imagem: individual,
      titulo: "Terapia Individual",
      descricao:
        "A terapia individualizada é um processo único, adaptado às necessidades e objetivos de cada cliente. Utilizo diversas abordagens para ajudar você a enfrentar desafios emocionais, desenvolver autoconhecimento e promover o bem-estar mental.",
    },
    {
      imagem: online,
      titulo: "Atendimento Online",
      descricao:
        "Realizo atendimentos psicológicos online, proporcionando um espaço seguro e acolhedor para explorar questões emocionais e pessoais. Essa modalidade oferece flexibilidade e conveniência, permitindo que você cuide da sua saúde mental no conforto da sua casa, com a mesma qualidade e ética do atendimento presencial."
    },
    {
      imagem: terapiaInd,
      titulo: "Atendimento Presencial",
      descricao:
        "Ofereço atendimentos psicológicos presenciais em um ambiente acolhedor e reservado, ideal para quem prefere o contato direto. Esse formato permite uma interação mais próxima, promovendo o vínculo terapêutico e um espaço seguro para trabalhar questões emocionais e buscar o bem-estar mental."
    },
    {
      imagem: sessaoUnica,
      titulo: "Terapia de Sessão Única",
      descricao:
        "A terapia de sessão única é uma opção eficaz para quem busca resolver questões específicas em um tempo reduzido. Nessa abordagem, um único encontro pode trazer insights significativos e estratégias práticas para lidar com problemas pontuais, oferecendo suporte imediato."
    },
    {
      imagem: palestra,
      titulo: "Palestras",
      descricao:
        "Ministro palestras que abordam temas relevantes da psicologia, oferecendo informações valiosas e promovendo a reflexão. Com conhecimento no assunto, busco inspirar e educar o público, promovendo o entendimento sobre saúde mental e bem-estar emocional."
    }
  ];

  return (
    <>
      <div className="text-4xl font-corpo font-bold text-white md:text-slate-600 p-3 text-center bg-cor1 md:bg-white xl:text-left">
        Serviços
      </div>
      <div className="bg-white font-corpo text-center text-5xl px-4 py-3 text-slate-600">
        Dê o primeiro passo para cuidar da sua saúde mental
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
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
        className="bg-white w-full max-w-8xl center pt-2"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-start border-2 shadow-xl rounded-2xl mb-12 mx-5 h-[85vh] text-center md:h-[90vh]">
              <img src={slide.imagem} alt={`Slide ${index + 1}`} className="flex justify-center items-center object-contain h-96 md:h-56 " />
              <div className="text-cor3 px-3 pt-2">
                <p className="text-center font-bold font-corpo text-3xl">
                  {slide.titulo}
                </p>
                <p className="font-corpo text-slate-600 font-semibold text-justify text-2xl pt-4 pb-5">
                  {slide.descricao}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Servicos;
