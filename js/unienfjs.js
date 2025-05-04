// Função para rolar os cursos automaticamente
function autoScrollCursos() {
    const container = document.querySelector('.curso-container');
    const cursos = document.querySelectorAll('.curso');
    let index = 0;
  
    // Função para rolar a página para o próximo curso
    setInterval(() => {
      if (index < cursos.length - 3) {  // Exibe apenas 3 cursos por vez
        container.scrollBy({
          left: cursos[index].offsetWidth + 20,  // Desloca a largura de um curso + o espaçamento
          behavior: 'smooth',
        });
        index++;
      } else {
        // Reinicia a rolagem, voltando para o primeiro curso
        container.scrollTo(0, 0);
        index = 0;
      }
    }, 1200);  // A cada 1,2 segundos
  }
  
  // Chama a função ao carregar a página
  window.onload = autoScrollCursos;

  