
let screen=document.querySelector('.screen');
screen.textContent='';

//console.log(screen.textContent.split(''));



function btnClicked(e){
    if(e =='='){
      let res=eval(screen.textContent);
      screen.textContent=res;

    }else{
      screen.textContent=screen.textContent+e;
    }
}


function btnClear(e){
    screen.textContent='';
}