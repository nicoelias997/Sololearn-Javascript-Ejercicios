let images = ["https://www.sololearn.com/uploads/slider/1.jpg", "https://www.sololearn.com/uploads/slider/2.jpg", "https://www.sololearn.com/uploads/slider/3.jpg"];

let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    let slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}
