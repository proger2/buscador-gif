const apiKey = 'AIzaSyA5RdjLK5slEqdx90fiDf2GwJA8AvjP1qM'



const termino= document.querySelector(".termino")
const buscador= document.querySelector(".buscador")
const resultados= document.querySelector(".resultados")
var anchopantalla = document.documentElement.clientWidth
var altopantalla = document.documentElement.clientHeight

window.addEventListener("resize", function() {
    anchopantalla = document.documentElement.clientWidth;
    console.log ("resize: " + anchopantalla+ " - "+altopantalla);
    //location.reload();
});

buscador.addEventListener("click", () => { //manejador de eventos para el click
    resultados.innerHTML = ""; // vacío  el espacio para que aparescan los resultados
    const url = `https://tenor.googleapis.com/v2/search?q=${termino.value}&key=${apiKey}&client_key=my_test_app&limit=9`;
    const peticion = fetch(url); //hacemos una peticion a tenor

    peticion
        .then((response) => { //respuesta del servidor
            return response.json();
        })
        
        .then ((response) => {  //devuelde otra promesa tambien
            
            console.log (anchopantalla+ " - "+altopantalla)
            response.results.forEach(element => {  //rrecore todos los gif de results
                const urlImg = element.media_formats.gif.url;  //armo la url con la ruta"media_formats"
                var img = document.createElement("img"); // creo un documento tipo imagen
                img.src = urlImg; //seteamos el gif en "img"
                img.width = (anchopantalla/3) -10;
                img.height = (altopantalla/3);
                resultados.appendChild(img); //inserto en el nodo padre "resultados" las imagenes de la busqueda
            });
        })
})


