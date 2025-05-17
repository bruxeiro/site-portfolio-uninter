
//Mensagem que aparece ao enviar mensagem no formulário de contato

document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});