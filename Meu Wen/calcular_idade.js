/****************************Atualiza a data de nascimento sozinha****************************/

var dataNascimento = new Date('2004-12-06');
var dataAtual = new Date();
var diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
if (new Date(dataNascimento.getFullYear() + diferencaAnos, dataNascimento.getMonth(), dataNascimento.getDate()) > dataAtual) {
    diferencaAnos--;
}
document.getElementById('idade').innerText = diferencaAnos;

/*****************************Efeito de rolagem*/

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }
});

function scrollToSection(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    });
}




  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impedir o envio padrão do formulário

      // Enviar o formulário usando AJAX (caso prefira uma abordagem assíncrona)
      // Aqui você pode adicionar a lógica para enviar o formulário usando XMLHttpRequest ou fetch()

      // Submeter o formulário para o Formspree
      const formData = new FormData(form);
      fetch('https://formspree.io/f/xzbnylzg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao enviar o formulário.');
        }
        // Se o envio for bem-sucedido, redirecionar para o home do site
        window.location.href = "http://127.0.0.1:5500/index.html";
      })
      .catch(error => {
        console.error('Erro:', error);
        // Aqui você pode adicionar lógica para lidar com erros de envio do formulário
      });
    });
  });








