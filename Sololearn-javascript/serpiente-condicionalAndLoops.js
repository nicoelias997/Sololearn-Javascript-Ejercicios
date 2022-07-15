// El caracol en el pozo
// El caracol sube 7 pies cada día y se desliza hacia atrás 2 pies cada noche.
// ¿Cuántos días tardará el caracol en salir de un pozo con la profundidad dada? Entrada de muestra: 31 Salida de muestra: 6 Explicación : analicemos la distancia que recorre el caracol cada día: Día 1: 7-2=5 Día 2: 5+7-2=10 Día 3: 10+7-2=15 Día 4: 15+7-2=20 Día 5: 20+7-2=25 Día 6: 25+7=32 Entonces, el día 6 el caracol alcanzará los 32 pies y saldrá del pozo en el día, sin resbalar esa noche.


function main(profundidad){
    let dias = 0; 
    let total = 0;
do{
    total += 7;
    dias++;
    if(total < profundidad){
        total = total - 2;
    }
}   while (total < profundidad);

 return dias;
}
console.log(main(42))