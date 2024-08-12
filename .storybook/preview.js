import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WOW } from 'wowjs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css/animate.min.css';
import '../components/style.scss';
import './_drupal.js';
import $ from 'jquery';
import 'slick-carousel';

window.jQuery = $;
window.$ = $;

if (typeof window !== 'undefined') {
  new WOW().init();
}

export const decorators = [
  (Story, { args }) => {
    const { renderAs } = args || {};

    useEffect(() => {
      Drupal.attachBehaviors();

      // Initialize WOW.js after the component has rendered
      if (window.WOW) {
        new WOW().init();
      }

      // Initialize AOS after the component has rendered
      AOS.init({
        duration: 1200,
        once: true,
      });
    }, [args]);

    // Dynamically insert the CDN links
    useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href =
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/wow.js/1.1.2/wow.min.js';
      script.onload = () => {
        if (window.WOW) {
          new WOW().init();
        }
      };
      document.body.appendChild(script);

      // Cleanup on unmount
      return () => {
        document.head.removeChild(link);
        document.body.removeChild(script);
      };
    }, []);

    return Story();
  },
];

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

//active navbar
// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('.header');
//   const navLinks = document.querySelectorAll('.navbar_list .link');
//   const sections = document.querySelectorAll('section');

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }

//     let currentSection = '';
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (window.scrollY >= sectionTop - sectionHeight / 3) {
//         currentSection = section.getAttribute('id');
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove('active');
//       if (link.getAttribute('href').includes(currentSection)) {
//         link.classList.add('active');
//       }
//     });
//   });
// });

const script = document.createElement('script');
script.src =
  'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js';
script.onload = function () {
  new PureCounter();
};
document.head.appendChild(script);
