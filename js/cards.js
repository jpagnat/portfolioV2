const proyectos = [
  {
    title: "Card Interactive",
    img: "./img/proyectos/proyecto7.png",
    description: "Proyecto Frontend Mentor",
    back: "Sitio web responsive con formulario dinamico y tarjeta actualizada en tiempo real",
    page: "https://jpagnat.github.io/credit-card/",
    github: "https://github.com/jpagnat/credit-card",
    tecnologias: "HTML, CSS, SASS, JavaScript",
  },
  {
    title: "Nur Bier",
    img: "./img/proyectos/proyecto1.jpg",
    description: "Proyecto Educativo",
    back: "Sitio web responsive realizado como proyecto final del curso de JavaScript.",
    page: "https://jpagnat.github.io/bar-project/",
    github: "https://github.com/jpagnat/bar-project",
    tecnologias: "HTML, CSS, SASS, JavaScript",
  },
  {
    title: "Argentina al Mundo",
    img: "./img/proyectos/proyecto2.png",
    description: "Proyecto Educativo",
    back: "E-commerce de venta de productos argentinos realizado como proyecto final del curso de React.",
    page: "https://jpagnat.github.io/arg-al-mundo/",
    github: "https://github.com/jpagnat/arg-al-mundo",
    tecnologias: "HTML, CSS, SASS, ReactJS",
  },
  {
    title: "Portfolio v1 ",
    img: "./img/proyectos/proyecto3.png",
    description: "Proyecto Educativo",
    back: "Portfolio personal realizado como proyecto final del curso de Desarrollo Web.",
    page: "https://jpagnat.github.io/portfolio-template/",
    github: "https://github.com/jpagnat/portfolio-template",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    title: "Manage",
    img: "./img/proyectos/proyecto4.png",
    description: "Proyecto Educativo",
    back: "Sitio web informativo realizado como proyecto final de la materia Front End I",
    page: "https://jpagnat.github.io/practiceI/",
    github: "https://github.com/jpagnat/practiceI",
    tecnologias: "HTML, CSS",
  },
];

const cardContainer = document.getElementById("cardContainer");

function loadCards() {
  for (let i = 0; i < proyectos.length; i++) {
    cardContainer.innerHTML += `
    <div class="box-container">
	    <div class="box-item">
        <div class="flip-box">
          <div class="flip-box-front text-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${proyectos[i].img});">
            <div class="inner color-white">
              <h3 class="flip-box-header">${proyectos[i].title}</h3>
              <p>${proyectos[i].description}</p>
            </div>
          </div>
        <div class="flip-box-back text-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${proyectos[i].img});">
          <div class="inner color-white">
            <p>${proyectos[i].back}</p>
            <span>${proyectos[i].tecnologias}</span>
            <div class="card-icon">
              <a href="${proyectos[i].github}" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="${proyectos[i].page}" target="_blank"><i class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
	  </div>
    `;
  }
}

loadCards();
