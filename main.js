canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;



background_image = "racing.jpg";

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_image = "car2.png";

car2_x = 10;
car2_y = 100;

function add() {
    background_imagetag = new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = background_image;

    car1_imagetag = new Image();
    car1_imagetag.onload = uploadCar1;
    car1_imagetag.src = car1_image;

    car2_imagetag = new Image();
    car2_imagetag.onload = uploadCar2;
    car2_imagetag.src = car2_image;
}


function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if(keyPressed == '38'){
        up();
        console.log("up Press");
    }

    if(keyPressed == '37'){
    left();
        console.log("left Press")

    }if(keyPressed == '40'){
        down();
        console.log("down Press")

    }if(keyPressed == '39'){
        right();
        console.log("right Press")
    }
    
    if(keyPressed == '65'){
        A();
        console.log("A press");
    }

    if(keyPressed == '68'){
    D();
        console.log("D Press")

    }if(keyPressed == '83'){
        S();
        console.log("S Press")

    }if(keyPressed == '87'){
        W();
        console.log("W Press")
    }
    if(car1_x > 700)
    {
        window.alert ("Car1 Win");
        console.log("Car1 Win")
    }
    if(car2_x > 800)
    {
        window.alert("Car2 Win");
        console.log("Car2 Win")
    } 
}


function up()
{
if(car1_y >= 0){
    car1_y = car1_y - 10;
    console.log("when up arrow is pressed, x " + car1_x +"and y = "+ car1_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function down()
{
if(car1_y <= 500){
    car1_y = car1_y + 10;
    console.log("when down arrow is pressed, x " + car1_x +"and y = "+ car1_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function left()
{
if(car1_x >= 0){
    car1_x = car1_x - 10;
    console.log("when arrow is pressed, x " + car1_x +"and y = "+ car1_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function right()
{
if(car1_x >= 0){
    car1_x = car1_x + 10;
    console.log("when right arrow is pressed, x " + car1_x +"and y = "+ car1_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function W()
{
if(car2_y >= 0){
    car2_y = car2_y - 10;
    console.log("when up arrow is pressed, x " + car2_x +"and y = "+ car2_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function S()
{
if(car2_y <= 500){
    car2_y = car2_y + 10;
    console.log("when down arrow is pressed, x " + car2_x +"and y = "+ car2_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function A()
{
if(car2_x >= 0){
    car2_x = car2_x - 10;
    console.log("when arrow is pressed, x " + car2_x +"and y = "+ car2_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}

function D()
{
if(car2_x >= 0){
    car2_x = car2_x + 100;
    console.log("when right arrow is pressed, x " + car2_x +"and y = "+ car2_y);
    uploadBackground();
    uploadCar1();
    uploadCar2();
}


}
