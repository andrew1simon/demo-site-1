
const options = {
  threshold: 0.6
}
let section = document.querySelector(".banner-overlay")
let hero = document.querySelector(".hero")
let IntersectingEntryBannerO = ""
  const activatorSec = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
     console.log(entry)
     if (entry.target.className == "banner-overlay" ) {
      if (entry.isIntersecting) {
        IntersectingEntryBannerO = entry.isIntersecting
        document.querySelectorAll(".header, .header-text, .logo-img , .menu-open-btn").forEach(e => {
         e.classList.add("active")
       })
       }else {
        IntersectingEntryBannerO = false
       }
     }if (entry.target.className == "hero" && IntersectingEntryBannerO == false) {
       console.log("thats a hero") 
       document.querySelectorAll(".header, .header-text, .logo-img ,.menu-open-btn").forEach(e => {
        e.classList.remove("active")
       
      })
    }
    // else if (entry.isIntersecting ==false && ) {
     
      
    //}
    })
  }, options)
  activatorSec.observe(section);
  activatorSec.observe(hero);
  
  // mobile menu 

  const closebtn = document.querySelector(".mobile-menu-close-btn");
  const mobileMenuCont =   document.querySelector(".mobile-menu-upper-cont")
  const openBtn = document.querySelector(".menu-open-btn")
closebtn.addEventListener("click", e=>{
  mobileMenuCont.classList.add("animate__animated" , "animate__fadeOutDown")
  setTimeout(removeActive , 1000)
})
openBtn.addEventListener("click" , e=>{
  mobileMenuCont.classList.add("active" , "animate__animated" , "animate__fadeInUp")
})

  function removeActive () {
    mobileMenuCont.classList.remove("active","animate__animated" , "animate__fadeOutDown");
  }
  
  /* 
  //const activatorSec = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
     console.log(entry)
     if (entry.isIntersecting) {
     document.querySelectorAll(".header, .header-text, .logo-img").forEach(e => {
      e.classList.add("active")
    })
    } //else if (entry.isIntersecting ==false && ) {
     
      
    //}
    })
//  }, options)*/