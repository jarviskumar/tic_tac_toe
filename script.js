     

let b1btn = document.getElementById("b1");
let b2btn = document.getElementById("b2");
let b3btn = document.getElementById("b3");
let b4btn = document.getElementById("b4");
let b5btn = document.getElementById("b5");
let b6btn = document.getElementById("b6");
let b7btn = document.getElementById("b7");
let b8btn = document.getElementById("b8");
let b9btn = document.getElementById("b9");
let print = document.getElementById("print")
//Checking Player X won or not and after that disable all cells
function myFunc(){
  let b1,b2,b3,b4,b5,b6,b7,b8,b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;
if((b1=='x' || b1 =='X') && (b2=="x"||b2=="X") && (b3 == "x"|| b3 =="X")){
  print.textContent = "Player1 Won"
  b4btn.disabled = true;
  b5btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b1btn.style.color = "red";
  b2btn.style.color = "red";
  b3btn.style.color = "red";
  
}
else if((b1=='x' || b1 =='X') && (b4=="x"||b4=="X") && (b7 == "x"|| b7 =="X")){
  print.textContent = "Player1 Won"
  b2btn.disabled = true;
  b3btn.disabled = true;
  b5btn.disabled = true;
  b6btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b1btn.style.color = "red";
  b4btn.style.color = "red";
  b7btn.style.color = "red";
}
else if((b1=='x' || b1 =='X') && (b5=="x"||b5=="X") && (b9 == "x"|| b9 =="X")){
  print.textContent = "Player1 Won"
  b2btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b1btn.style.color = "red";
  b5btn.style.color = "red";
  b9btn.style.color = "red";
}
else if((b2=='x' || b2 =='X') && (b5=="x"||b5=="X") && (b8 == "x"|| b8=="X")){
  print.textContent = "Player1 Won"
  b1btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b9btn.disabled = true;
  b2btn.style.color = "red";
  b5btn.style.color = "red";
  b8btn.style.color = "red";
}
else if((b3=='x' || b3 =='X') && (b5=="x"||b5=="X") && (b7 == "x"|| b7=="X")){
  print.textContent = "Player1 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b3btn.style.color = "red";
  b5btn.style.color = "red";
  b7btn.style.color = "red";
}
else if((b4=='x' || b4 =='X') && (b5=="x"||b5=="X") && (b6 == "x"|| b6=="X")){
  print.textContent = "Player1 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b3btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b4btn.style.color = "red";
  b5btn.style.color = "red";
  b6btn.style.color = "red";
}
else if((b7=='x' || b7 =='X') && (b8=="x"||b8=="X") && (b9 == "x"|| b9=="X")){
  print.textContent = "Player1 Won"
  b1btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b9btn.disabled = true;
  b7btn.style.color = "red";
  b8btn.style.color = "red";
  b9btn.style.color = "red";
}
else if((b3=='x' || b3 =='X') && (b6=="x"||b6=="X") && (b9 == "x"|| b9=="X")){
  print.textContent = "Player1 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b4btn.disabled = true;
  b5btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b3btn.style.color = "red";
  b6btn.style.color = "red";
  b9btn.style.color = "red";
}

//Checking for Player1 Finished
//Now check for Player2

else if((b1=='o' || b1 =='O') && (b2=="o"||b2=="O") && (b3 == "o"|| b3 =="O")){
  print.textContent = "Player2 Won"
  b4btn.disabled = true;
  b5btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b1btn.style.color = "red";
  b2btn.style.color = "red";
  b3btn.style.color = "red";
  
}
else if((b1=='o' || b1 =='O') && (b4=="o"||b4=="O") && (b7 == "o"|| b7 =="O")){
  print.textContent = "Player2 Won"
  b2btn.disabled = true;
  b3btn.disabled = true;
  b5btn.disabled = true;
  b6btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b1btn.style.color = "red";
  b4btn.style.color = "red";
  b7btn.style.color = "red";
}
else if((b1=='o' || b1 =='O') && (b5=="o"||b5=="O") && (b9 == "o"|| b9 =="O")){
  print.textContent = "Player2 Won"
  b2btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b1btn.style.color = "red";
  b5btn.style.color = "red";
  b9btn.style.color = "red";
}
else if((b2=='o' || b2 =='O') && (b5=="o"||b5=="O") && (b8 == "o"|| b8=="O")){
  print.textContent = "Player2 Won"
  b1btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b9btn.disabled = true;
  b2btn.style.color = "red";
  b5btn.style.color = "red";
  b8btn.style.color = "red";
}
else if((b3=='o' || b3 =='O') && (b5=="o"||b5=="O") && (b7 == "o"|| b7=="O")){
  print.textContent = "Playerw2 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b3btn.style.color = "red";
  b5btn.style.color = "red";
  b7btn.style.color = "red";
}
else if((b4=='o' || b4 =='O') && (b5=="o"||b5=="O") && (b6 == "o"|| b6=="O")){
  print.textContent = "Player2 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b3btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b9btn.disabled = true;
  b4btn.style.color = "red";
  b5btn.style.color = "red";
  b6btn.style.color = "red";
}
else if((b7=='o' || b7 =='O') && (b8=="o"||b8=="O") && (b9 == "o"|| b9=="O")){
  print.textContent = "Player2 Won"
  b1btn.disabled = true;
  b3btn.disabled = true;
  b4btn.disabled = true;
  b6btn.disabled = true;
  b7btn.disabled = true;
  b9btn.disabled = true;
  b7btn.style.color = "red";
  b8btn.style.color = "red";
  b9btn.style.color = "red";
}
else if((b3=='o' || b3 =='O') && (b6=="o"||b6=="O") && (b9 == "o"|| b9=="O")){
  print.textContent = "Player2 Won"
  b1btn.disabled = true;
  b2btn.disabled = true;
  b4btn.disabled = true;
  b5btn.disabled = true;
  b7btn.disabled = true;
  b8btn.disabled = true;
  b3btn.style.color = "red";
  b6btn.style.color = "red";
  b9btn.style.color = "red";
}

//check of player2 Finished
//check for tie match
else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
       
            print.textContent = "DRAW"; 
      let cell = document.querySelectorAll(".cell")
      cell[0].style.color ="#bcbcbc"
      cell[1].style.color ="#bcbcbc"
      cell[2].style.color ="#bcbcbc"
      cell[3].style.color ="#bcbcbc"
      cell[4].style.color ="#bcbcbc"
      cell[5].style.color ="#bcbcbc"
      cell[6].style.color ="#bcbcbc"
      cell[7].style.color ="#bcbcbc"
      cell[8].style.color ="#bcbcbc"
    } 
    else { 
  
        // Here, Printing Result 
        if (flag == 1) { 
            print.textContent = "Player X Turn"; 
        } 
        else { 
            print.textContent = "Player 0 Turn"; 
        } 
    } 

}

//function to reset geme

function reset(){
  location.reload();
  b1=b2=b3=b4=b5=b6=b7=b8=b9= '';
}

//check whose turn
let flag = 1;

function myFunc1(){
  if(flag == 1){
    b1btn.value = "X";
    b1btn.disabled = true;
    flag = 0
  }
  else{
    b1btn.value = "O";
    b1btn.disabled = true;
    flag = 1
  }
}

function myFunc2(){
  if(flag == 1){
    b2btn.value = "X";
    b2btn.disabled = true;
    flag = 0
  }
  else{
    b2btn.value = "O";
    b2btn.disabled = true;
    flag = 1;
  }
}
function myFunc3(){
  if(flag == 1){
    b3btn.value = "X";
    b3btn.disabled = true;
    flag = 0
  }
  else{
    b3btn.value = "O";
    b3btn.disabled = true;
    flag = 1;
  }
}
function myFunc4(){
  if(flag == 1){
    b4btn.value = "X";
    b4btn.disabled = true;
    flag = 0
  }
  else{
    b4btn.value = "O";
    b4btn.disabled = true;
    flag = 1;
  }
}
function myFunc5(){
  if(flag == 1){
    b5btn.value = "X";
    b5btn.disabled = true;
    flag = 0
  }
  else{
    b5btn.value = "O";
    b5btn.disabled = true;
    flag = 1;
  }
}
function myFunc6(){
  if(flag == 1){
    b6btn.value = "X";
    b6btn.disabled = true;
    flag = 0
  }
  else{
    b6btn.value = "O";
    b6btn.disabled = true;
    flag = 1;
  }
}
function myFunc7(){
  if(flag == 1){
    b7btn.value = "X";
    b7btn.disabled = true;
    flag = 0
  }
  else{
    b7btn.value = "O";
    b7btn.disabled = true;
    flag = 1;
  }
}
function myFunc8(){
  if(flag == 1){
    b8btn.value = "X";
    b8btn.disabled = true;
    flag = 0
  }
  else{
    b8btn.value = "O";
    b8btn.disabled = true;
    flag = 1;
  }
}
function myFunc9(){
  if(flag == 1){
    b9btn.value = "X";
    b9btn.disabled = true;
    flag = 0
  }
  else{
    b9btn.value = "O";
    b9btn.disabled = true;
    flag = 1;
  }
}