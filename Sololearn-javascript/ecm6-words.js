// Palabras
// Estás haciendo un encriptador de texto. Debe tomar varias palabras y generar una versión combinada, donde cada palabra esté separada por un signo de dólar $.
// Por ejemplo, para las palabras " hola ", " cómo ", " estás ", " tú ", la salida debe ser " $hola$cómo$estás$t$ ".
// El código dado declara una clase llamada Add , con un constructor que toma un parámetro de descanso.
// Complete el código agregando un método de impresión () a la clase, que debería generar el resultado solicitado.

class Add {
    constructor(...words) {
        this.words = words;
    }
    print(){
        console.log("$" + this.words.join("$") + "$"); //Lo unico que tenia que hacer es esto!! 
 }
}

  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();
 