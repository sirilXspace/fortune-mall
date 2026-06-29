document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Sidebar Logic ---
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const navMenu = document.getElementById("nav-menu");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  function openMenu() {
    if (navMenu && sidebarOverlay) {
      navMenu.classList.add("open");
      sidebarOverlay.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMenuFunc() {
    if (navMenu && sidebarOverlay) {
      navMenu.classList.remove("open");
      sidebarOverlay.classList.remove("show");
      document.body.style.overflow = "";
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", closeMenuFunc);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeMenuFunc);
  }

  // Close sidebar on clicks outside the menu (on the body)
  document.addEventListener("click", (event) => {
    if (navMenu && navMenu.classList.contains("open")) {
      // Check if the click was outside the nav menu and not on the toggle button itself
      if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenuFunc();
      }
    }
  });

  // --- Swiper Initialization ---
  if (typeof Swiper !== "undefined") {
    const heroSwiper = new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const boardSwiper = new Swiper(".board-members-swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".board-swiper-pagination",
        clickable: true,
      },
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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
      },
    });

    const teamSwiper = new Swiper(".team-swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".team-swiper-pagination",
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
        },
      },
    });

    const alumniSwiper = new Swiper(".alumni-swiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".alumni-swiper-pagination",
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
        },
      },
    });

    const achievementSwiper = new Swiper(".achievement-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".achievement-swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    const projectsSwiper = new Swiper(".projects-swiper", {
      slidesPerView:2,
      spaceBetween: 10,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".projects-button-next",
        prevEl: ".projects-button-prev",
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
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
});

  // --- Scroll Animations (Intersection Observer) ---
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  if (scrollElements.length > 0) {
    const elementInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("is-visible");
    };

    // Using Intersection Observer for better performance if supported
    if ("IntersectionObserver" in window) {
      const scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              displayScrollElement(entry.target);
              observer.unobserve(entry.target); // Only animate once
            }
          });
        },
        {
          root: null,
          threshold: 0.15, // Trigger when 15% of the element is visible
          rootMargin: "0px 0px -50px 0px"
        }
      );

      scrollElements.forEach((el) => {
        scrollObserver.observe(el);
      });
    } else {
      // Fallback for older browsers
      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 90)) {
            displayScrollElement(el);
          }
        });
      };
      
      // Check on load
      handleScrollAnimation();
      
      window.addEventListener("scroll", () => {
        handleScrollAnimation();
      });
    }
  }


  // --- Scroll to Top Button Logic ---
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      // Show button if scrolled down more than 300px
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

