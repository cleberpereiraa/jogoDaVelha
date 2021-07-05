document.addEventListener('DOMContentLoaded',()=> {


    let squares = document.querySelectorAll(".square");

    let player1 = document.getElementById("scoreP1");
    let player2 = document.getElementById("scoreP2");

    let btReset = document.getElementById("bt-reset");
    btReset.addEventListener("click", resetGame);

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    
    let square = event.target;
    let postion = square.id;

   if(handleMove(postion)){
        updateScore()
       setTimeout(()=>{

            if(playerTime == 0){
                alert("O jogo acabou -- O vencedor foi o jogador  0" )
            }else{
                alert("O jogo acabou -- O vencedor foi o jogador X" )
            }

            
       }, 10)   //empate
    }else if(chequeDraw()){
        setTimeout(()=>{
            alert("Empatou!")
        }, 10)
    }

    updateSquare(postion);

}
function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion]
    square.innerHTML = `<div class='${symbol}'></div>`
}
//resete
function restart(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let postion = square.id;
        let symbol = " ";
        
        square.innerHTML = `<div class='${symbol}'></div>`
    });
}
//recorde
function updateScore(){
    player1.innerHTML = `<span class="icon1">&#x26AA = </span>
    <span id="scoreP1">${scores[0].toString()}</span>`;
    player2.innerHTML = `<span class="icon2">&#x2716 = </span>
    <span id="scoreP2">${scores[1].toString()}</span>`;

}


