//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');

//Declarando todas las imagenes y el fondo
var fondo = {
    url: './imagenes/Tablero.jpg',
    image: Image,
    cargaOK: false
};

//Codigo que dice que las imagenes son de tipo Image
fondo.imagen = new Image();

//Declaro que la imagen esta en una ruta especifica
fondo.imagen.src = fondo.url;

//Cargar las imagenes
fondo.imagen.addEventListener("load",function(){
    fondo.cargaOK = true;
    dibujar();
});

//Dibujando
function dibujar(){ 
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }
    };