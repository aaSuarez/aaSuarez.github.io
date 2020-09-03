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


function closeMenuAndGoTo(query) {
    document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
    setTimeout(() => {
      const element = document.querySelector(query)
      window.scrollTo({
        top: element.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    }, 250);
  }
  
  document.querySelector('#hero-menu').
    querySelectorAll('[href]').
    forEach(function (link) {
      link.onclick = function (event) {
        event.preventDefault()
        closeMenuAndGoTo(link.getAttribute('href'))
      }
    })