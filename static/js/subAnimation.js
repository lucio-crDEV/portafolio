// animations.js
document.addEventListener("DOMContentLoaded", () => {
    const animatedTitle = document.getElementById("titulo1");
    const animatedTitle2 = document.getElementById("titulo2");
    const animatedTitle3 = document.getElementById("titulo3");
  
    /* fadeIn() titulo1 */
    const fadeIn = (element) => {
      let opacity = 0;
      element.style.visibility = "visible";
      element.style.opacity = opacity;
  
      const fade = () => {
        if (opacity < 1) {
          opacity += 0.008;
          element.style.opacity = opacity;
          requestAnimationFrame(fade); // Use requestAnimationFrame for smooth animation
        }
      };
  
      fade();
    };
  
    fadeIn(animatedTitle);
  
    // Función máquina de escribir
    const typeWriter = (text, element) => {
      const characters = text.split("");
      let index = 0;
  
      const animate = () => {
        if (index < characters.length) {
          element.innerHTML += characters[index];
          index++;
          setTimeout(animate, 65); // Delay between each character (adjust as needed)
        }
      };
  
      // Establecer la altura del contenedor para mantener el espacio reservado
      const lineHeight = element.offsetHeight;
      element.style.lineHeight = `${lineHeight}px`;
  
      // Iniciar la animación después de un breve retraso
      setTimeout(() => {
        element.style.lineHeight = ""; // Restaurar el valor original de line-height
        animate(); // Iniciar la animación de la máquina de escribir
      }, 700); // Delay en milisegundos antes de iniciar la animación
    };
  
    typeWriter("Fullstack Developer", animatedTitle2);
  
    setTimeout(() => {
      typeWriter("Nubes Nuevas, el Futuro Hoy", animatedTitle3)
    }, 2000);
  });
  
  
  