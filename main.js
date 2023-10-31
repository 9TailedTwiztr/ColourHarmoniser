score = 0;

const randInt = (int) => {
    return Math.floor(Math.random() * int)
  };
  
function random_colour() { 
        targetBox = document.getElementById("targetColourDisplay").style.background= `rgb( ${randInt(256)}, ${randInt(256)}, ${randInt(256)})`;
        
};

function random_value() {
    window.red = Math.floor(Math.random()*255);
    window.green = Math.floor(Math.random()*255);
    window.blue = Math.floor(Math.random()*255);
}

window.onload = random_colour()
window.onload = random_value()


function func_1(value) {
    window.red = value;
    change_colour();
}
function func_2(value) {
    window.green = value;
    change_colour();
}
function func_3(value) {
    window.blue = value;
    change_colour();
}
function change_colour() {
    document.getElementById("output").innerHTML = window.red+", "+window.green+", "+window.blue;
    document.getElementById("currentColourDisplay").style.background = "rgb("+window.red+", "+window.green+", "+window.blue+")";
}



// console.log( document.getElementById("currentColourDisplay").style.backgroundcolor = "rgb("+window.red+","+window.green+","+window.blue+")")

function checkColourMatch() {
    // Get the RGB values of the current colour
    const currentColour = document.getElementById("currentColourDisplay").style.backgroundcolor = window.red+", "+window.green+", "+window.blue;
    // console.log("Current:", currentColour); 
    // Get the RGB values of the target colour
    const rgbCurrentArray = currentColour.split(",");
    const currentRed = parseInt(rgbCurrentArray[0]);
    const currentGreen = parseInt(rgbCurrentArray[1]);
    const currentBlue = parseInt(rgbCurrentArray[2]); 

    // console.log(currentRed, currentGreen, currentBlue);

    const targetColour = targetBox;
    // console.log("Target:", targetColour);
    // Convert the RGB values to integers
    const rgbTargetArray = targetColour.match(/\d+/g);
    const targetRed = parseInt(rgbTargetArray[0]);
    const targetGreen = parseInt(rgbTargetArray[1]);
    const targetBlue = parseInt(rgbTargetArray[2]);

    // console.log(targetRed, targetGreen, targetBlue);

    const redDiff = Math.abs(currentRed - targetRed);
    const greenDiff = Math.abs(currentGreen - targetGreen);
    const blueDiff = Math.abs(currentBlue - targetBlue);
    
    const tolerance = 25;

    // Check if all color components are within the tolerance
    const match = redDiff <= tolerance && greenDiff <= tolerance && blueDiff <= tolerance;

    if (match) {
        console.log("Colours match!");
        random_colour();
        score = score + 1;
        document.getElementById("score").innerHTML = score;
    } else {
        console.log("Colours do not match.");
    }
    
}
//  checkColourMatch()



function timer (){
var timeleft = 59;

 
var downloadTimer = setInterval(function(){
    length = timeleft.toString().length;
    console.log(length); 
    timeleft -= 1;
    if (length > 1 ){
        document.getElementById("timer").innerHTML = "00:"+timeleft;
    } else {
        document.getElementById("timer").innerHTML = "00:0"+timeleft;
    }
    if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Time's up!";
    document.getElementById("reset").style.visibility = "visible";
    } else {
        checkColourMatch()
    }
    
}, 1000);
}
// if (document.getElementById("timer") == "00:00"){
//     document.getElementById("timer").innerHTML = "Time's up!";
// }else if (document.getElementById("timer").innerHTML !== "00:00"){
//     setInterval(checkColourMatch, 1000);
// }
window.onload = document.getElementById("sliders").style.visibility = "hidden";
function startGame() {
    timer();
    random_colour()
    random_value()
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("sliders").style.visibility = "visible";
}
function resetGame() {
    timer();
    random_colour();
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("sliders").style.visibility = "visible";
}
