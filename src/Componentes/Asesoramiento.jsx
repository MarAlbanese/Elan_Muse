const Asesoramiento = () => {
    return (
        <>
            <div id="asesoramiento"></div>
            <div className="w-1/2 mt-20" style={{ marginLeft: '20rem' }}>
                <p className="estilo-parrafo-asesoramiento text-gray-500 ml-20">
                    “Tu casa, tu historia”
                </p>
                <p className="estilo-parrafo-asesoramiento-2 text-gray-400 ml-20">
                    Contamos con un servicio de asesoramiento personalizado, ya sea de
                    manera virtual o presencial. Vemos juntos tus necesidades y ambientes a
                    reformar y te armamos una propuesta para transformar tu casa en tu lugar.
                    En los asesoramientos dirigimos y ejecutamos los proyectos
                    que realizamos hasta el último detalle.
                </p>
            </div>

            <div style={{
                width: '100%', /* Ancho al 100% del viewport */
                height: '100vh', /* Altura al 100% del viewport */
                display: 'flex', /* Mostrar elementos en un flex container */
                justifyContent: 'center', /*Esta es una sintaxis de javascript de objeto e linea de react*/
                alignItems: 'center', /*Esta es una sintaxis de javascript de objeto e linea de react*/
                marginTop: '10px',
            }}>

                <img
                    src="../src/assets/asesoramiento.jpeg"
                    alt="Imagen"
                    style={{ width: '60%', height: '80%', objectFit: 'cover' }}
                />
            </div >

            <div className="" style={{ width: '60%', marginLeft: '15rem' }}>
                <p className="estilo-parrafo-asesoramiento-3 text-gray-400 ml-20">
                    Cada proyecto nos regala la oportunidad de explorar un nuevo universo:
                    conocemos de cerca los ambientes de cada casa, pero también conocemos a
                    quienes las habitan, personas reales que al abrirnos las puertas de sus espacios
                    más íntimos nos comparten, ademas, un pedacito de su alma.
                    En cada nuevo proyecto buscamos, antes que ninguna otra cosa, que cada detalle
                    refleje el amor y la historia personal de los que habitan ese hogar.
                </p>
            </div>

            <div className="flex ml-20 mt-20" style={{ marginLeft: '9rem' }}>
                <div className="ml-16 relative">
                    <img
                        src="../src/assets/asesoramiento-3.jpg"
                        alt="Imagen"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="w-1/2 mt-3 absolute" style={{ marginLeft: '30rem' }}>
                    <p className="estilo-parrafo-musa text-gray-400 w-1/2 ml-20 mt-20">
                        "Un espacio vacío es una historia esperando a suceder. Creamos espacios para ser vividos. Queremos que tu casa cuente tu historia, que hable de vos"
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-16 mb-10">
                <p className="w-1/2 estilo-parrafo-asesoramiento-4 text-gray-400">
                    A través de los proyectos nos superamos como equipo, ponemos en juego nuestro
                    talento y nuestra pasión en cada detalle, compartimos momentos humanos, soñamos
                    despiertas y proyectamos en grande, sembramos con paciencia y cosechamos con
                    alegría la satisfacción y agradecimiento de quienes viven estos nuevos espacios:
                    espacios reales, soñados y vividos.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src="../src/assets/asesoramiento-2.jpeg"
                    alt="Imagen"
                    style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
                />
            </div>
            <div className="flex justify-center items-center mt-16 mb-10">
                <p className="w-1/2 estilo-parrafo-asesoramiento-5 text-gray-400">
                    Nuestro objetivo en cada proyecto es lograr que esa casa se convierta en
                    El refugio de quien lo habita, que se identifique y lo refleje.
                    Cada hogar marca etapas en nuestras vidas y ojalá todas las casas que
                    transformemos sean el reflejo de una casa vivida y feliz.
                </p>
            </div>


        </>

    )
}

export default Asesoramiento
