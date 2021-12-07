
// Event delegation for nav links


document.querySelector('.nav-links').addEventListener('click',function(e){


  if(e.target.classList.contains('nav-link'))
  {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behaviour:"smooth"})
  }

})