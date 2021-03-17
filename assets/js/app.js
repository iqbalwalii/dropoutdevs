const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar__menu');
const topBtn = document.querySelector('.top');
const close = document.querySelector('.close');
const nav= document.querySelector('.navbar__menu')
const card = document.querySelector('.')
console.log(topBtn)
hamburger.addEventListener('click', () => {
menu.classList.toggle('hide');
})

// scroll to top btn
topBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
    
})
close.addEventListener('click',()=>{
    nav.classList.toggle('hide');
})