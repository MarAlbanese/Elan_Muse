const ImagenDebajoCarrusel = () => {
    return (

        <div className="flex pt-20 px-2">
        <img
          className="pl-4 pr-2"
          style={{ width: '50%', height: '20%', objectFit: 'contain' }}
          src="../src/assets/ropa-1.webp"
          alt="Imagen 1"
        />
      
        <img 
          className="pr-4 pl-4"
          style={{ width: '50%', height: '20%', objectFit: 'contain' }}
          src="../src/assets/ropa-2.webp"
          alt="Imagen 2"
        />
      </div>
      
      
        


        // <div className="flex pt-20 relative">
        //     <div>
        //         <img
        //             className="pr-1"
        //             style={{ width: '100%', height: '50%', objectFit: 'cover' }}
        //             src="../src/assets/ropa-1.webp"
        //             alt="Imagen 1"
        //         />
        //     </div>
        //     <div>
        //         <img 
        //             className="pl-1"
        //             style={{ width: '100%', height: '50%', objectFit: 'cover' }}
        //             src="../src/assets/ropa-2.webp"
        //             alt="Imagen 2"
        //         />
        //     </div>
        // </div>
    );
}

export default ImagenDebajoCarrusel;

