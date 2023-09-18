import Asesoramiento from "./Componentes/Asesoramiento";
import Carrusel from "./Componentes/Carrusel";
import Comentarios from "./Componentes/Comentarios";
import Contacto from "./Componentes/Contacto";
import Footer from "./Componentes/Footer";
import Imagen from "./Componentes/Imagen";
import ImagenDebajoCarrusel from "./Componentes/ImagenDebajoCarrusel";
import Navegador from "./Componentes/Navegador";
import QuienesSomos from "./Componentes/QuienesSomos";
import WhatsApp from "./Componentes/WhatsApp";

function App() {
  return (
    <>
      <Navegador />
      <Imagen />
      <QuienesSomos />
      <Carrusel />
      <ImagenDebajoCarrusel />
      <Asesoramiento />
      <Comentarios />
      <Contacto />
      <WhatsApp />
      <Footer />


    </>
  );
}

export default App;

