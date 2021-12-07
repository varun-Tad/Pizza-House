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



// Event delegation for nav links


document.querySelector(".nav-links").addEventListener('click',function(e){
   // e.preventDefault();

   if(e.target.classList.contains("nav-link"))
   {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behaviour:"smooth"});
   }
})


