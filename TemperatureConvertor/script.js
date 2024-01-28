const textbox=document.getElementById("textbox");
const tocelsius=document.getElementById("tocelsius");
const tofahrenheit=document.getElementById("tofahrenheit");
const result=document.getElementById("result");
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F";
    }
    else if(tocelsius.checked ){
        temp = Number(textbox.value);
        temp = (temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°C";
    }
    else{
        result.textContent="select a unit";
    }
}



