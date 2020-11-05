// Add active class to header links
const linksContainer = document.getElementById('section-left');
const links = linksContainer.getElementsByClassName('link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}


// Left Menu
const leftMenuBtn = document.getElementById('left-menu-btn');

leftMenuBtn.addEventListener('click', () => {
    const menu = document.querySelector('.left-menu');
    const menuContent = document.querySelector('.left-menu-content');
    const menuLinks = menuContent.getElementsByTagName('a');

    menu.classList.remove('hidden');
    menuContent.classList.remove('hidden');

    document.onclick = function (e) {
        if (e.target == menu || e.target == document.getElementById('close-menu')) {
            menu.classList.add('hidden');
            menuContent.classList.add('hidden');
        }
    }
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', (e) => {
            if (e.target == menuLinks[i]) {
                menu.classList.add('hidden');
                menuContent.classList.add('hidden');
            }
        });
    }
});


// Right Menu
const rightMenuBtn = document.getElementById('right-menu-btn');

rightMenuBtn.addEventListener('click', () => {
    const menu = document.querySelector('.right-menu');

    menu.classList.toggle('hidden');
});