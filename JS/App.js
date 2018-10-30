//Codigo para el movimiento de las flechas
document.addEventListener("keydown",movimiento);

//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');
  
//Variable para declarar Array
var matriz =  new Array(8);

//Variable "X" y "Y"
x = 5;
y = 5;

//variable para el turno
noTurno = false;

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

iniciarMatriz();

//Llena la matriz de x en los espacios
function iniciarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(8);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

//Funcion para regresar ficha
function regresar(){
    if(noTurno == true){
        lapiz.drawImage(fichaNegra.imagen,x,y);
    }else{
        if(fichaNegra.cargaOK == true){
            lapiz.drawImage(fichaBlanca.imagen,x,y);
        }
         
    }
}

//Dibujando
function dibujar(){ 
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }
    regresar();
    if(fichaBlanca.cargaOK == true){
       matriz[3][4] = 'fb';
   }
    if(fichaBlanca.cargaOK == true){
        matriz[4][3] = 'fb';
    }
    if(fichaNegra.cargaOK == true){
        matriz[3][3] = 'fn';
    }
    if(fichaNegra.cargaOK == true){
        matriz[4][4] = 'fn';
    }
    fichas();
    };
    
    function fichas() {
        for (var i = 0; i < matriz.length; i++) {
            for (var j = 0; j < matriz.length; j++) {
                if (matriz[i][j] == 'fn') {
                    lapiz.drawImage(fichaNegra.imagen,(i * DIMENSION) + 5, (j * DIMENSION) + 5 );
                    regresar();
                } else if (matriz[i][j] == 'fb') {
                    lapiz.drawImage(fichaBlanca.imagen,(i * DIMENSION) + 5, (j * DIMENSION) + 5 );
                    regresar();
                }
            }
        }
    }
    

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
                    fichas();
                    regresar();
                }
                break;
    
            case tecla.UP:
                if(y > 5){
                    y = y - DIMENSION;
                    dibujar();
                    fichas();
                    regresar();    
                }
                break;
    
            case tecla.RIGHT:
                if(x < 355){
                    x = x + DIMENSION;
                    dibujar();
                    fichas();
                    regresar();
                }
                break; 
            case tecla.DOWN:
                if(y < 355){
                    y = y + DIMENSION;
                    dibujar();
                    fichas();
                    regresar();
                }
                break;           
            case tecla.ENTER:

                if(noTurno == true){               
                if(matriz[(x - 5)/50][(y - 5)/50] == 'x'){               
                    matriz[(x - 5)/50][(y - 5)/50] = 'fn';
                        noTurno = false;
                        x = 5;
                        y = 5;                                      
                        fichas();
                        alert("Turno de la ficha blanca");
                }

            }else if(noTurno == false){
                    if(matriz[(x - 5)/50][(y - 5)/50] == 'x'){               
                        matriz[(x - 5)/50][(y - 5)/50] = 'fb';
                        noTurno = true;
                            //Lado Izquierdo
                            if(matriz[(x -  55)/50][(y - 5)/50] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - (i * 50) - 5)/50][(y - 5)/50] == 'fb'){
                                        for(var j = 1; i < 8; j++){
                                            if(matriz[(x - (j * 50) - 5)/50][(y - 5)/50] =='fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                break;
                                            }
                                            matriz[(x - (j * 50) - 5)/50][(y - 5)/50] ='fb';
                                        }
                                    }
                                }
                            }
                            //Lado Derecho
                            if(matriz[(x + 45) / 50][(y - 5) / 50] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x + (i * 50) - 5) / 50][(y - 5) / 50] == 'fb'){
                                        for(var j = 1; i < 8; j++){
                                            if(matriz[(x + (j * 50) - 5)/50][(y - 5)/50] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                break;
                                            }
                                            matriz[(x + (j * 50) - 5)/50][(y - 5)/50] ='fb';
                                        }
                                    }
                                }
                            }

                            x = 5;
                            y = 5;        
                            fichas();
                            alert("Turno de la ficha negra");
                }
            }
            fichas();
            break;
    }
}