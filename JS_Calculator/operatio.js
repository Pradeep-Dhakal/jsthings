let result=document.getElementById('result');
buttons=document.querySelectorAll('button');
let screenValue="";

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is:'+buttonText)
        if(buttonText=='x'){
            buttonText='*';
            result.value +=buttonsText;
        }
        else if(buttonsText=='='){

        }


    })
}