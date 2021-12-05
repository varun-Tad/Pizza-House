const submitBtn = document.querySelector("#submit-btn");
const userName = document.querySelector(".user-name");
const password = document.querySelector(".password");

const noUserPwd = document.querySelector("#noUser");
const signUpLink = document.querySelector("#sign-up");
const signUp = document.querySelector('#sign-up');

const pizzaFacts = document.querySelector("#pizza-facts");
pizzaFacts.innerHTML=`<h2>Fun Pizza Fact ! </h2>
<p>SATURDAY NIGHT IS THE MOST POPULAR NIGHT TO EAT PIZZA</p>`

const pizzaFactsArr =["THE AVERAGE PIZZERIA USES ROUGHLY 55 PIZZA BOXES PER DAY.",
"PIZZA ACCOUNTS FOR MORE THAN 10 PERCENT OF ALL FOOD SERVICE SALES.",
"ABOUT 3 BILLION PIZZAS ARE SOLD WORLDWIDE EACH YEAR.",
"KIDS AGES 3 TO 11 PREFER PIZZA OVER ALL OTHER FOOD GROUPS FOR LUNCH AND DINNER.",
"WOMEN ARE TWICE AS LIKELY AS MEN TO ORDER VEGETABLES ON THEIR PIZZA.",
"THERE’S A PIZZA MUSEUM IN PHILADELPHIA CALLED PIZZA BRAIN THAT IS HOME TO THE WORLD’S LARGEST COLLECTION OF PIZZA MEMORABILIA.",
"THE WORLD’S FASTEST PIZZA MAKER CAN MAKE 14 PIZZAS IN 2 MINUTES AND 35 SECONDS."];



// console.log(randomNumber);



submitBtn.addEventListener('click',function(e){
  e.preventDefault();

  if(userName.value === "" || password.value === "")
   {
      password.style.border = "5px solid red";
      userName.style.border ="5px solid red";
   }
   else{
       location.href="menu.html";
   }

})


signUpLink.addEventListener('click',function(e){
    e.preventDefault();

})

signUp.addEventListener('click',function(){
    location.href="signup.html";
})


setInterval(function(){
    let randomNumber = Math.trunc(Math.random()* 7);
    pizzaFacts.innerHTML = `<h2> Fun Pizza Fact ! </h2>
    <p>${pizzaFactsArr[randomNumber]}</p>`;
    
 
},5000)









