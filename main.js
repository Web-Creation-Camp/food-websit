// header section 
const menuOpenButton = document.querySelector(".menu");
const menuCloseButton = document.querySelector(".close");
const navLinks = document.querySelectorAll(".home-mobile");
// open meni 
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu")
});
// close menu 
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());
// click link  
navLinks.forEach(link => {
  link.addEventListener("click",() => menuOpenButton.click());
});


// header section 


// home swction anomation

function revealFunction(){
  window.sr = ScrollReveal({

   duration:1350,
   distance:'200px',


  });

//   note
  // sr.reveal('.watches',{scale:1.2, interval:300, reset:true});

  // sr.reveal('.contact-text',{origin:'bottom', rotate:{x:1000,z:-1000},reset:false});

  // sr.reveal('.contact-input',{origin:'bottom', rotate:{x:1000,z:1000}, reset:false});

// note


  sr.reveal('.foods',{origin:'bottom',interval:650,distance:'80px', reset:false});
  // sr.reveal('.contact-text',{origin:'top', reset:false, interval:0 , scale:0.9, distance:'150px' });
  // sr.reveal('.contact-input',{origin:'bottom', reset:false, interval:0 , scale:0.9, distance:'150px'});
};

window.addEventListener('load',()=>{
  revealFunction();
})


