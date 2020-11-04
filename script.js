// Elements
const leftMenuBtn = document.getElementById('left-menu-btn');
const rightMenuBtn = document.getElementById('right-menu-btn');

const linksContainer = document.getElementById('section-left');
const links = linksContainer.getElementsByClassName('link');


// Add active class to header links
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}


// Left Menu
leftMenuBtn.addEventListener('click', () => {
    const menu = document.getElementById('left-menu');
    const menuContent = document.getElementById('left-menu-content');

    menu.style.opacity = '1';
    menu.style.visibility = 'visible';
    menuContent.style.width = '70%';

    document.onclick = function (e) {
        if (e.target == menu || e.target == document.getElementById('close-menu')) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menuContent.style.width = '0';
        }
    }
});


// Right Menu
rightMenuBtn.addEventListener('click', () => {
    const menu = document.getElementById('right-menu');

    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.height = '0';
    }
    else {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.height = 'calc(100% - 70px)';
    }
});