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


