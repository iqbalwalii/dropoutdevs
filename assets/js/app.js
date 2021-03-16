const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar__menu');
const topBtn = document.querySelector('.top');
console.log(topBtn)

hamburger.addEventListener('click', () => {
menu.classList.toggle('hide')
})
// scroll to top btn
topBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
    
})