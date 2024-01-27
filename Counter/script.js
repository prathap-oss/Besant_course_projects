const decreaseBtn = document.getElementById("decreaseBtn")
const reserBtn= document.getElementById("reserBtn")
const increaseBtn=document.getElementById("increaseBtn")
const countlabel=document.getElementById("countlabel")
let count=0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent=count
}
decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;

}


reserBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;

}





