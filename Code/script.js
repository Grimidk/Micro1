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
function defaultNames() {
    let player1 = document.querySelector('#user1');
    let player2 = document.querySelector('#user2');
    let player3 = document.querySelector('#user3');
    let player4 = document.querySelector('#user4');
    if(player1.value == "") {
        player1.value = "Jugador 1"
    }
    if(player2.value == "") {
        player2.value = "Jugador 2"
    }
    if(player3.value == "") {
        player3.value = "Jugador 3"
    }
    if(player4.value == "") {
        player4.value = "Jugador 4"
    }
}
function getNames() {
    defaultNames()
    let value1 = document.querySelector('#user1').value;
    let value2 = document.querySelector('#user2').value;
    let value3 = document.querySelector('#user3').value;
    let value4 = document.querySelector('#user4').value;
    localStorage.setItem("user1", value1)
    localStorage.setItem("user2", value2)
    localStorage.setItem("user3", value3)
    localStorage.setItem("user4", value4)
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
        player1points.setAttribute("style", "display: grid")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none")
        player2points.setAttribute("style", "display: none")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player3points.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
        player4points.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player2"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player1points.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: grid")
        player2grid.setAttribute("style", "display: grid")
        player2points.setAttribute("style", "display: grid")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player3points.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
        player4points.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player3"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player1points.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none") 
        player2points.setAttribute("style", "display: none")
        player3.setAttribute("style", "display: grid")
        player3grid.setAttribute("style", "display: grid")
        player3points.setAttribute("style", "display: grid")
        player4.setAttribute("style", "display: none")
        player4grid.setAttribute("style", "display: none")
        player4points.setAttribute("style", "display: none")
    } else if (activePlayer.value == "player4"){
        player1.setAttribute("style", "display: none")
        player1grid.setAttribute("style", "display: none")
        player1points.setAttribute("style", "display: none")
        player2.setAttribute("style", "display: none")
        player2grid.setAttribute("style", "display: none")
        player2points.setAttribute("style", "display: none")
        player3.setAttribute("style", "display: none")
        player3grid.setAttribute("style", "display: none")
        player3points.setAttribute("style", "display: none")
        player4.setAttribute("style", "display: grid")
        player4grid.setAttribute("style", "display: grid")
        player4points.setAttribute("style", "display: grid")
    } else {
        player1.setAttribute("style", "display: grid")
        player1grid.setAttribute("style", "display: grid")
        player1points.setAttribute("style", "display: grid")
        player2.setAttribute("style", "display: grid")
        player2grid.setAttribute("style", "display: grid")
        player2points.setAttribute("style", "display: grid")
        player3.setAttribute("style", "display: grid")
        player3grid.setAttribute("style", "display: grid")
        player3points.setAttribute("style", "display: grid")
        player4.setAttribute("style", "display: grid")
        player4grid.setAttribute("style", "display: grid")
        player4points.setAttribute("style", "display: grid")
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
function nextTurn(n) {
    const numElement = document.querySelector('#ultNum');
    let rando = genNums();
    numElement.textContent = rando;
    checkBox(rando);
    let points1 = checkScore(n,1,rando);
    const player1points = document.querySelector('#player1points');
    player1points.textContent = points1;
    // points2 = checkScore(n,2)
    // const player2points = document.querySelector('#player2points');
    // player2points.textContent = points2;
    // points3 = checkScore(n,3)
    // const player3points = document.querySelector('#player3points');
    // player3points.textContent = points3;
    // points4 = checkScore(n,4)
    // const player4points = document.querySelector('#player4points');
    // player4points.textContent = points4;
    const turnElement = document.querySelector('#turnCount');
    let turn = turnElement.textContent;
    turn ++;
    turnElement.textContent = turn;
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
            box.setAttribute("style", "background-color: orange")
        }
    }
}
function checkScore(n,player,num){
    playerGrid = "#player"+ player + "gridItem";
    const items = document.querySelectorAll(playerGrid);
        for (let i = 0; i < items.length; i++) {
            let box = items[i]
            if(box.value == num){
            points++
        }
        return points
    }
}
// function endGame(){
    
// }