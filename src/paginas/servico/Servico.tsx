import { Monitor, Users } from "lucide-react";

function Servico() {

    const services = [
        {icone: PersonalIcon ,
         titulo:"Terapia Individual",
         descricao:"A terapia individualizada é um processo único, adaptado às necessidades e objetivos de cada cliente. Utilizo diversas abordagens para ajudar você a enfrentar desafios emocionais, desenvolver autoconhecimento e promover o bem-estar mental.",
        },
        {icone: TimeIcon ,
            titulo:"Terapia de Sessão Única",
            descricao:"A terapia de sessão única é uma opção eficaz para quem busca resolver questões específicas em um tempo reduzido. Nessa abordagem, um único encontro pode trazer insights significativos e estratégias práticas para lidar com problemas pontuais, oferecendo suporte imediato.",
        },
        {icone: Monitor,
            titulo:"Palestras",
            descricao:"Ministro palestras que abordam temas relevantes da psicologia, oferecendo informações valiosas e promovendo a reflexão. Com conhecimento no assunto, busco inspirar e educar o público, promovendo o entendimento sobre saúde mental e bem-estar emocional.",
        },
        {icone: Users,
            titulo: "Atendimento Online",
descricao: "Realizo atendimentos psicológicos online, proporcionando um espaço seguro e acolhedor para explorar questões emocionais e pessoais. Essa modalidade oferece flexibilidade e conveniência, permitindo que você cuide da sua saúde mental no conforto da sua casa, com a mesma qualidade e ética do atendimento presencial."
               },

               {  
                icone: LectureIcon,
                titulo: "Atendimento Presencial",
descricao: "Ofereço atendimentos psicológicos presenciais em um ambiente acolhedor e reservado, ideal para quem prefere o contato direto. Esse formato permite uma interação mais próxima, promovendo o vínculo terapêutico e um espaço seguro para trabalhar questões emocionais e buscar o bem-estar mental."},

    ]

    return (

        <>
<div className="text-xl font-bold font-sans text-white md:text-black p-3 md:pt-5 text-center bg-cor1 md:bg-inherit xl:text-left">Serviços</div>
<div className="grid gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-3 p-3 ">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col gap-2 bg-cor4 border-1 rounded-md p-3 shadow-md">
          <div>
            <div className="h-12 rounded-full bg-primary/10 flex align-middle items-center justify-center mb-4 ">
              <service.icone className="w-18 h-18 flex justify-center text-center items-center align-middle text-white " />
            </div>
            <div className="text-center font-semibold text-white text-xl p-2">{service.titulo}</div>
            <div className="text-white font-semibold text-justify">{service.descricao}</div>
          </div>
        </div>
      ))}
    </div>
        </>
    )
}

function PersonalIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="50"  // Ajuste a largura conforme necessário
            height="50" // Ajuste a altura conforme necessário
            fill="currentColor"
            stroke="currentColor" // Mantém a cor do traço conforme o estilo
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g>
                <path d="M256,238.428c65.734,0,119.214-53.48,119.214-119.214S321.734,0,256,0c-65.735,0-119.214,53.48-119.214,119.214S190.265,238.428,256,238.428z" />
                <path d="M256,253.693c-97.918,0-177.58,79.662-177.58,177.58v61.375c0,10.687,8.664,19.351,19.351,19.351h316.458c10.687,0,19.351-8.664,19.351-19.351v-61.375C433.58,333.355,353.918,253.693,256,253.693z" />
            </g>
        </svg>
    );
}

function TimeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 16 16"
            fill="currentColor"
        >
            <g fill="currentColor">
                <path d="M3.994 2c-1.258.015-2.179-.03-2.931.385a1.88 1.88 0 0 0-.838.998C.06 3.82 0 4.343 0 5v6c0 .658.06 1.179.225 1.617.164.439.461.79.838.998.752.416 1.673.37 2.931.385H12.006c1.258-.015 2.179.03 2.932-.385a1.88 1.88 0 0 0 .838-.998c.164-.438.224-.96.224-1.617V5c0-.658-.06-1.179-.225-1.617a1.88 1.88 0 0 0-.838-.998c-.752-.416-1.673-.37-2.931-.385H11v1h1c1.259.015 2.087.06 2.453.262.184.1.29.212.387.472.097.26.16.674.16 1.266v6c0 .592-.063 1.006-.16 1.266-.098.26-.203.371-.387.472-.366.202-1.194.247-2.453.262H4c-1.259-.015-2.09-.06-2.455-.262-.183-.1-.287-.212-.385-.472C1.063 12.006 1 11.592 1 11V5c0-.592.063-1.006.16-1.266.098-.26.202-.371.385-.472C1.91 3.06 2.74 3.015 4 3h2.5V2H3.998z" />
                <path d="M5 0l.001 5c.76-.348 1.535-.737 2.323-1.166A44.09 44.09 0 0 0 9.583 2.5c-.725-.449-1.478-.889-2.26-1.32A43.088 43.088 0 0 0 5 0z" />
                <path d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z" />
            </g>
        </svg>
    );
}

function LectureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 508.164 508.164"
            fill="currentColor"
        >
            <path d="M168.708,94.282c-4.488,24.276-20.672,44.404-42.5,54.4h27.404c23.46,0,45.152,13.668,55.284,34.816l38.76,94.86c7.48,16.116,5.848,38.012-15.572,48.348c-4.964,2.448-10.336,3.604-15.912,3.604c-14.144,0-27.812-8.024-33.252-19.448l-19.72-37.808v79.628h113.765v63.036l-92.005,37.399c-6.936,2.856-10.268,10.812-7.412,17.748c2.108,5.305,7.208,8.5,12.58,8.5c1.7,0,3.4-0.34,5.1-1.02l81.737-33.252v29.987c0,7.48,6.119,13.601,13.6,13.601s13.6-6.12,13.6-13.601v-30.124l81.805,32.708c7.004,2.788,14.891-0.611,17.68-7.548c2.787-7.004-0.613-14.892-7.549-17.68l-91.936-36.788v-62.968h149.6c18.768,0,34-15.232,34-34v-224.4H168.708z M435.199,291.482H278.801v-20.4h156.398V291.482z M435.199,230.282H258.4v-20.4h176.799V230.282z M435.199,169.082H231.2v-20.4h203.999V169.082z M508.164,53.21v0.544c0,14.872-12.057,26.928-26.928,26.928H170c0-21.44-9.119-40.746-23.623-54.4h334.859C496.107,26.282,508.164,38.338,508.164,53.21z M34,80.682c0-33.803,27.397-61.2,61.2-61.2s61.2,27.397,61.2,61.2s-27.397,61.2-61.2,61.2S34,114.485,34,80.682z M226.188,314.473c-12.036,5.813-26.669-0.401-31.008-9.493l-45.56-87.489L149.6,453.526c0,14.212-10.397,26.895-24.541,28.233c-16.225,1.53-29.859-11.172-29.859-27.077c0,15.905-13.634,28.614-29.859,27.07C51.197,480.414,40.8,467.731,40.8,453.526V311.882c0,11.642-9.69,20.964-21.461,20.372C8.303,331.697,0,321.817,0,310.76v-53.278v-47.6c0-26.289,21.312-47.6,47.6-47.6h106.046c18.347,0,35.061,10.54,42.956,27.098l38.577,94.458C239.523,292.937,240.951,307.346,226.188,314.473z M34,80.682c0-33.803,27.397-61.2,61.2-61.2s61.2,27.397,61.2,61.2s-27.397,61.2-61.2,61.2S34,114.485,34,80.682z M226.188,314.473c-12.036,5.813-26.669-0.401-31.008-9.493l-45.56-87.489L149.6,453.526c0,14.212-10.397,26.895-24.541,28.233c-16.225,1.53-29.859-11.172-29.859-27.077c0,15.905-13.634,28.614-29.859,27.07C51.197,480.414,40.8,467.731,40.8,453.526V311.882c0,11.642-9.69,20.964-21.461,20.372C8.303,331.697,0,321.817,0,310.76v-53.278v-47.6c0-26.289,21.312-47.6,47.6-47.6h106.046c18.347,0,35.061,10.54,42.956,27.098l38.577,94.458C239.523,292.937,240.951,307.346,226.188,314.473z" />
        </svg>
    );
}




export default Servico