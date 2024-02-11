function goPlay() { 
    window.open("play.html"); 
    window.close(window.self);
}
function goStats() { 
    window.open("stats.html"); 
    window.close(window.self);
}
function goCreds() { 
    window.open("creds.html"); 
    window.close(window.self);
}
function goIndex() { 
    window.open("index.html"); 
    window.close(window.self);
}
function goThree() {
    let user1 = document.getElementById("user1");
    let user2 = document.getElementById("user1");
    let user3 = document.getElementById("user1");
    let user4 = document.getElementById("user1");
    window.open("playThree.html"); 
    window.close(window.self);
}
function goFour() {
    let user1 = document.getElementById("user1");
    let user2 = document.getElementById("user1");
    let user3 = document.getElementById("user1");
    let user4 = document.getElementById("user1");
    window.open("playFour.html"); 
    window.close(window.self);
}
function goFive() {
    let user1 = document.getElementById("user1");
    let user2 = document.getElementById("user1");
    let user3 = document.getElementById("user1");
    let user4 = document.getElementById("user1");
    window.open("playFive.html"); 
    window.close(window.self);
}
function genNums() {
    return Math.floor(Math.random() * 50) + 1;
}
function fillBoxes() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = genNums()
    }
}
let turn = 0
function nextTurn() {
    const numElement = document.querySelector('#ultNum');
    numElement.textContent = genNums()
    const turnElement = document.querySelector('#turnCount');
    let turn = turnElement.textContent
    turn ++
    turnElement.textContent = turn
    if(turn >= 25){
        window.alert("Juego terminado!")
        document.querySelector('#btnTurn').disabled = true;
    }
}
function endGame(){

}