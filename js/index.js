let botonPsico = document.getElementById('psico')
let fondo = document.body
let encabezado = document.getElementById('header')
let pie = document.getElementById('footer')
let rueda = document.getElementById('rueda')
let logo = document.getElementById('logo-centro')
let gota2 = document.getElementById('gota2')


function ponteLoco(){
    fondo.style.backgroundColor = 'black'
    encabezado.style.backgroundColor = "#c53c82"
    footer.style.backgroundColor = "#c53c82"
    rueda.style.border = "25px solid #71dd28"
    logo.style.backgroundImage = "url('../images/logos/psicoo.svg')"
}

function muevete(){
    gota2.style.transform = 'rotate(180deg) translate(120%, 60%)'
    gota2.style.opacity = '1'
}