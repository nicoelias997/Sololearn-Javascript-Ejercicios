// Gerente de la tienda
// Está trabajando en un programa Store Manager, que almacena los precios en una matriz.
// Debe agregar funcionalidad para aumentar los precios en la cantidad dada.
// La variable de aumento se toma de la entrada del usuario. Debe aumentar todos los precios en la matriz dada en esa cantidad y enviar a la consola la matriz resultante.

function main(increase) {
    var prices = [98.99, 15.2, 20, 1026];
        prices[i] += increase;
       
        return prices;
}

console.log(main(9));
// for(let i = 0; i < prices.length; i++){
//     prices[i] += increase; //// solo se me modificaba el primer elemento, por que?
// }