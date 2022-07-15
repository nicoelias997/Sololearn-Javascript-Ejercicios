let pos = 0;
//llamamos a nuestros elementos html
let box = document.getElementById("box");
let t = setInterval(move, 5);

function move(){
    if(pos >= 150){ //Esta condicion hara que la caja no se mueva infinitamente hacia la derecha
    clearInterval(t); //con esta propiedad, detenemos "setInterval"
    }
    else {
        pos += 1;
        box.style.left = pos + "px";
    }
} // con este codigo, el cuadro rojo se movera hasta el final del codigo verte y no se repetira la accion.


// function move(){
//     if(pos >= 150){ 
//     pos = 0;
//     }
//     if (pos >= 0) {
//         pos += 1;
//         box.style.left = pos + "px";
//     }
//  } ////con este codigo, recorrera toda la linea horizontal y volvera a empezar