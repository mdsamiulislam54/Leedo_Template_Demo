// responsibe mobille menu

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuContent = document.getElementById('mobile-menu-content');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuContent.classList.toggle('opacity-0');
  menuContent.classList.toggle('opacity-100');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// responsibe mobille menu

// sticky menu..........

  // Function to handle scroll event

  const header = document.querySelector('#navbar');
  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      header.classList.add('sticky');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', handleScroll);

  
// sticky menu..........

// mouse event start.....
let curser_event = document.getElementById('curser_event')
document.addEventListener('mousemove',(e)=>{
  let mouseLeft = e.clientX
  let mouseTop = e.clientY
  curser_event.style.cssText ="left:" + mouseLeft +"px;  top:" +mouseTop +"px";
  
 
})

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

 // texttypin code 

 document.addEventListener('DOMContentLoaded', function() {
  const texts = [
      "  I'am Samiul",
     
  ];
   

  const typingSpeed = 70; 
  const deletingSpeed = 50; 
  const pauseBetweenTexts = 1000; 

  const typingContainer = document.getElementById('typing-container');
  let currentTextIndex = 0;
 

  function typeText(text, index = 0) {
      if (index < text.length) {
          typingContainer.textContent += text.charAt(index);
          setTimeout(() => typeText(text, index + 1), typingSpeed);
      } else {
          setTimeout(() => deleteText(text, text.length), pauseBetweenTexts);
      }
  }

  function deleteText(text, length) {
      if (length > 0) {
          typingContainer.textContent = typingContainer.textContent.slice(0, -1);
          setTimeout(() => deleteText(text, length -1), deletingSpeed);
      } else {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(() => typeText(texts[currentTextIndex]), pauseBetweenTexts);
      }
  }


  typeText(texts[currentTextIndex]);
});




AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

