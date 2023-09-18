import {
  FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp,FaEnvelope, FaMapMarker} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="text-black py-8 mt-34 " style={{ background: '#b89778' }}>
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 mb-4 flex items-center justify-center">
          <div className="text-center">
            <a href="#inicio" className="text-xl mb-2 hover:text-white cursor-pointer" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >ÉlanMuse</a>
            <div className="mb-2">
              <a href="#asesoramiento" className=" hover:text-white block" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Asesoramiento</a>
            </div>
            <div className="mb-2">
              <a href="#quienes-somos" className=" hover:text-white block" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Quiénes Somos</a>
            </div>
            <div className="mb-2">
              <a href="#showroom" className=" hover:text-white block" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Showroom</a>
            </div>
            <div className="mb-2">
              <a href="#contacto" className=" hover:text-white block" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }} >Contacto</a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-1 flex items-start justify-center">
          <div className="text-center">
            <h2 className="text-xl hover:text-white cursor-pointer mt-10" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }}>Unite a Nosotras</h2>
            <div className='flex justify-between mt-2'>
              <div className=" hover:text-white"><FaInstagram size={30} /></div>
              <div className=" hover:text-white"><FaFacebook size={30} /></div>
              <div className=" hover:text-white"><FaLinkedin size={30} /></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-1 flex items-start justify-center">
          <div className="text-center">
            <h2 className="text-xl hover:text-white cursor-pointer" style={{ fontFamily: "Open Sans", lineHeight: 2, letterSpacing: 3 }}>Contactános</h2>
            <div className=''>
              <div className="ml-2 mt-2 hover:text-white flex items-center cursor-pointer">
                <FaWhatsapp size={30} />
                <span className="ml-2">11 6296-3241 / 4542-7860 / 5987-4796</span>
              </div>
              <div className="ml-2 mt-2 hover:text-white flex items-center cursor-pointer">
                <FaEnvelope size={30} />
                <span className="ml-2">ElanMuse@gmail.com</span>
              </div>
              <div className="ml-2 mt-2 hover:text-white flex items-center cursor-pointer">
                <FaMapMarker size={30} />
                <span className="ml-2">Pacheco de Melo 3398 Recoleta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='bg-black'>
      <h1 className='text-white font-light' >©2023 IMAGEGARDEN | Todos los derechos reservados - Desarrollado por ÉlanMuse</h1>
    </div>
    </>
    );
};

export default Footer;




