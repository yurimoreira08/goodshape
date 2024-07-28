const URLpro = 'https://back-end-live-in-shape-1.onrender.com/cadastro_pro/';
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
  const bio = campoBio.value;
  const diploma = campoDiploma.files[0] ? await toBase64(campoDiploma.files[0]) : null; // Convertendo para base64
  const profissao = campoProfissao.value;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!nomePro || !sobreNomePro || !nascimentoPro || !cpfPro || !telefonePro || !emailPro || !senhaPro || !profissao) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const profissional = { nomePro, sobreNomePro, nascimentoPro, cpfPro, telefonePro, emailPro, senhaPro, bio, diploma, profissao };

  try {
    const chamadapro = await fetch(URLpro, {
      method: 'POST',
      body: JSON.stringify(profissional),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (chamadapro && chamadapro.status === 201) {
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

// Função para converter arquivo em base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
