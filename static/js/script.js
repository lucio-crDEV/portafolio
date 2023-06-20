// const recargar = () => {
//   window.location.reload();
// };

const recargar = () => {
    // Recargar la sección "proyectos"
    var proyectosSection = document.getElementById("proyectosSection");
    proyectosSection.innerHTML = proyectosSection.innerHTML;
  
    // Recargar la sección "skills"
    var skillsSection = document.getElementById("skillsSection");
    skillsSection.innerHTML = skillsSection.innerHTML;
  
    // Recargar la sección "contacto"
    var contactoSection = document.getElementById("contactoSection");
    contactoSection.innerHTML = contactoSection.innerHTML;
};

// Generar un retraso aleatorio entre 0.3s y 0.6s
function generateRandomDelay() {
  return Math.random() * 0.9 + 1;
}

const glitchTitle = document.getElementById("titulo1");
const delay = generateRandomDelay();
glitchTitle.style.animationDelay = `${delay}s`;