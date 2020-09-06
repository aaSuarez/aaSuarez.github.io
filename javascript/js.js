let btn = document.querySelector('.up');
console.log(btn)
window.onscroll = function (){
    if(document.documentElement.scrollTop > 420){
        btn.style.display = 'block';
    }else{
        btn.style.display = "none"
    }
}


window.sr = ScrollReveal();
sr.reveal('.contenido',{
    duration:2000,
    origin:'top'
})
sr.reveal('#head',{
    duration:2000,
    origin:'bottom'
})
sr.reveal('#lapiz',{
    duration:2000,
    origin:'bottom'
})
sr.reveal('#p-html',{
    duration:2000,
    origin:'bottom'
})
sr.reveal('#colores',{
    duration:2000,
    origin:'bottom'
})

let enlace = document.querySelectorAll('.enlace')
enlace.forEach(enlace => enlace.addEventListener('click',()=>{
  enlace.style.textDecoration ='underline';
  enlace.style.color='#640b0b'
}))
