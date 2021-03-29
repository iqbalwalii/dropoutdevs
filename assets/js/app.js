const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar__menu');
const topBtn = document.querySelector('.top');
const close = document.querySelector('.close');
const form = document.querySelector('form');
const formBtn = document.querySelector('.submit');
console.log(formBtn)
const nav= document.querySelector('.navbar__menu')
hamburger.addEventListener('click', () => {
menu.classList.toggle('hide');
})

// scroll to top btn
if (topBtn && close)
{
topBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
    
})
close.addEventListener('click',()=>{
    nav.classList.toggle('hide');
})
}
if (formBtn && form)
{
formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let formData = {
        name:'',
        email:'',
        phone:'',
        message:'',
    }
    for( data of form.children)
    {
        (formData[data.name]= data.value);
    }
    console.log(formData)
    fetch('https://ancient-inlet-41931.herokuapp.com/dropoutdevs/contact', 
        {
             method: 'POST',
        headers: {    
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({...formData })
    });
})
}

