const URL = 'http://localhost:3000/clientes/';
const campoNome = document.querySelector('#nome');
const campoSobreNome = document.querySelector('#sobreNome');
const campoNascimento = document.querySelector('#nascimento');
const campoCpf = document.querySelector('#cpf');
const campoTelefone = document.querySelector('#telefone');
const campoEmail = document.querySelector('#email');
const btnSalvar = document.querySelector('#salvar');


btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const sobreNome = campoSobreNome.value;
  const nascimento = campoNascimento.value;
  const cpf = campoCpf.value;
  const telefone = campoTelefone.value;
  const email = campoEmail.value;

  const cliente = { nome, sobreNome, nascimento, cpf, telefone, email };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(cliente),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  if (chamada.status == 201) {
    alert('salvo com sucesso');
  } else {
    // tratar erro
  }
};