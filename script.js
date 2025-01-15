let openBtn = document.querySelector('.openButton')
let showingBox = document.querySelector('.upperBox')
let closeBtn = document.querySelector('.closeButton')
let isShown = false;

openBtn.onclick = () => {
    if (isShown == false) {
        showingBox.style = 'display: flex'
        isShown = true
    }
    else 
        showingBox.style = 'display: none'

    if (openBtn.innerHTML == 'Open me') openBtn.innerHTML = 'Close me'
    else openBtn.innerHTML = 'Open me'
}

closeBtn.onclick = () => {
    showingBox.style = 'display: none'
}
