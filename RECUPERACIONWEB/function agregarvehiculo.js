function registrarVehiculo(codigo, descripcion, marca, modelo, año) {
  
    const nuevoVehiculo = {
      codigo: codigo,
      descripcion: descripcion,
      marca: marca,
      modelo: modelo,
      año: año
    };

    //Como no tengo una base de datos no tengo donde guardarlos pero cree un html donde si muestre donde esta guardado 
    console.log('Vehículo registrado con éxito:', nuevoVehiculo);
  }
  
  registrarVehiculo('Cjashla123', 'Negro, 4 puertas', 'Hiundai', 'Akuas', 2023);
  