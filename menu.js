const allBtns = document.querySelectorAll("#buy-btn");
const costPriceArr=[240,250,200,280,300,190,180,270,240];
const pizzaNames =["Margherita","Farm House","Peppy Panner","Cheese n Corn","Panner Makhani","Veggie Paradise","Delux Veggie","Indi Tandoori Panner","Fresh Veggie"];


const theText = document.querySelector("#theText");

for(let i=0;i<allBtns.length;i++)
{
   allBtns[i].addEventListener('click',function(){
    //    console.log(costPriceArr[i]);
    //    console.log(pizzaNames[i]);
     localStorage.setItem("cost",costPriceArr[i]);
     localStorage.setItem("name",pizzaNames[i])
     window.location.href="cart.html";
       
   })
}






