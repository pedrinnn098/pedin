// Função executada quando o formulário de contato é enviado
function enviarMensagem(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Exibir os valores no console
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + mensagem);
  
    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  
    // Exibir uma mensagem de sucesso ao usuário
    alert("Mensagem enviada com sucesso!");
  }
  
  // Selecionar o formulário e adicionar um ouvinte de evento para o envio
  document.getElementById("formulario").addEventListener("submit", enviarMensagem);
  