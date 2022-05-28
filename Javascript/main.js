// hide url
// window.history.replaceState('','','/Asylumarena/');


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


// Start loading 

 let spinnerWrapper = document.querySelector('.spinner-wrapper');

 window.addEventListener('load', function () {
      //spinnerWrapper.style.display = 'none';
     spinnerWrapper.parentElement.removeChild(spinnerWrapper);
 });


// End loading 

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

// disable scroll


// javascri for image slider manual navigat

var btns = document.querySelectorAll('.btn')
let currentSlide = 0;
var imageSlide = document.querySelector('.landing').style.backgroundImage = `url('./images/landing${currentSlide}.jpg')`
var arrowLeft = document.getElementById('arrow-left')
var arrowRight = document.getElementById('arrow-right')
var butn = document.querySelector('.bullets')



var manualNav = function(manual){

   btns.forEach((btn) => {
        btn.classList.remove('active')
        
    })
    btns[manual].classList.add('active')

 
}

btns.forEach((btn, i) => {
     btn.addEventListener("click",() => {
        manualNav(i)
        currentSlide = i
    })
}) 


setInterval(() => {
    
  if (currentSlide >= 2) {
    document.querySelector('.landing').style.backgroundImage = `url('./images/landing${2}.jpg')`
    currentSlide = 2
    btns.forEach((btn) => {
        btn.classList.remove('active')
        butn.children[2].classList.add('active')
    })

}else if (currentSlide <= 0) {
    document.querySelector('.landing').style.backgroundImage = `url('./images/landing${0}.jpg')`
    currentSlide = 0
    btns.forEach((btn) => {
        btn.classList.remove('active')
        butn.children[0].classList.add('active')
    })
}else if (currentSlide == 1) {
    document.querySelector('.landing').style.backgroundImage = `url('./images/landing${1}.jpg')`
    btns.forEach((btn) => {
        btn.classList.remove('active')
        butn.children[1].classList.add('active')
    })
}}, 20);

// arrows event 
arrowLeft.addEventListener('click',() => { 
 currentSlide = currentSlide -1
})


arrowRight.addEventListener('click',() => { 
    currentSlide = currentSlide +1
})

// portfolio games 

const games = document.querySelectorAll('.portfolio .imgs-container .box')
const shuffles = document.querySelectorAll('.portfolio .shuffle li')
const mobas = document.querySelectorAll('#moba')
const fpss = document.querySelectorAll('#fps')
const ow = document.querySelectorAll('#ow')
const brs = document.querySelectorAll('#br')

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
                }
},50)


// contactus facebook link 

let facebookLink = document.querySelectorAll('#facebook')
let googlemap = document.querySelectorAll('#location')

//contactus facebook
googlemap.forEach(e => e.addEventListener('click',() =>{
        window.open('https://www.google.com/maps/place/Asylum+Arena/@36.7203596,3.1836063,21z/data=!4m5!3m4!1s0x128e51eccce53cf1:0x25a8d56bf77c3979!8m2!3d36.7203419!4d3.1835865?hl=en-US', '_blank')
    })
)
//contactus googlemap
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

// matos animation 
const icons = document.querySelectorAll('.icon__img')
const text_h3 = document.querySelectorAll('.services .srv-box h3')


var manualHover = function(hover){

    text_h3.forEach((h3) => {
    h3.classList.remove('selected')
     })
     text_h3[hover].classList.add('selected')

     icons.forEach((img) => {
        
        img.removeAttribute('id')
    })
    icons[hover].setAttribute("id", "selected")
  
 
}


text_h3.forEach((h3, i) => {
    h3.addEventListener("mouseover",() =>{
        manualHover(i)
 })
}) 
icons.forEach((img, i) => {
    img.addEventListener("mouseover",() =>{
        manualHover(i)
 })
}) 

////// Animations gsap ------------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-landing", {
    duration: 1,
    opacity: -1,
    y: -100,
    stagger:0.5,
    
})

//services animation
gsap.from(".animate-services", {
    scrollTrigger: {
        trigger:'.animate-services',
        toggleActions:"restart none none restart"

}, 
    duration: 1,
    opacity: 0,
    x: +150,
    stagger:0.2,
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
//pricing animation animate-pricing

gsap.from(".animate-pricing", {
    scrollTrigger: {
        trigger:'.animate-pricing',
        toggleActions:"play none none none"
}, 
    duration: 0.4,
    opacity: 0,
    y: +200,
    stagger:0.5,
    delay: 0.3,
    
})
