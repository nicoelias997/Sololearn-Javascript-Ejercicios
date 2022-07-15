// Administrador de contactos
// Está trabajando en una aplicación Contact Manager.
// Ha creado el constructor de objetos de contacto , que tiene dos argumentos, nombre y número. Debe agregar un método de impresión () al objeto, que generará los datos de contacto en la consola en el siguiente formato: nombre: número El código dado declara dos objetos y llama a sus métodos de impresión (). Complete el código definiendo el método print() para los objetos.

function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
console.log(a.name + ": "+ a.number)
console.log(b.name + ": "+ b.number)
