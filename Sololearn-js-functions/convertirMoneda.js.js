// Convertidor de moneda


// Está creando una aplicación de conversión de divisas.
// Cree una función llamada convert , que tome dos parámetros: la cantidad a convertir y la tasa, y devuelva la cantidad resultante.
// El código para tomar los parámetros como entrada y llamar a la función ya está presente en Playground.
// Cree la función para que el código funcione. 
// Entrada de muestra: 100 1.1 Salida de muestra: 110

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}

function convert(amount, rate) {
    
   return amount*rate;
  }

