import { useEffect, useState } from "react";

const Navegador = () => {

    const [scrollCoordinates, setScrollCoordinates] = useState(
        {
            y: 0
        });
    const [newNavegador, setNewNavegador] = useState(false);

    // console.log(scrollCoordinates.y);

    const handleScroll = () => {
        const y = window.scrollY;
        setScrollCoordinates({ y });

        if (y > 100) {
            setNewNavegador(true);
        } else {
            setNewNavegador(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fondo-barra-navegacion fixed w-full top-0 z-20">
            <div className={`m-auto ${newNavegador ? 'hidden' : ''}`} 
            style={{
                // opacity: newNavegador ? 0 : 1,
                // fontSize: newNavegador ? "1rem" : "2rem",
                // color: newNavegador ? "#ccc" : "#fff",
                // backgroundColor: newNavegador ? "#e0e0e0" : "#e0e0e0",
                transition: "opacity 0.5s ease-in-out, font-size 0.5s ease-in-out, color 0.5s ease-in-out, background-color 1.2s ease-in-out"
            }}
            >


                <a href="#" className="relative">
                    <span className="hover:text-gray-400 font-bold text-xl flex flex-col  items-center py-6">
                        <div className="flex justify-center gap-2 w-full">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                        </div>
                        <div className="mt-10 mb-10">ÉlanMuse</div>
                        <div className="flex justify-center w-full gap-2">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                        </div>
                    </span>
                </a>
            </div>
            <div className={`flex justify-around py-4`} 
                style={{
                    backgroundColor: newNavegador ? "#e0e0e0" : "transparent",
                    transition: "background-color 1.2s ease-in-out"
                }}
            >
                <div className="flex items-center gap-10 justify-center ">
                    <a href="#asesoramiento" className={`text-white hover:text-gray-400 ${newNavegador ? 'text-[#946c52]' : ''}`}>Asesoramiento</a>
                    <a href="#quienes-somos" className={`text-white hover:text-gray-400 ${newNavegador ? 'text-[#946c52]' : ''}`}>Quienes Somos</a>
                </div>

                <div className="flex items-center gap-10 justify-center">
                    <a href="#showroom" className={`text-white hover:text-gray-400 ${newNavegador ? 'text-[#946c52]' : ''}`}>Showroom</a>
                    <a href="#contacto" className={`text-white hover:text-gray-400 ${newNavegador ? 'text-[#946c52]' : ''}`}>Contacto</a>
                </div>
            </div>
            {/* <div > 
                <p>Scroll Y: {scrollCoordinates.y}</p>
            </div> */}
        </nav>

    )
}

export default Navegador
