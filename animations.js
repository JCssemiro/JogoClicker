

let circuloCentral = document.querySelector('.clicker-spot');

circuloCentral.addEventListener('click',(e)=>{
    e.preventDefault();
    circuloCentral.style.width = "255px";
    circuloCentral.style.height = "255px";

    setTimeout(()=>{
        circuloCentral.style.width = 250+'px';
        circuloCentral.style.height= 250+'px';
    },300);
    
})