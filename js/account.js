//CADASTRO DO CLIENTE
const URL = 'http://localhost:3000/cadastro/';
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

  const cliente = { nome, sobreNome, nascimento, cpf, telefone, email, senha };

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






















// //CADASTRO DO PROFISSIONAL
// const URLPro = 'http://localhost:3000/profissionais/';
// const campoNomePro = document.querySelector('#nomePro');
// const campoSobreNomePro = document.querySelector('#sobreNomePro');
// const campoCpfPro = document.querySelector('#cpfPro');
// const campoEmailPro = document.querySelector('#emailPro');
// const campoBio = document.querySelector('#bioPro');
// const campoDiploma = document.querySelector('#diplomaPro');
// const campoPro = document.querySelector('#profissao');
// const btnSalvarPro = document.querySelector('#salvarPro');

// btnSalvarPro.onclick = async () => {
//   const nomePro = campoNomePro.value;
//   const sobreNomePro = campoSobreNomePro.value;
//   const cpfPro = campoCpfPro.value;
//   const emailPro = campoEmailPro.value;
//   const bio = campoBio.value;
//   const diploma = campoDiploma.value;
//   const profissao = campoPro.value;

//   const profissional = { nomePro, sobreNomePro, cpfPro, emailPro, bio, diploma, profissao };

//   const chamadaPro = await fetch(URLPro, {
//     method: 'POST',
//     body: JSON.stringify(profissional),
//     headers: new Headers({
//       'Content-Type': 'application/json',
//     }),
//   });

//   console.log('chamada:', chamadaPro);
//   if (chamadaPro.status == 201) {
//     alert('salvo com sucesso');
//   } else {
//     // tratar erro
//     console.log(chamadaPro.statusText)
//   }
// };
