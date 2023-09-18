const QuienesSomos = () => {
  return (
    <>
      <div id="quienes-somos"></div><br />
      <div>
        <p className="estilo-titulo-quienes-somos text-center mt-20">Quienes Somos</p>
      </div>

      <div className="flex ml-20 mt-20" style={{ marginLeft: '9rem' }}>
        <div className="ml-16 relative">
          <img
            src="../src/assets/imagen-quienes-somos.jpg"
            alt="Imagen"
            style={{ width: '40%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="w-1/2 mt-3 absolute" style={{ marginLeft: '30rem' }}>
          <p className="estilo-parrafo-musa mt-10 text-gray-400 w-1/2 ml-20">
            "Sumérgete en un mundo donde la sofisticación y la inspiración se unen en una danza armoniosa. ElanMuse es mucho más que un nombre, es un viaje creativo que te transportará a un reino de posibilidades ilimitadas.
            Únete a nosotras en este viaje para descubrir y desatar tu potencial creativo en su forma más refinada."
          </p>
        </div>
      </div>
      <div className="mt-20" style={{ width: '70%', marginLeft: '10rem' }}>
        <p className="estilo-parrafo-presentacion text-gray-400 ml-20">
          Somos Josefina Davos y Rosario Kent, dos diseñadoras de interiores
          y amigas, que hicimos de este concepto nuestro propio proyecto.
          ÉlanMuse nace en el año 2022, con la misión de llevar esta filosofía a un
          estilo de decoracion fresco, real y con identidad propia.
        </p>
      </div>
      <div style={{
        width: '100%', /* Ancho al 100% del viewport */
        height: '100vh', /* Altura al 100% del viewport */
        display: 'flex', /* Mostrar elementos en un flex container */
        justifyContent: 'center', /*Esta es una sintaxis de javascript de objeto e linea de react*/
        alignItems: 'center', /*Esta es una sintaxis de javascript de objeto e linea de react*/
        marginTop: '10rem',
      }}>

        <img
          src="../src/assets/quienes-somos-2.jpeg"
          alt="Imagen"
          style={{ width: '40%', height: 'auto', objectFit: 'cover' }}
          className="mb-14"
        />
      </div >
    </>
  );
};

export default QuienesSomos;

