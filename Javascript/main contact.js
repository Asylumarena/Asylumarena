// hide url
window.history.replaceState('','','/Asylumarena/');

//menu toggle
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu') 
const body = document.querySelector('body') 

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')

}
menu.addEventListener('click',mobileMenu)

// Start loading 

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
     //spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});


// End loading 

// pages 
const pages = document.querySelectorAll('.navbar__menu a')


var manualPages = function(manual){

    pages.forEach((page) => {
         page.classList.remove('act__ive')
         
     })
     pages[manual].classList.add('act__ive')
  
 }


 pages.forEach((page, i) => {
    page.addEventListener("click",() => {
        manualPages(i)


   })
}) 


// contactus facebook link 

let facebookLink = document.querySelectorAll('#facebook')


facebookLink.forEach(e => e.addEventListener('click',() =>{
        window.open('https://www.facebook.com/Asylum-Arena-106713905301745', '_blank')
    })
)
// contactus youtube link 
let youtubeLink = document.querySelectorAll('#youtube')


youtubeLink.forEach(e => e.addEventListener('click',() =>{
        window.open('https://www.youtube.com/channel/UCPJEGLK9E6VGTKMBsAcc6YQ', '_blank')
    })
)
// contactus instagram link 
let instagramLink = document.querySelectorAll('#instagram')


instagramLink.forEach(e => e.addEventListener('click',() =>{
        window.open('https://www.instagram.com/asylumarena/?hl=en', '_blank')
    })
)



gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-landing", {
    duration: 1,
    opacity: -1,
    y: -100,
    stagger:0.5,
    
})


//stats animation animate-stats

gsap.from(".animate-stats", {
    scrollTrigger: {
        trigger:'.animate-stats',
        toggleActions:"restart none none none"
}, 
    duration: 1.5,
    opacity: 0,
    y: -350,
    stagger:0.2,
    delay: 0.5,
    ease:"back",
})
