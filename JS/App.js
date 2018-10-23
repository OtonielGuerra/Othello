//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');

//Declarando todas las imagenes y el fondo
var fondo = {
    url: './imagenes/TableroNew.png',
    image: Image,
    cargaOK: false
};

var fichaBlanca = {
    url: './imagenes/FichaBlanca.png',
    image: Image,
    cargaOK: false
};

var fichaNegra = {
    url: './imagenes/FichaNegra.png',
    image: Image,
    cargaOK: false
};

//Codigo que dice que las imagenes son de tipo Image
fondo.imagen = new Image();
fichaBlanca.imagen = new Image();
fichaNegra.imagen = new Image();

//Declaro que la imagen esta en una ruta especifica
fondo.imagen.src = fondo.url;
fichaBlanca.imagen.src = fichaBlanca.url;
fichaNegra.imagen.src = fichaNegra.url;

//Cargar las imagenes
fondo.imagen.addEventListener("load",function(){
    fondo.cargaOK = true;
    dibujar();
});

fichaBlanca.imagen.addEventListener("load",function(){
    fichaBlanca.cargaOK = true;
    dibujar();
});

fichaNegra.imagen.addEventListener("load",function(){
    fichaNegra.cargaOK = true;
    dibujar();
});

//Dibujando
function dibujar(){ 
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    if(fichaBlanca.cargaOK == true){
        lapiz.drawImage(fichaBlanca.imagen,5,5);
    }

    if(fichaNegra.cargaOK == true){
        lapiz.drawImage(fichaNegra.imagen,55,55);
    }

    };