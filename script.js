// Components
const header = document.querySelector('.header');
const headerLinks = header.querySelectorAll('.header__link');
const leftMenuButton = header.querySelector('.header__menu-button');
const appsMenuButton = header.querySelector('.header__apps-button');


// Add active class to header links
headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Removing 'active' class from all links
        headerLinks.forEach((previousLinks) => {
            previousLinks.className = 'header__link';
        });

        // Adding 'active' class to the current clicked link
        link.classList.add('header__link--active');
    });
});


// Left Menu
leftMenuButton.addEventListener('click', () => {
    // Creating leftMenu element
    const leftMenu = document.createElement('div');
    leftMenu.classList.add('left-menu');
    leftMenu.innerHTML = `
        <div class="left-menu__content">
            <a href="index.html" class="left-menu__img">
                <img src="assets/google-clone-logo.png" alt="Google Clone">
            </a>

            <ul class="left-menu__list">
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">home</i>
                        Home
                    </a>
                </li>
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">history</i>
                        Search History
                    </a>
                </li>
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">collections_bookmark</i>
                        Collections
                    </a>
                </li>
            </ul>

            <div class="left-menu__divider"></div>

            <ul class="left-menu__list">
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">settings</i>
                        Settings
                    </a>
                </li>
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">explicit</i>
                        Explicit Results
                    </a>
                </li>
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">help</i>
                        Help
                    </a>
                </li>
                <li class="left-menu__item">
                    <a href="#">
                        <i class="material-icons">feedback</i>
                        Send Feedback
                    </a>
                </li>
            </ul>
        </div>
    `;

    // Appending to body if doesn't exist
    if(!(document.body.contains(document.querySelector('.left-menu')))) {
        document.body.appendChild(leftMenu);
    }

    const leftMenuContent = leftMenu.querySelector('.left-menu__content');
    // Animating
    setTimeout(() => {
        leftMenuContent.style.transform = 'translateX(0)';
    }, 50);

    // Closing menu
    leftMenu.addEventListener('click', (e) => {
        if(e.target === leftMenu) {
            leftMenu.style.visibility = 'hidden';
            leftMenuContent.style.transform = 'translateX(-250px)';

            // Removing element
            setTimeout(() => {
                document.body.removeChild(leftMenu);
            }, 550);
        }
    });
});


// Apps Menu
appsMenuButton.addEventListener('click', () => {
    // Checking if appsMenu element already exists
    if(!(document.body.contains(document.querySelector('.apps-menu')))) {
        // Creating appsMenu element
        const appsMenu = document.createElement('div');
        appsMenu.classList.add('apps-menu');
        appsMenu.innerHTML = `
            <div class="apps-menu__content">
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/google.svg" alt="Search">
                    <span class="apps-menu__title">Search</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/maps.svg" alt="Maps">
                    <span class="apps-menu__title">Maps</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/youtube.svg" alt="YouTube">
                    <span class="apps-menu__title">YouTube</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/play.svg" alt="Play">
                    <span class="apps-menu__title">Play</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/news.svg" alt="News">
                    <span class="apps-menu__title">News</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/gmail.svg" alt="Gmail">
                    <span class="apps-menu__title">Gmail</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/drive.svg" alt="Drive">
                    <span class="apps-menu__title">Drive</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/photos.svg" alt="Photos">
                    <span class="apps-menu__title">Photos</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/shopping.svg" alt="Shopping">
                    <span class="apps-menu__title">Shopping</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/blogger.svg" alt="Blogger">
                    <span class="apps-menu__title">Blogger</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/hangouts.svg" alt="Hangouts">
                    <span class="apps-menu__title">Hangouts</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/keep.svg" alt="Keep">
                    <span class="apps-menu__title">Keep</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/earth.svg" alt="Earth">
                    <span class="apps-menu__title">Earth</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/podcasts.svg" alt="Podcasts">
                    <span class="apps-menu__title">Podcasts</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/classroom.svg" alt="Classroom">
                    <span class="apps-menu__title">Classroom</span>
                </a>
                <a href="#" class="apps-menu__item">
                    <img src="assets/menu/analytics.svg" alt="Analytics">
                    <span class="apps-menu__title">Analytics</span>
                </a>
            </div>
        `;

        // Appending element to body, and increasing height to show
        document.body.appendChild(appsMenu);
        setTimeout(() => {
            appsMenu.style.height = '100%';
        }, 50);

        // Check outside click after the appsMenuButton is pressed
        setTimeout(() => {
            document.body.addEventListener('click', closeMenu);

            function closeMenu(e) {
                if(e.target !== appsMenu && !appsMenu.contains(e.target)) {
                    // Removing body eventListener
                    document.body.removeEventListener('click', closeMenu);

                    // Decreasing height to hide, and removing element from body
                    appsMenu.style.height = '0';
                    setTimeout(() => {
                        document.body.removeChild(appsMenu);
                    }, 550);
                }
            }
        }, 50);
    }
});
