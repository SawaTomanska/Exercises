// variables
const paddle = document.querySelector(".paddle");
const box = document.querySelectorAll(".box");
const ball = document.querySelector(".ball")
const dots = document.querySelectorAll(".box-dots .dot");
const speedPaddle = 0.5;
let heightbox = 600 - 25;
let widthbox = 900;
let positionPaddle = widthbox - 200;
let positionDotX = -30;
let positionDotY = 20;
let positionBallY = 20;
let positionBallX = widthbox / 2;
let directionBallY = true;
let directionBallX = true;
let resetBall;


// randomize color and position for dots
function drawDots () {
    for (var j = 0; j < 70; j++) {
        //	resetDots();
   
            // let colors = [];
            let drawNum = 0;
            let color = "rgb(";
                for (var i = 1; i <= 3; i++) {
                    drawNum = Math.round(Math.random() * 226);
                    if (i <= 2) {
                        color = color + drawNum + ", ";
                    } else {
                        color = color + drawNum + ")";
                    };
                };
            // colors.push(color);
            dots[j].style.backgroundColor = color;

            if (j == 17) {
                positionDotY = 70;
                positionDotX = -30;
            } else if (j == 34 ) {
                positionDotY = 120;
                positionDotX = -30;
            } else if (j == 51 ) {
                positionDotY = 170;
                positionDotX = -30;
            };
            positionDotX = positionDotX + 50;
            dots[j].style.left = positionDotX + "px";
            dots[j].style.top = positionDotY + "px";
        };
};

//start move ball
 setInterval(function () {
    moveBall ();
    checkCollisionWithPaddle ();
    document.onkeydown = function (kayboard) {
        let key = kayboard.keyCode;
        movePaddle (key);
    };
}, speedPaddle);

 // move the paddle
 function movePaddle (key) {
    if (key === 39 && positionPaddle < widthbox - 200){
         positionPaddle = positionPaddle + 3; 
         paddle.style.left = positionPaddle + "px";
     } else if (key === 37 && positionPaddle <= widthbox && positionPaddle >= 0) {
         positionPaddle = positionPaddle - 3; 
         paddle.style.left = positionPaddle + "px";
     }  else  if (key != 39 && key != 37) {
         alert("Use arrows on your kayboard (left and right)");
     };
  
 }

// move the ball and check colision with walls
function moveBall () {
    if(directionBallY === true && positionBallY < heightbox){
    positionBallY = positionBallY + speedPaddle;
    ball.style.bottom = positionBallY + "px";
    } else if (positionBallY === heightbox || positionBallY > 0) {
    positionBallY = positionBallY - speedPaddle;
    ball.style.bottom = positionBallY + "px";
    directionBallY = false;
    } else if (positionBallY === 0){
        alert("GAME OVER");
    };

    if(directionBallX === true && positionBallX < widthbox - 30){
    positionBallX = positionBallX + speedPaddle;
    ball.style.left = positionBallX + "px";
    } else if (positionBallX  === widthbox - 30 || positionBallX > 0) {
    positionBallX = positionBallX - speedPaddle;
    ball.style.left = positionBallX + "px";
    directionBallX = false;
    } else if (directionBallX === false && positionBallX === 0) {
        directionBallX = true;
    };
 
};

function checkCollisionWithPaddle (){
    if (positionBallY <= 20) {
        if (positionBallX > positionPaddle && positionBallX < positionPaddle + 200){
            directionBallY = true;
        };
    };
};

drawDots ();

//zakodowanie sprawdzania kolizji piłki z paletka i kropkami
// kropki muszą być stworzone na sztywno razem z całym oknem gry
// poprawic sterowanie paletka 