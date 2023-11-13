const URL = 'http://localhost:3000/usuarios/';
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#senha');
const btnSalvar = document.querySelector('#salvar');
const mensagem = document.querySelector('#mensagem');

btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;

  const usuario = { nome, email, senha };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  if (chamada.status == 201) {
    alert('salvo com sucesso');
    mensagem.textContent = 'Usuario salvo com sucesso';
    mensagem.style.background = 'green';
    mensagem.style.padding = '10px';
  } else {
    // tratar erro
  }
};