  document.addEventListener("DOMContentLoaded", function () {
    const cursos = document.querySelectorAll(".curso-detalhe");

    const observer = new IntersectionObserver((entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observer.unobserve(entrada.target); // opcional: só anima 1x
        }
      });
    }, {
      threshold: 0.1
    });

    cursos.forEach((curso) => {
      observer.observe(curso);
    });
  });