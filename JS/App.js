//Codigo para el movimiento de las flechas
document.addEventListener("keydown",movimiento);

//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');
  
//Variable para declarar Array
var matriz =  new Array(8);

//Variable "X" y "Y"
var x = 5;
var y = 5;

//switch
var SW = true;

//variable para el turno
var noTurno = false;

//Varible de 50 para mover fichas
var DIMENSION = 50;

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
    if(fondo.cargaOK == true && SW == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }
    regresar();
    if(fichaBlanca.cargaOK == true && SW == true){
       matriz[3][4] = 'fb';
   }
    if(fichaBlanca.cargaOK == true && SW == true){
        matriz[4][3] = 'fb';
    }
    if(fichaNegra.cargaOK == true && SW == true){
        matriz[3][3] = 'fn';
    }
    if(fichaNegra.cargaOK == true && SW == true){
        matriz[4][4] = 'fn';
    }
    if(fondo.cargaOK == true && SW == false){
        lapiz.drawImage(fondo.imagen,0,0);
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

            /*if(matriz[(x -  55)/DIMENSION][(y - 5)/DIMENSION] == 'x'){
                if(matriz[(x + 45) / DIMENSION][(y - 5) / DIMENSION] == 'x'){
                    alert("Aqui no puedes poner la ficha amigo");
                }
            }*/
                //Fichas Negras
                if(noTurno == true){               
                if(matriz[(x - 5)/DIMENSION][(y - 5)/DIMENSION] == 'x'){               
                    matriz[(x - 5)/DIMENSION][(y - 5)/DIMENSION] = 'fn';
                        noTurno = false;
                        //Lado Izquierdo
                        if(matriz[(x -  55)/DIMENSION][(y - 5)/DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] == 'fn'){
                                    for(var j = 1; i < 8; j++){
                                        if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] =='fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[4][3] == 'fb'){
                                                SW = false;
                                            }
                                            alert("Turno de la ficha blanca");
                                            break;
                                        }
                                        matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Lado Derecho
                        if(matriz[(x + 45) / DIMENSION][(y - 5) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; i < 8; j++){
                                        if(matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[3][4] == 'fb'){
                                                SW = false;
                                            }
                                            break;
                                        }
                                        matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Arriba
                        if(matriz[(x - 5) / DIMENSION][(y - 55) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x - 5) / DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; j < 8; j++){
                                        if(matriz[(x - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[4][3] == 'fb'){
                                                SW = false;
                                            }
                                            break;
                                        }
                                        matriz[(x - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Abajo
                        if(matriz[(x - 5) / DIMENSION][(y + 45) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x - 5) / DIMENSION][(y + (i * DIMENSION) - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; j < 8; j++){
                                        if(matriz[(x - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[3][4] == 'fb'){
                                                SW = false;
                                            }
                                            break;
                                        }
                                        matriz[(x - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Diagonal derecha arriba
                        if(matriz[(x + 45) / DIMENSION][(y - 55) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; j < 8; j++){
                                        if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            break;
                                        }
                                        matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Diagonal izquierda arriba
                        if(matriz[(x -  55)/DIMENSION][(y - 55) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; j < 8; j++){
                                        if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[4][4] == 'fn'){
                                                SW = false;
                                            }
                                            break;
                                        }
                                        matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fn';
                                    }
                                }
                            }
                        }
                        //Diagonal izquierda abajo
                        if(matriz[(x -  55)/DIMENSION][(y + 45) / DIMENSION] == 'fb'){
                            for(var i = 2; i < 8; i++){
                                if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y + (i * DIMENSION) - 5) / DIMENSION] == 'fn'){
                                    for(var j = 1; j < 8; j++){
                                        if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] == 'fn'){
                                            x = 5;
                                            y = 5;
                                            fichas();
                                            regresar();
                                            if(matriz[3][3] == 'fn'){
                                                SW = false;
                                            }
                                            break;
                                        }
                                        matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                    }
                                }
                            }
                        }
                        x = 5;
                        y = 5;                                      
                        fichas();
                        alert("Turno de la ficha blanca");
                }
                    //Fichas Blancas
            }else if(noTurno == false){
                    if(matriz[(x - 5)/DIMENSION][(y - 5)/DIMENSION] == 'x'){               
                        matriz[(x - 5)/DIMENSION][(y - 5)/DIMENSION] = 'fb';
                        noTurno = true;
                            //Lado Izquierdo
                            if(matriz[(x -  55)/DIMENSION][(y - 5)/DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] == 'fb'){
                                        for(var j = 1; i < 8; j++){
                                            if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] =='fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[4][4] == 'fb'){
                                                    SW = false;
                                                }
                                                alert("Turno de la ficha negra");
                                                break;
                                            }
                                            matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Lado Derecho
                            if(matriz[(x + 45) / DIMENSION][(y - 5) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; i < 8; j++){
                                            if(matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[3][3] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Arriba
                            if(matriz[(x - 5) / DIMENSION][(y - 55) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - 5) / DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; j < 8; j++){
                                            if(matriz[(x - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[4][4] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Abajo
                            if(matriz[(x - 5) / DIMENSION][(y + 45) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - 5) / DIMENSION][(y + (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; j < 8; j++){
                                            if(matriz[(x - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[3][3] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Diagonal derecha arriba
                            if(matriz[(x + 45) / DIMENSION][(y - 55) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; j < 8; j++){
                                            if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                break;
                                            }
                                            matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Diagonal izquierda arriba
                            if(matriz[(x -  55)/DIMENSION][(y - 55) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y - (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; j < 8; j++){
                                            if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[4][4] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y - (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Diagonal izquierda abajo
                            if(matriz[(x -  55)/DIMENSION][(y + 45) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x - (i * DIMENSION) - 5)/DIMENSION][(y + (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; j < 8; j++){
                                            if(matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[3][3] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x - (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] ='fb';
                                        }
                                    }
                                }
                            }
                            //Diagonal derecha abajo
                            if(matriz[(x + 45) / DIMENSION][(y + 45) / DIMENSION] == 'fn'){
                                for(var i = 2; i < 8; i++){
                                    if(matriz[(x + (i * DIMENSION) - 5) / DIMENSION][(y + (i * DIMENSION) - 5) / DIMENSION] == 'fb'){
                                        for(var j = 1; i < 8; j++){
                                            if(matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] == 'fb'){
                                                x = 5;
                                                y = 5;
                                                fichas();
                                                regresar();
                                                if(matriz[4][4] == 'fb'){
                                                    SW = false;
                                                }
                                                break;
                                            }
                                            matriz[(x + (j * DIMENSION) - 5)/DIMENSION][(y + (j * DIMENSION) - 5)/DIMENSION] ='fb';
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