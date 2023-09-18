import { useState } from 'react';
import Error from './Error';

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState(false);
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, email, asunto, mensaje].includes('')) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        setNombre('');
        setEmail('');
        setAsunto('');
        setMensaje('');
        setError(false);
        setFormularioEnviado(true);

        setTimeout(() => {
            setFormularioEnviado(false);
        }, 3000);
    };

    return (
        <> 
        <div id="contacto"></div> 
        <div style={{ background: '#b89778' }} className="grid grid-cols-1 grid-rows-1 mt-10 mb-12 md:grid-cols-2">
            <div>
                <h1 className='mt-10 mb-16 ml-10 text-4xl  text-white' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >CONTACTO</h1>
                <div className=' ml-10 mb-4 flex-col md:flex '>
                    
                    <div className='mr-10'>
                        <p className='font-medium text-xl text-white' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Dirección</p>
                        <p style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }}  >Pacheco de Melo 3398</p>
                        <p style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Recoleta</p>
                    </div>
                    <div>
                        <p className='font-medium text-xl text-white' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Teléfono</p>
                        <p className='font-medium text-gray-800' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >11 6296-3241 / 4542-7860 / 5987-4796</p><br />
                        <p className='font-medium text-xl text-white' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >WhatsApp</p>
                        <p className='font-medium text-gray-800' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >11 6296-3241 / 4542-7860 / 5987-4796</p><br />
                        <p className='font-medium text-xl text-white' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >E-Mail</p>
                        <p className='font-medium text-gray-800' style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >ElanMuse@gmail.com</p>
                    </div>
                </div>
            </div>


            <div className='mb-12 mt-20'>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
                    {error && <Error mensaje="Todos los campos son obligatorios" />}
                    {formularioEnviado && <p className="text-green-500 text-center mb-4">El formulario se envió correctamente, a la brevedad lo contactaremos.</p>}

                    <div className="mb-4">
                        <label htmlFor="nombre" className="block mb-2 font-medium text-gray-700" style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}

                            className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700" style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                            className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="asunto" className="block mb-2 font-medium text-gray-700" style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Asunto:</label>
                        <input
                            type="text"
                            id="asunto"
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}

                            className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block mb-2 font-medium text-gray-700" style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Mensaje:</label>
                        <textarea
                            id="mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}

                            className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                        />

                    </div>
                    <button
                        type="submit"
                        className="boton-enviar w-full px-4 py-2 text-white" 
                        style={{  fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contacto;