             
  var header = document.querySelector("header");
              
// Adiciona a classe 'sticky' quando o usuário rola para baixo
  function stickyHeader() {
    if (window.pageYOffset > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }