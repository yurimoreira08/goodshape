const URL = 'https://back-end-live-in-shape-1.onrender.com/cadastro/';
const campoNome = document.querySelector('#nome');
const campoSobreNome = document.querySelector('#sobreNome');
const campoNascimento = document.querySelector('#nascimento');
const campoCpf = document.querySelector('#cpf');
const campoTelefone = document.querySelector('#telefone');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#senha');
const btnSalvar = document.querySelector('#salvar');


btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const sobreNome = campoSobreNome.value;
  const nascimento = campoNascimento.value;
  const cpf = campoCpf.value;
  const telefone = campoTelefone.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;
  const tipo = 'cliente';

  const cliente = { nome, sobreNome, nascimento, cpf, telefone, email, senha, tipo };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(cliente),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  console.log("cliente" , cliente)
  if (chamada.status == 201) {
    alert('salvo com sucesso');
    window.location.href = 'https://goodshape.netlify.app/cliente/planos';
  } else {
    // tratar erro
  }
};


