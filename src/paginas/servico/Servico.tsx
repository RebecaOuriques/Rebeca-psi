
function Servico() {

    const services = [
        {
            icone: PersonalIcon,
            titulo: "Terapia Individual",
            descricao: "A terapia individualizada é um processo único, adaptado às necessidades e objetivos de cada cliente. Utilizo diversas abordagens para ajudar você a enfrentar desafios emocionais, desenvolver autoconhecimento e promover o bem-estar mental.",
        },
        {
            icone: TimeIcon,
            titulo: "Terapia de Sessão Única",
            descricao: "A terapia de sessão única é uma opção eficaz para quem busca resolver questões específicas em um tempo reduzido. Nessa abordagem, um único encontro pode trazer insights significativos e estratégias práticas para lidar com problemas pontuais, oferecendo suporte imediato.",
        },
        {
            icone: LectureIcon,
            titulo: "Palestras",
            descricao: "Ministro palestras que abordam temas relevantes da psicologia, oferecendo informações valiosas e promovendo a reflexão. Com conhecimento no assunto, busco inspirar e educar o público, promovendo o entendimento sobre saúde mental e bem-estar emocional.",
        },
        {
            icone: OnlineIcon,
            titulo: "Atendimento Online",
            descricao: "Realizo atendimentos psicológicos online, proporcionando um espaço seguro e acolhedor para explorar questões emocionais e pessoais. Essa modalidade oferece flexibilidade e conveniência, permitindo que você cuide da sua saúde mental no conforto da sua casa, com a mesma qualidade e ética do atendimento presencial."
        },

        {
            icone: PresencialIcon,
            titulo: "Atendimento Presencial",
            descricao: "Ofereço atendimentos psicológicos presenciais em um ambiente acolhedor e reservado, ideal para quem prefere o contato direto. Esse formato permite uma interação mais próxima, promovendo o vínculo terapêutico e um espaço seguro para trabalhar questões emocionais e buscar o bem-estar mental."
        },

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

function OnlineIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 470"
            width={props.width || "50"} // Ajuste de largura dinâmico
            height={props.height || "50"} // Ajuste de altura dinâmico
            fill={props.fill || "currentColor"} // Cor de preenchimento dinâmica
            stroke={props.stroke || "currentColor"} // Cor do traço dinâmica
            strokeWidth={props.strokeWidth || 2} // Largura do traço dinâmica
            strokeLinecap={props.strokeLinecap || "round"} // Linha final dinâmica
            strokeLinejoin={props.strokeLinejoin || "round"} // Linha de união dinâmica
            {...props}
        >
            <g xmlns="http://www.w3.org/2000/svg">
                <path d="M277.185,261.951c3.842,1.557,8.213-0.296,9.767-4.136c10.25-25.312,34.507-41.666,61.799-41.666   s51.549,16.354,61.799,41.666c1.181,2.917,3.988,4.687,6.954,4.687c0.937,0,1.89-0.177,2.813-0.551   c3.839-1.555,5.691-5.927,4.136-9.767c-12.554-31.003-42.269-51.035-75.701-51.035s-63.147,20.032-75.701,51.035   C271.493,256.024,273.346,260.396,277.185,261.951z" />
                <path d="M348.75,186.149c28.948,0,52.5-23.552,52.5-52.5s-23.552-52.5-52.5-52.5s-52.5,23.552-52.5,52.5   S319.802,186.149,348.75,186.149z M348.75,96.149c20.678,0,37.5,16.822,37.5,37.5s-16.822,37.5-37.5,37.5s-37.5-16.822-37.5-37.5   S328.072,96.149,348.75,96.149z" />
                <path d="M49.685,261.951c3.841,1.557,8.213-0.296,9.767-4.136c10.25-25.312,34.507-41.666,61.799-41.666   s51.549,16.354,61.799,41.666c1.181,2.917,3.988,4.687,6.954,4.687c0.937,0,1.89-0.177,2.813-0.551   c3.839-1.555,5.691-5.927,4.136-9.767c-12.554-31.003-42.269-51.035-75.701-51.035s-63.147,20.032-75.701,51.035   C43.993,256.024,45.846,260.396,49.685,261.951z" />
                <path d="M121.25,186.149c28.948,0,52.5-23.552,52.5-52.5s-23.552-52.5-52.5-52.5s-52.5,23.552-52.5,52.5   S92.302,186.149,121.25,186.149z M121.25,96.149c20.678,0,37.5,16.822,37.5,37.5s-16.822,37.5-37.5,37.5s-37.5-16.822-37.5-37.5   S100.572,96.149,121.25,96.149z" />
                <path d="M442.5,27.5h-415C12.337,27.5,0,39.837,0,55v270c0,15.163,12.337,27.5,27.5,27.5h415c15.163,0,27.5-12.337,27.5-27.5V55   C470,39.837,457.663,27.5,442.5,27.5z M455,55v222.5H242.5v-235h200C449.393,42.5,455,48.107,455,55z M27.5,42.5h200v235H15V55   C15,48.107,20.607,42.5,27.5,42.5z M442.5,337.5h-415c-6.893,0-12.5-5.607-12.5-12.5v-32.5h440V325   C455,331.893,449.393,337.5,442.5,337.5z" />
                <circle cx="235" cy="315" r="7.5" />
                <path d="M385,427.5h-92.5V375c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v52.5h-85V375c0-4.143-3.357-7.5-7.5-7.5   s-7.5,3.357-7.5,7.5v52.5H85c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h300c4.143,0,7.5-3.357,7.5-7.5S389.143,427.5,385,427.5   z" />
            </g>
        </svg>
    );
}

function PresencialIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.999 511.999"
            fill={props.fill || "#FFFFFF"} // Cor de preenchimento dinâmica
            width={props.width || "50"} // Largura dinâmica com valor padrão
            height={props.height || "50"} // Altura dinâmica com valor padrão
            {...props}
        >
            <g>
                <g>
                    <path d="M483.112,385.722l28.599-145.493c1.618-8.232-3.743-16.216-11.974-17.835c-8.24-1.616-16.216,3.745-17.835,11.975 l-26.19,133.233h-38.625c5.53-1.269,10.653-4.049,14.751-8.106c5.81-5.752,9.089-13.58,9.111-21.756l0.285-104.227 c0.047-17.089-13.871-30.936-30.951-30.814l-28.268,0.202c-17.072,0.122-30.775,14.151-30.507,31.214l0.371,23.528l26.981-30.01 l-27.761,49.758h-63.112c-10.136,0-18.351,8.216-18.351,18.352c0,10.136,8.216,18.352,18.351,18.352h73.887 c6.653,0,12.784-3.601,16.025-9.411l28.542-51.158c-4.183,19.682-10.184,38.734-17.111,56.674 c-3.008,7.79-9.836,13.782-19.238,15.271l-67.771-0.198c-7.217-0.053-14.094,3.506-18.258,9.615 c-4.115,6.035-4.971,13.717-2.282,20.509l49.988,126.325c4.478,11.317,17.277,16.847,28.579,12.374 c11.309-4.475,16.849-17.271,12.374-28.579l-6.365-16.086l19.841-51.446h57.687l35.128,91.086 c2.016,5.227,7.885,7.814,13.092,5.805c5.219-2.013,7.817-7.875,5.805-13.092l-32.317-83.8h2.615 C475.468,397.982,481.713,392.845,483.112,385.722z M355.363,421.646l-20.671-52.239l19.89,0.058 c-4.705,2.581-7.897,7.58-7.897,13.325c0,8.389,6.801,15.19,15.19,15.19h2.615L355.363,421.646z" />
                </g>
            </g>
            <g>
                <g>
                    <circle cx="372.26" cy="148.34" r="40.502" />
                </g>
            </g>
            <g>
                <g>
                    <path d="M150.127,314.091h73.887c10.136,0,18.351-8.216,18.351-18.352s-8.216-18.349-18.351-18.349h-63.111l-27.763-49.757 l26.98,30.009l0.371-23.528c0.269-17.071-13.442-31.092-30.507-31.214l-28.268-0.202c-17.089-0.122-30.998,13.735-30.951,30.814 l0.285,104.227c0.023,8.176,3.302,16.004,9.112,21.756c4.099,4.057,9.221,6.837,14.751,8.106H56.288l-26.19-133.233 c-1.617-8.233-9.604-13.592-17.835-11.975c-8.232,1.618-13.594,9.603-11.974,17.835l28.6,145.493 c1.399,7.123,7.645,12.261,14.905,12.261h2.614L14.09,481.779c-2.012,5.219,0.587,11.08,5.806,13.092 c5.21,2.01,11.078-0.581,13.091-5.804l35.128-91.086h57.687l19.842,51.445l-6.365,16.086 c-4.475,11.309,1.064,24.104,12.374,28.579c11.303,4.474,24.102-1.061,28.579-12.374l49.988-126.325 c2.688-6.791,1.833-14.473-2.282-20.509c-4.083-5.988-10.912-9.615-18.193-9.615c-0.021,0-0.043,0-0.065,0 c-72.037,0.21-67.491,0.239-68.215,0.124c-8.818-1.401-15.775-7.436-18.796-15.197l-17.111-56.674l28.544,51.159 C137.342,310.491,143.474,314.091,150.127,314.091z M150.127,397.982L150.127,397.982c8.389,0,15.19-6.801,15.19-15.191 c0-5.746-3.192-10.745-7.897-13.325l19.89-0.058l-20.672,52.24l-9.128-23.666H150.127z" />
                </g>
            </g>
            <g>
                <g>
                    <circle cx="139.745" cy="148.34" r="40.502" />
                </g>
            </g>
            <g>
                <g>
                    <path d="M246.224,16.353c-40.061,0-72.537,23.385-72.537,52.233c0,15.512,9.399,29.437,24.309,39.004l-10.055,20.08 c-1.026,2.049-0.589,4.528,1.074,6.102c1.663,1.574,4.163,1.876,6.152,0.739l28.505-16.279c7.1,1.671,14.675,2.587,22.55,2.587 c40.063,0,72.538-23.386,72.538-52.233C318.761,39.738,286.286,16.353,246.224,16.353z" />
                </g>
            </g>
        </svg>
    );
}






export default Servico