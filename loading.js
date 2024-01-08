const logoContainer = document.getElementById('logo-container')

const images = [
    {src : './images/javascript.png', color: '#F7E018'},
    {src : './images/React.png', color: '#61DBFB'},
    {src : './images/Nodejs.png', color: '#68A063'},
    {src : './images/Expressjs.png', color: '#4F5C66'},
]

const loadImages = (image)=>{
    let img = document.createElement('img')
    img.classList.add('language-logo')
    img.src = image

    logoContainer.append(img)
}

const changeBorderColor = (color)=>{
    const lines = document.querySelectorAll('.line')
    lines[0].style.backgroundColor = color
    lines[1].style.backgroundColor = color
    logoContainer.style.borderColor = color
}

const removeImage = ()=>{
    logoContainer.getElementsByTagName('img')[0].remove()
}

const timer = ms => new Promise(res => setTimeout(res,ms))

const load = async()=>{
    for (let index = 0; index < images.length; index++) {
        loadImages(images[index].src)
        changeBorderColor(images[index].color)
        await timer(1000)  
        removeImage()
    }
}


load()
