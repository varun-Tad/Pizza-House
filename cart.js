const theText = document.querySelector("#theText");

const shoppingCartTextContainer = document.querySelector("#shopping-cart-text-container");
const chosenItemsContainer = document.querySelector("#chosen-items-container");
const binImage  = document.querySelector("#bin");
const noOfItems = document.querySelector("#no-of-items");


let costOfPizza = localStorage.getItem("cost");
let nameOfPizza = localStorage.getItem("name")

if(costOfPizza &&  nameOfPizza)
{

    const html = `<h2>${nameOfPizza} <span id="rupee">₹${costOfPizza}</span><img id ="bin" src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-outline-color-tulpahn.png"/></h2>`;

    chosenItemsContainer.insertAdjacentHTML('afterbegin',html);
    noOfItems.innerText = ` 2 items`;
}



binImage.addEventListener('click',function(){
    chosenItemsContainer.style.visibility ="hidden";
})



// Event delegation for nav links


document.querySelector('.nav-links').addEventListener('click',function(e){


    if(e.target.classList.contains('nav-link'))
    {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behaviour:"smooth"})
    }
  
  })
