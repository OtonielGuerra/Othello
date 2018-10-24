//Codigo para el movimiento de las flechas
document.addEventListener("keydown",movimiento);

//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');
  
//Variable para declarar Array
var matriz =  new Array(7);

//Variable "X" y "Y"
x = 405;
y = 55;

//variable para el turno
noTurno = 1;

//Varible de 50 para mover fichas
DIMENSION = 50;

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

iniciarMatriz()

//Llena la matriz de x en los espacios
function iniciarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(7);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

//Dibujando
function dibujar(){ 
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    if(fichaBlanca.cargaOK == true){
         lapiz.drawImage(fichaBlanca.imagen,155,205);
    }

    if(fichaBlanca.cargaOK == true){
        lapiz.drawImage(fichaBlanca.imagen,205,155);
    }

    if(fichaNegra.cargaOK == true){
        lapiz.drawImage(fichaNegra.imagen,155,155);
    }

    if(fichaNegra.cargaOK == true){
        lapiz.drawImage(fichaNegra.imagen,205,205);
    }

    if(fichaNegra.cargaOK == true){
        lapiz.drawImage(fichaNegra.imagen,405,5);
    }

    if(fichaBlanca.cargaOK == true){
        lapiz.drawImage(fichaBlanca.imagen,x,y);
    }

    };

//Codigo de programacion para las flechas y mover las fichas
    var tecla = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        ENTER: 13
    };
    
    function movimiento(evento){
        switch(evento.keyCode){
    
            case tecla.LEFT:
                if(x > 5){
                    x = x - DIMENSION;
                    dibujar();
                }
                break;
    
            case tecla.UP:
                if(y > 5){
                    y = y - DIMENSION;
                    dibujar();    
                }
                break;
    
            case tecla.RIGHT:
                if(x < 405){
                    x = x + DIMENSION;
                    dibujar();
                }
                break;
    
            case tecla.DOWN:
                if(y < 355){
                    y = y + DIMENSION;
                    dibujar();    
                }
                break;
            }
    };