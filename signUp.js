const submitBtn = document.querySelector("#submit-btn");
const userName = document.querySelector(".user-name");
const password = document.querySelector(".password");

const noUserPwd = document.querySelector("#noUser");
const signUpLink = document.querySelector("#sign-up");
const signUp = document.querySelector('#sign-up');







// console.log(randomNumber);



submitBtn.addEventListener('click',function(e){
  e.preventDefault();

  if(userName.value === "" || password.value === "")
   {
      password.style.border = "5px solid red";
      userName.style.border ="5px solid red";
   }

})


signUpLink.addEventListener('click',function(e){
    e.preventDefault();

})

signUp.addEventListener('click',function(){
    location.href="signup.html";
})












