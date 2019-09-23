let canvas;
let ctx;
let color = "#ccff99";
let dx = 1;
let dy = 2;
let dxBar = 8;
let timer;
let barImg;
let backgroundImg;
let point=0;
let question;

function Bar(x, y) {
    this.x = x;
    this.y = y;
}

function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

let bar = new Bar(350, 320);
let circle = new Circle(250, 30, 10);
