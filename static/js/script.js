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
var valor = 0
// Generar un retraso aleatorio entre 0.3s y 0.6s
const generateRandomDelay = () => {
  valor = Math.random() * 0.9 + 1;
  console.log({valor});
  const glitchTitle = document.getElementsByClassName("titulo");
  const delay = generateRandomDelay();
  glitchTitle.style.animationDelay() = `${delay}s`;
}

