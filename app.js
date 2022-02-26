
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
        document.querySelectorAll(".header, .header-text, .logo-img").forEach(e => {
         e.classList.add("active")
       })
       }else {
        IntersectingEntryBannerO = false
       }
     }if (entry.target.className == "hero" && IntersectingEntryBannerO == false) {
       console.log("thats a hero") 
       document.querySelectorAll(".header, .header-text, .logo-img").forEach(e => {
        e.classList.remove("active")
       
      })
    }
    // else if (entry.isIntersecting ==false && ) {
     
      
    //}
    })
  }, options)
  activatorSec.observe(section);
  activatorSec.observe(hero);
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