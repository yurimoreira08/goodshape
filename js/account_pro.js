const URLPro = 'https://back-end-live-in-shape-1.onrender.com/cadastro/';
const campoNomePro = document.querySelector('#nomePro');
const campoSobreNomePro = document.querySelector('#sobreNomePro');
const campoNascimentoPro = document.querySelector('#nascimentoPro');
const campoCpfPro = document.querySelector('#cpfPro');
const campoTelefonePro = document.querySelector('#telefonePro');
const campoEmailPro = document.querySelector('#emailPro');
const campoSenhaPro = document.querySelector('#senhaPro');
// Removido campos não utilizados
// const campoBio = document.querySelector('#bioPro');
// const campoDiploma = document.querySelector('#diplomaPro');
// const campoProfissao = document.querySelector('#profissao');
const btnSalvarPro = document.querySelector('#salvarPro');

btnSalvarPro.onclick = async () => {
  const nome = campoNomePro.value;
  const sobreNome = campoSobreNomePro.value;
  const nascimento = campoNascimentoPro.value;
  const cpf = campoCpfPro.value;
  const telefone = campoTelefonePro.value;
  const email = campoEmailPro.value;
  const senha = campoSenhaPro.value;
  const tipo = 'profissional';

  const profissional = { nome, sobreNome, nascimento, cpf, telefone, email, senha, tipo };
  

  try {
    const chamadapro = await fetch(URLPro, {
      method: 'POST',
      body: JSON.stringify(profissional),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    console.log("profissional" , profissional)
      console.log("chamada:" , chamadapro)
    if (chamadapro.status == 201) {
      alert('Salvo com sucesso');
      window.location.href = 'https://goodshape.netlify.app/profissional/menu_pro';
    } else {
      console.error('Erro durante a requisição:', chamadapro.status);
      alert('Ocorreu um erro ao salvar. Por favor, tente novamente.');
    }
  } catch (error) {
    console.error('Erro durante a requisição:', error);
    alert('Ocorreu um erro ao salvar. Por favor, tente novamente.');
  }
};
