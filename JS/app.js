let pag = 1;
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("Siguiente");

btnSiguiente.addEventListener("click", () => {
  pag += 1;
  ConectarApi();
});

btnAnterior.addEventListener("click", () => {
  pag -= 1;
  ConectarApi();
});

const ConectarApi = async () => {
  try {
    const respuestas = await fetch(
      `=${pag}`
    );

    console.log(respuestas);

    if (respuestas.status === 200) {
      const datos = await respuestas.json();
      let peliculas = "";
      datos.results.forEach((element) => {
        peliculas = peliculas += `
            <div class="peliculas">
            <h3  class="titulo">${element.title}</h3>
            <img  class="img" src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
            </div>
        
        
        `;
      });
      document.querySelector(".pelicula").innerHTML = peliculas;
    } else if (respuestas.status === 401) {
      console.log("Ha ocurido un error");
    } else if (respuestas.status === 404) {
      console.log("No se ha encotrado el archivo");
    } else {
      console.log("ha ocurrido algo inesperado");
    }
  } catch (error) {
    console.log(error);
  }
};
ConectarApi();

// !const datos = await respuestas.json();
//! console.log(datos.title);
//!esto se usa para capturar los dtos de tipo json que mando la api
//*para hacer una funcion asincrona se usync
//* para conectar la api se crea un array funcion el cual te permite conectar a la api
//* con el metodo fetch(aqui dentro va la url del la api)
//*cuando se hace una peticion se usa un control de errores es desir try{}catch(error){consolo.log(error)}
//*para comprobar si el id o codigo el correto seria bueno usar status === 200 que significa que el producto exite ejmplo:
//? if(varibasle que se conecta con la api.status===200){
//*aqui se ponen los datos que quieres que imprima
//!console.log(varible que se conectacon la api)
//?}

//! siempre es muy importante verifica el tipo de erro que a ocurrdo
//!para haceder a una seccion de la api tienes que poner
//?en el link de la api con la direcion a la que te quieres dirigir
