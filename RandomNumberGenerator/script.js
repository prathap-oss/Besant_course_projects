
let min=0
let max=10000000000



const GenerateNumber=document.getElementById("GenerateNumber")
const reset =document.getElementById("reset")
 

GenerateNumber.onclick=function(){
    let randomnumber=Math.floor(Math.random()*max)+min
    
    document.getElementById("randomnumber").textContent=randomnumber;
}

reset.onclick=function(){
    let number=0
    document.getElementById("randomnumber").textContent=number;
    
}