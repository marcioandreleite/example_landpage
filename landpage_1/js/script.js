(function () {
    const jsBar = document.querySelector('[js-bar]')
    const jsMenu = document.querySelector('[js-menu]')

    jsBar.addEventListener('click', () => {
        jsBar.classList.toggle('active')
        jsMenu.classList.toggle('active')
    })

    document.querySelectorAll('[js-link]').forEach(n => n.
        addEventListener('click', () => {
            jsBar.classList.remove('active')
            jsMenu.classList.remove('active')
        }))
})()