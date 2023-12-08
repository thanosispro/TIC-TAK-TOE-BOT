let winboard=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
console.log(winboard[7][2]);
var music=document.getElementById("music");
let turn=document.getElementById("turn").innerHTML;
let i,a,b,c,j,k,m,gameboard=[],count=1,test=0,random,st=1,lol=1,name;
for(i=0;i<=8;i++){
    gameboard[i]=document.getElementsByClassName("cell")[i];
}

function startgame(){
    
    if(document.getElementById("input").value===""){
        alert("please fill input filed");
    }
    else{
st=0;
document.getElementById("turn").innerHTML=`${document.getElementById("input").value} VS Parlee Khadka`;
name=document.getAnimations("input").value;    
}
}
function restartgame(){
    lol++;
    count=1;
    
document.getElementById("checkwin").innerHTML="";
document.getElementById("restart").innerHTML="";
for(i=0;i<=8;i++){
    gameboard[i].innerHTML="";
}
if(lol % 2==0){
setTimeout(function(){gameboard[0].innerHTML="O";},200); }
}





function checkwin(){
    for(i=0;i<=7;i++){
        
if(gameboard[winboard[i][0]].innerHTML==="O" && gameboard[winboard[i][1]].innerHTML==="O" && gameboard[winboard[i][2]].innerHTML==="O" || gameboard[winboard[i][0]].innerHTML==="X" &&gameboard[winboard[i][1]].innerHTML==="X" &&gameboard[winboard[i][2]].innerHTML==="X"){
    if(gameboard[winboard[i][0]].innerHTML==="X"){
        document.getElementById("checkwin").innerHTML=`the winner is ${document.getElementById("input").value}`;}
    else{
        document.getElementById("checkwin").innerHTML=`the winner is Parlee Dai`;
    }

document.getElementById("restart").innerHTML=`<button onclick="restartgame()" id="btn">Restart</button>`;
document.getElementById("start").innerHTML="";
break;
}
else{
    a=gameboard[winboard[i][0]].innerHTML;
    b=gameboard[winboard[i][1]].innerHTML;
    c=gameboard[winboard[i][2]].innerHTML;

    console.log(a,b,c,i);
    if(i==7 && gameboard[0].innerHTML!=="" && gameboard[3].innerHTML!=="" &&  gameboard[1].innerHTML!=="" &&  gameboard[2].innerHTML!=="" && gameboard[4].innerHTML!=="" && gameboard[5].innerHTML!=="" && gameboard[6].innerHTML!=="" && gameboard[7].innerHTML!=="" && gameboard[8].innerHTML!=="" ){
       
        document.getElementById("checkwin").innerHTML=`The Game is Draw`;
    document.getElementById("restart").innerHTML=`<button onclick="restartgame()" id="btn">Restart</button>`;
    document.getElementById("start").innerHTML="";
    break;
}
}


    }
}
function defend(){
    
    test=0;
for(i=0;i<=7;i++){
  
            if(gameboard[winboard[i][0]].innerHTML==="X" && gameboard[winboard[i][1]].innerHTML==="X"&& gameboard[winboard[i][2]].innerHTML===""){
                console.log("if");
                console.log(i);
                gameboard[winboard[i][2]].innerHTML="O";
                test=1;
                break;
               
            }
            else if(gameboard[winboard[i][0]].innerHTML==="X" && gameboard[winboard[i][2]].innerHTML==="X"&& gameboard[winboard[i][1]].innerHTML===""){
                gameboard[winboard[i][1]].innerHTML="O";
                test=1;
                console.log("elseif");
                break;
            }
            else if(gameboard[winboard[i][1]].innerHTML==="X" && gameboard[winboard[i][2]].innerHTML==="X"&& gameboard[winboard[i][0]].innerHTML===""){
                gameboard[winboard[i][0]].innerHTML="O";
                test=1;
                console.log("elseif2");
                break;
            }
            else{
               
               console.log("1");
               if(i===7){
               for(j=0;j<=100;j++){
                random=Math.floor(Math.random() * 9);
                console.log(random);
                   if(gameboard[random].innerHTML===""){
                    console.log("else");
                    console.log(j);
                    console.log(random);
                    gameboard[random].innerHTML="O";
                    break;
                   }
               }
            }
        }
                
                
               
           
    }
    checkwin();
}


function cells(that){
   
    if(st==1){
        alert(" click on (start game)");}
        else{
    if(that.innerHTML ===""){
         music.play();
        that.innerHTML="X";
        if(count==1){

            count++;
            if(gameboard[4].innerHTML==="")
            {
                setTimeout(function(){
                    gameboard[4].innerHTML="O";
                },600);
                
        
                }   
                    else{
                        if(gameboard[0].innerHTML===""){
                        setTimeout(function(){
                            gameboard[0].innerHTML="O";
                        },600);}
                        else{
                           setTimeout(function(){defend();},600); 
                        }
                        
                    }
            }  
            else if(count==2){
                count=0;
                console.log('2');
                if(gameboard[0].innerHTML==="X" && gameboard[8].innerHTML==="X" || gameboard[2].innerHTML==="X" && gameboard[6].innerHTML==="X") {
                   console.log("nice");
                setTimeout(function(){gameboard[5].innerHTML="O";},600);
                    
                }
                else if(gameboard[4].innerHTML==="X" && gameboard[8].innerHTML==="X"){
                    setTimeout(function(){gameboard[2].innerHTML="O";},600);
                }
                else{
                    count=0;
                    console.log("1");
                    setTimeout(function(){defend();},600);
                    
                }
            }
            
            else{
        
                console.log(count);
        
                console.log(count);
                setTimeout(function(){ defend();},600);
               
            }
            
    }
   
  
    
}
}



