// COLOUR CHANGE
const themeButton = document.getElementById('color_button')
const darkTheme = 'green_theme'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// SCROLL TO TOP
function scrollUp(){
    const scrollUp = document.getElementById('scroll_up');
    if(this.scrollY >= 560) scrollUp.classList.add('show_scroll'); else scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)