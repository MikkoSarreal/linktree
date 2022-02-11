function setTheme({backgroundColor, color}) {
    if (color) {
        document.documentElement.style.setProperty('--primary', color)
    }
    
    if (backgroundColor) {
        document.documentElement.style.setProperty('--secondary', backgroundColor)
    }
}

export default setTheme