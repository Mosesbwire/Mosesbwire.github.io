const mobileMenuBtn = document.getElementById('mobile-menu')
const menu = document.getElementById('navigation')
const openBtn = document.getElementById('btn-open-menu')
const closeBtn = document.getElementById('btn-close-menu')

mobileMenuBtn.addEventListener('click', (e)=> {
    if(e.target.id === 'btn-open-menu'){
        menu.style.opacity = '1'
        e.target.style.visibility = 'hidden'
        closeBtn.style.visibility = 'visible'
     
    }

    if (e.target.id === 'btn-close-menu'){

        menu.style.opacity = '0'
        e.target.style.visibility = 'hidden'
        openBtn.style.visibility = 'visible'

    }


})

menu.addEventListener('click', ()=>{
    if(window.innerWidth <= 780){
        menu.style.opacity = '0'
        closeBtn.style.visibility = 'hidden'
        openBtn.style.visibility = 'visible'
    }
})

const aboutBtn = document.getElementById('about-btn')
const projectBtn = document.getElementById('project-btn')
const contactBtn = document.getElementById('contact-btn')
const bacKToTop = document.getElementById('back-to-top')
const heroProjectBtn = document.querySelectorAll('.hero-btn')[0]
const contactMe = document.querySelectorAll('.about-btn')[0]
const logo = document.getElementById('logo')


const smoothScroll = (e)=>{
    let trackPoint = document.getElementById('hero').getClientRects()[0]['y']
    let pos = document.getElementById(e.target.dataset.dest).getClientRects()[0]['y']
    if(trackPoint > 0){
        window.scrollTo({
            top: pos - trackPoint,
            left:0,
            behavior: 'smooth'
        })
    }else {
        window.scrollTo({
            top: pos + (trackPoint * -1),
            left:0,
            behavior: 'smooth'
        })
    }

}

aboutBtn.addEventListener('click', smoothScroll)
projectBtn.addEventListener('click', smoothScroll)
contactBtn.addEventListener('click', smoothScroll)
bacKToTop.addEventListener('click', smoothScroll)
heroProjectBtn.addEventListener('click', smoothScroll)
contactMe.addEventListener('click', smoothScroll)
logo.addEventListener('click', smoothScroll)



