let menuIcon = document.getElementById("menu-icon");
let navlinks = document.getElementById("navlinks");
menuIcon.addEventListener("click", function () {
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    }
    else {
        navlinks.style.display = "block";
    }
});

let closeMenu = document.querySelectorAll(".navlinks a");
closeMenu.forEach(close =>{
    close.addEventListener('click', ()=>{
        close.classList.add("active");
        
        if(matchMedia("(max-width: 500px)").matches){
            navlinks.style.display = 'none' //Code to execute if the viewport is 500px or smaller
        }
        else{
            navlinks.style.display = 'block'
        }
    });
});

  
 var typed = new Typed('#element', {
      strings: ['Software Enginer.', 'Front End Developer.', 'Seo Expert'],
      typeSpeed: 150,
      loop:true,
 });
 








