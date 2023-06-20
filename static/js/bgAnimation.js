// Importa las bibliotecas necesarias de GSAP y ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Registra el complemento ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define la animación de fondo
function animateBackground() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    gsap.to(section, {
      backgroundPosition: "50% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

// Inicia la animación de fondo cuando el contenido esté cargado
window.addEventListener("DOMContentLoaded", () => {
  animateBackground();
});
