class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

get area(){
    return this.calcArea();
}
calcArea(){
return this.height * this.width;
}
}

const square = new Rectangle (10,5);
console.log(square.area); //50. Area de un rectangulo.


class Point {
    constructor(x , y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = (a-b)*x;
        const dy = (a-b)*y;
        return Math.hypot(dx,dy); //devuelve la hipotenusa: h^2 = a^2 + b^2;
    }
}
const p1 = new Point(7,2);
const p2 = new Point(3,8);
console.log(p1)
console.log(p2)
console.log(Point.distance(p1,p2))
