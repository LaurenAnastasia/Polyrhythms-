// const backgroundColor = [230,220,190];
const myCanvas = { width: 1420, height: 800};
const backgroundColor = [150, 150, 150];
const lineColor = [212, 212, 212];
const activeLineColor = [181, 92, 60];
const lineWidth = 6;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
const gravity = 4;

const ball1 = {
    x: 300,
    y: 300,
    size: 100,
    speed: 6,
    fillColor: [0, 64, 166],
    strokeColor: [51, 51, 51],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {
    x: 300,
    y: 100,
    size: 50,
    speed: 4,
    fillColor: [0, 64, 166],
    strokeColor: [51, 51, 51],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    size: 80,
    speed: 5,
    fillColor: [0, 64, 166],
    strokeColor: [51, 51, 51],
    ballStrokeWeight: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 


const leftEdge = {
    x1: 250,
    y1: 45,
    x2: 250,
    y2: 390,
    color: [150, 150, 150],
    width: lineWidth,

}

const rightEdge = {
    x1: 550,
    y1: 45,
    x2: 550,
    y2: 390,
    color: [120, 120, 120],
    width: lineWidth,
}

const topEdge = {
    x1: 250,
    y1: 45,
    x2: 550,
    y2: 45,
    color: [54, 54, 54],
    width: lineWidth,

}

const bottomEdge = {
    x1: 250,
    y1: 390,
    x2: 550,
    y2: 390,
    color: [196, 196, 196],
    width: lineWidth,

}

const balls = [ball1, ball2, ball3];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
    drawLine(topEdge);
    drawLine(bottomEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}



const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    /*line.color = activeLineColor;
    line.width = activelineWidth;*/

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    /*line.color = lineColor;
    line.width = lineWidth;*/
}