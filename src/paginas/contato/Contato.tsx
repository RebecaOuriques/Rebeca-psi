import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

function Contato() {
    return (
        <>
            <div className="grid md:pr-5 font-corpo text-slate-600">
                <div className=" text-4xl font-corpo font-bold text-center xl:text-left bg-cor1 md:bg-inherit text-white md:text-slate-600 p-3">
                    Contato
                </div>
                <div className="text-4xl py-3 text-center">Faça seu agendamento hoje </div>
                <div className="lg:flex justify-around h-full">
                    <div className=" space-y-4  flex-row justify-around items-center ">
                        <div className="grid pl-5 sm:text-center">
                            <div className=" text-slate-600 ">
                                <p className="text-2xl text-center md:text-start">Presencial às sextas-feira:</p>
                                <div className="flex sm:justify-center md:justify-start items-center gap-2">
                                    <LocateIcon className="h-5 w-5 text-muted-foreground  " />
                                    <p className='font-corpo text-xl font'>
                                        Patio Campo Grande - RJ</p>
                                </div>
                                <div className="flex sm:justify-center md:justify-start items-center gap-2">
                                    <PhoneIcon className="h-5 w-5 text-muted-foreground " />
                                    <p className="text-muted-foreground font font-corpo text-xl "> +55 (21) 98454-8915</p>
                                </div>
                                <div className="flex sm:justify-center md:justify-start items-center gap-2 ">
                                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                                    <p className="text-muted-foreground font font-corpo text-xl">psirebecaouriques@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden p-2 pb-4 flex justify-center md:justify-start">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1838563727033!2d-43.56541682468959!3d-22.906588479255173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3fdf4a56525%3A0x3a156ac4ccbe8186!2sPATIO%20CAMPO%20GRANDE!5e0!3m2!1spt-BR!2sbr!4v1730077198626!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="300"
                            loading="lazy">

                            </iframe>
                        </div>

                    </div>

                    <div className="text-center mx-3 lg:mx-0 lg:w-[80vh]">
                        <p className="text-2xl xl:text-start py-2 md:py-0 m-0">Online</p>
                        <div className="flex border-2 shadow-xl rounded-xl  h-[75vh] md:h-[75vh] lg:h-[75vh] lg:w-[60vh] xl:w-[90vh]">

                            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ19q-fY9iPttlGl6Aln_gJp9le7KQhM1LohJFY79Oc846qAE1phg9ABv-ppms-BG5P0uLS0PkQr?gv=true"
                                width="100%"
                                height="full" >

                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}

// function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <circle cx="12" cy="12" r="10" />
//             <polyline points="12 6 12 12 16 14" />
//         </svg>
//     )
// }
export default Contato