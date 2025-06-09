             
  var header = document.querySelector("header");
              
// Adiciona a classe 'sticky' quando o usuário rola para baixo
  function stickyHeader() {
    if (window.pageYOffset > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


// Seleciona o contêiner de cursos
  const cursoContainer = document.querySelector('.curso-container');
    
// Função para mover os cursos para a esquerda
  function moveCursos() {
// Move a "cursos-container" para a esquerda, fazendo com que o primeiro curso desapareça
  cursoContainer.style.transition = 'transform 1s ease-in-out'; // Define o tempo da transição
  cursoContainer.style.transform = 'translateX(-33%)'; // Desloca para a esquerda em 33% da largura
}
  
// Função para resetar a posição para o começo
  function resetCursos() {
// Reseta a posição de volta ao início

  setTimeout(() => {
    cursoContainer.style.transition = 'none'; // Retira a transição temporariamente
    cursoContainer.style.transform = 'translateX(0)';
        
// Após resetar, adiciona a transição novamente
  setTimeout(() => {
  cursoContainer.style.transition = 'transform 1s ease-in-out';
  }, 50);

  }, 1000); // Espera o tempo da animação antes de resetar
          
}
  
// Configura o intervalo de movimento dos cursos
  setInterval(() => {
    moveCursos();
    resetCursos();
  }, 4000); // A cada 4 segundos a transição acontece
