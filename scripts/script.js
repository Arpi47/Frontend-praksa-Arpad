var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function(){
        document.body.classList.toggle('night');
        darkMode.classList.toggle('active');
        document.querySelector('.nav1', '.nav2', '.container-5', '.column-white', '.oprema-text', '.ct-6-text', '.ct-5-text').classList.toggle('night');
})
function toggleLanguageMenu() {
    const menu = document.querySelector('.language-menu');
    menu.classList.toggle('open');
  }
  
  window.addEventListener('resize', function() {
    const menu = document.querySelector('.language-menu');
    if (window.innerWidth < 768) {
      menu.classList.remove('open');
    }
  });
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  
  window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth < 768) {
      menu.classList.remove('open');
    }
  });
AOS.init();
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('no-scroll');
    }, 5000);
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('no-scroll');
    });
    document.getElementById('popup-button').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.classList.remove('no-scroll');
    });
});
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1350: {
        slidesPerView: 5,
      },
      1130: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      660: {
        slidesPerView: 2,
      }
    }
  });