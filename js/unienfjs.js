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
    }, 3500);  // A cada 3,5 segundos
  }
  
  // Chama a função ao carregar a página
  window.onload = autoScrollCursos;

                  // Quando o usuário rolar para baixo
                window.onscroll = function() {
                  stickyHeader();
                };
              
                var header = document.querySelector("header");
              
                // Adiciona a classe 'sticky' quando o usuário rola para baixo
                function stickyHeader() {
                  if (window.pageYOffset > 0) {
                    header.classList.add("sticky");
                  } else {
                    header.classList.remove("sticky");
                  }
                }


                  const cursoContainer = document.querySelector('.curso-container');
                  const cursos = document.querySelectorAll('.curso'); // cada curso individual
                  let currentIndex = 0;
                  let isPaused = false;
                  let cursoInterval;

                  function moveCursosPorGrupo() {
                    if (isPaused) return;

                    const grupoTamanho = 3;
                    const totalCursos = cursos.length;
                    const containerWidth = cursoContainer.offsetWidth;
                    const cursoWidth = cursos[0].offsetWidth;
                    const marginRight = parseInt(getComputedStyle(cursos[0]).marginRight) || 0;

                    // Calcula o quanto deve mover: 3 cursos + margem
                    const passo = (cursoWidth + marginRight) * grupoTamanho;

                    // Atualiza o índice e calcula nova posição
                    currentIndex++;
                    const deslocamento = passo * currentIndex;

                    // Se passar do limite, reseta
                    if (deslocamento >= (cursoWidth + marginRight) * totalCursos) {
                      currentIndex = 0;
                      cursoContainer.style.transition = 'none';
                      cursoContainer.style.transform = 'translateX(0)';
                      // Pequeno atraso antes da próxima transição
                      setTimeout(() => {
                        cursoContainer.style.transition = 'transform 1s ease';
                      }, 50);
                      return;
                    }

                    cursoContainer.style.transition = 'transform 1s ease';
                    
                  }

                  function startLoop() {
                    cursoInterval = setInterval(moveCursosPorGrupo, 5000); // troca a cada 5 segundos
                  }

                  function pauseAnimation() {
                    isPaused = true;
                    clearInterval(cursoInterval);
                    cursoContainer.style.transition = 'none';
                  }

                  // Pausar se o usuário interagir
                  cursoContainer.addEventListener('click', pauseAnimation);
                  cursoContainer.addEventListener('wheel', pauseAnimation);

                  // Iniciar
                  startLoop();