document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Sidebar Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const navMenu = document.getElementById('nav-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openMenu() {
        if (navMenu && sidebarOverlay) {
            navMenu.classList.add('open');
            sidebarOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenuFunc() {
        if (navMenu && sidebarOverlay) {
            navMenu.classList.remove('open');
            sidebarOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMenuFunc);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMenuFunc);
    }

    // Close sidebar on clicks outside the menu (on the body)
    document.addEventListener('click', (event) => {
        if (navMenu && navMenu.classList.contains('open')) {
            // Check if the click was outside the nav menu and not on the toggle button itself
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                closeMenuFunc();
            }
        }
    });

    // --- Swiper Initialization ---
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        const boardSwiper = new Swiper('.board-members-swiper', {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
                el: '.board-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });

        const teamSwiper = new Swiper('.team-swiper', {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
                el: '.team-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                }
            }
        });

        const alumniSwiper = new Swiper('.alumni-swiper', {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
                el: '.alumni-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            }
        });

        const achievementSwiper = new Swiper('.achievement-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.achievement-swiper-pagination',
                clickable: true,
            },
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false,
            // },
        });
    }
});
