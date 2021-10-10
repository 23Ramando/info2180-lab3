document.addEventListener('DOMContentLoaded', ()  => {
    var gameBoard = document.getElementById("board").children;
    var squares=document.querySelectorAll("board");
    var status=document.getElementById("status");
    var button=document.getElementsByClassName("btn")[0];
    
    var clicked;
    var i;
   
  
    
  
    for(i=0;i<gameBoard.length;i++){
      gameBoard[i].setAttribute("class","square");
      gameBoard[i].addEventListener('click',clicks,{once:true});
      gameBoard[i].addEventListener('mouseenter',hoverStyle);
      gameBoard[i].addEventListener('mouseleave',hoverRevert);
      gameBoard[i].addEventListener('click',checkWinner);
       
    }

    function hoverStyle(hoverEvent){
        hoverEvent.target.classList.add('hover');
        } 
    function hoverRevert(hoverEvent){
        hoverEvent.target.classList.remove('hover');
      }
    
    let turn=true;
    const X= "X";
    const O="O";

    function clicks(clickEvent) {
    var plays= Array.from(squares);
    var index = plays.indexOf(clickEvent.target)
    console.log(plays);
     
      if(turn==true || clicked==O ){
        clickEvent.target.innerHTML= X;
        clickEvent.target.classList.add("X");
        clicked= X;
        turn=false;
      }
      else if(clicked==X || turn==false){
        clickEvent.target.innerHTML=O;
        clickEvent.target.classList.add("O");
        clicked=O;
        turn=true;
      }  
      
      
    }
    //STORE WINNING POSITIONS  
    const winPossibility=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8],];
// CHECK TO SEE IF X OR O IS IN A WINNING POSITION
    function checkWinner(){
      for (i=0; i<gameBoard.length;i++){
        if(gameBoard[winPossibility[i][0]].textContent=="X" && gameBoard[winPossibility[i][1]].textContent=="X" && gameBoard[winPossibility[i][2]].textContent=="X"){
          status.innerHTML="Congratulations! X is the Winner!";
          status.setAttribute('class','you-won');
        }
        else if(gameBoard[winPossibility[i][0]].textContent=="O" && gameBoard[winPossibility[i][1]].textContent=="O" && gameBoard[winPossibility[i][2]].textContent=="O"){
          status.innerHTML="Congratulations! O is the Winner!";
          status.setAttribute('class','you-won');
        }
      }
    }
   
    function restart(){
      for(i=0;i<gameBoard.length;i++){
      gameBoard[i].innerHTML = '';
      gameBoard[i].classList.remove("O");
      gameBoard[i].classList.remove("X");
      
status.classList.remove("you-won");
      status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
      
       } 
    }
    button.addEventListener('click',restart);
  })