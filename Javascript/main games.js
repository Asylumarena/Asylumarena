// hide url
window.history.replaceState('','','/Asylumarena');

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


// portfolio games 

const games = document.querySelectorAll('.portfolio .imgs-container .box')
const shuffles = document.querySelectorAll('.portfolio .shuffle li')
const mobas = document.querySelectorAll('#moba')
const fpss = document.querySelectorAll('#fps')
const ow = document.querySelectorAll('#ow')
const brs = document.querySelectorAll('#br')
const ot = document.querySelectorAll('#ot')

currentFilter = 0



var manualFilter = function(filter){

    shuffles.forEach((shuffle) => {
    shuffle.classList.remove('active')
     })
     shuffles[filter].classList.add('active')}



     shuffles.forEach((shuffle, i) => {
        shuffle.addEventListener("click",() =>{
            manualFilter(i)
            currentFilter = i
            

        })
    }) 
    setInterval(() => {
if (currentFilter == 3) {
    games.forEach(e => e.classList.remove('filtred'));
    mobas.forEach(e => e.classList.add('filtred'));
    } else if (currentFilter == 0){
        games.forEach(e => e.classList.add('filtred'));
    } else if (currentFilter == 1) {
        games.forEach(e => e.classList.remove('filtred'));
        fpss.forEach(e => e.classList.add('filtred'));
        }else if (currentFilter == 2) {
            games.forEach(e => e.classList.remove('filtred'));
            brs.forEach(e => e.classList.add('filtred'));
            }else if (currentFilter == 4) {
                games.forEach(e => e.classList.remove('filtred'));
                ow.forEach(e => e.classList.add('filtred'));
                }else if (currentFilter == 5) {
                    games.forEach(e => e.classList.remove('filtred'));
                    ot.forEach(e => e.classList.add('filtred'));
                    }
},50)

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


////// Animations gsap ------------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-landing", {
    duration: 2,
    opacity: -1,
    y: -100,
    stagger:0.5,
    
})

//portfolio animation animate-portfolio

gsap.from(".animate-portfolio-right", {
    scrollTrigger: {
        trigger:'.animate-portfolio-right',
        toggleActions:"play none none none"
}, 
    duration: 0.3,
    opacity: 0,
    x: -110,
    stagger:0.2,
    
})
gsap.from(".animate-portfolio-left", {
    scrollTrigger: {
        trigger:'.animate-portfolio-left',
        toggleActions:"play none none none"
}, 
    duration: 0.3,
    opacity: 0,
    x: +110,
    stagger:0.2,
    ease:"linear",
    
})
