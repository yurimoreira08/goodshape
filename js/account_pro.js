//CADASTRO DO PROFISSIONAL 

 const URL = 'https://back-end-live-in-shape-1.onrender.com/cadastro_pro/';
 const campoNomePro = document.querySelector('#nomePro');
 const campoSobreNomePro = document.querySelector('#sobreNomePro');
 const campoNascimentoPro = document.querySelector('#nascimentoPro');
 const campoCpfPro = document.querySelector('#cpfPro');
 const campoTelefonePro = document.querySelector('#telefonePro');
 const campoEmailPro = document.querySelector('#emailPro');
 const campoSenhaPro = document.querySelector('#senhaPro');
 const campoBio = document.querySelector('#bioPro');
 const campoDiploma = document.querySelector('#diplomaPro');
 const campoProfissao = document.querySelector('#profissao');
 const btnSalvarPro = document.querySelector('#salvarPro');

btnSalvarPro.onclick = async () => {
  const nomePro = campoNomePro.value;
  const sobreNomePro = campoSobreNomePro.value;
  const nascimentoPro = campoNascimentoPro.value;
  const cpfPro = campoCpfPro.value;
  const telefonePro = campoTelefonePro.value;
  const emailPro = campoEmailPro.value;
  const senhaPro = campoSenhaPro.value;
  const profissao = campoProfissao.value;


  const profissional = { nomePro, sobreNomePro, nascimentoPro, cpfPro, telefonePro, emailPro, senhaPro, profissao };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(profissional),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
 if (chamada.status == 201) {
   alert('salvo com sucesso');
   window.location.href = 'https://goodshape.netlify.app/profissional/menu_pro';
 } else {
   // tratar erro
 }
};

