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
    getNames()
    window.open("playThree.html"); 
    window.close(window.self);
}
function goFour() {
    getNames()
    window.open("playFour.html"); 
    window.close(window.self);
}
function goFive() {
    getNames()
    window.open("playFive.html"); 
    window.close(window.self);
}
function getNames() {
    let user1 = document.querySelector('#user1').value;
    let user2 = document.querySelector('#user2').value;
    let user3 = document.querySelector('#user3').value;
    let user4 = document.querySelector('#user4').value;
    localStorage.setItem("user1", user1)
    localStorage.setItem("user2", user2)
    localStorage.setItem("user3", user3)
    localStorage.setItem("user4", user4)
}
function setNames() { 
    player1.textContent = localStorage.getItem("user1")
    player2.textContent = localStorage.getItem("user2")
    player3.textContent = localStorage.getItem("user3")
    player4.textContent = localStorage.getItem("user4")
    activePlayer1.textContent = localStorage.getItem("user1")
    activePlayer2.textContent = localStorage.getItem("user2")
    activePlayer3.textContent = localStorage.getItem("user3")
    activePlayer4.textContent = localStorage.getItem("user4")
}
activePlayer.addEventListener("change", hidePlayers);
function hidePlayers() {
    if (activePlayer.value == "player1"){
        player1.setAttribute("style", "display: grid")
        player1grid.setAttribute("style", "display: grid")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player2"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: grid")
        player2grid.setAttribute("style", "display: grid")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player3"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none") 
        player3.setAttribute("style", "display: grid")
        player3grid.setAttribute("style", "display: grid")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player4"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: grid")
        player4grid.setAttribute("style", "display: grid")
    } else {
        player1.setAttribute("style", "display: grid")
        player1grid.setAttribute("style", "display: grid")
        player2.setAttribute("style", "display: grid")
        player2grid.setAttribute("style", "display: grid")
        player3.setAttribute("style", "display: grid")
        player3grid.setAttribute("style", "display: grid")
        player4.setAttribute("style", "display: grid")
        player4grid.setAttribute("style", "display: grid")
    }
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
    let rando = genNums()
    numElement.textContent = rando
    checkBox(rando)
    //checkScore()
    const turnElement = document.querySelector('#turnCount');
    let turn = turnElement.textContent
    turn ++
    turnElement.textContent = turn
    if(turn >= 25){
        window.alert("Juego terminado!")
        document.querySelector('#btnTurn').disabled = true;
    }
}
function checkBox(num) {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i]
        if(box.textContent == num){
            box.setAttribute("style", "background-color: green")
        }
    }
}
function checkScore(){
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i]
        if(box.getAttribute("style", "background-color") == green){
            box.setAttribute("style", "background-color: green")
        }
    }
}
function endGame(){

}