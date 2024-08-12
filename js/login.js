function login() {
  const email = document.querySelector('#emailLogin');
  const senha = document.querySelector('#senhaLogin');
  const btnLogin = document.querySelector('#btnLogin');

  btnLogin.addEventListener('click', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão

    try {
      const cliente = {
        email: email.value,
        senha: senha.value,
      };

      const resposta = await fetch('https://back-end-live-in-shape-1.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });

      if (!resposta.ok) {
        throw new Error('Falha na autenticação');
      }

      const dados = await resposta.json();

      // Verifique a estrutura da resposta para garantir que 'id' está presente
      if (!dados.usuario || !dados.usuario.id) {
        throw new Error('ID do usuário não encontrado na resposta');
      }

      localStorage.setItem('token', dados.token);
      localStorage.setItem('usuario', JSON.stringify(dados.usuario)); // Armazena o usuário completo
      localStorage.setItem('tipo', dados.tipo);

      // Redirecione com base no tipo de usuário
      if (dados.tipo === 'cliente') {
        window.location.href = 'https://goodshape.netlify.app/cliente/menu_cli.html';
      } else if (dados.tipo === 'profissional') {
        window.location.href = 'https://goodshape.netlify.app/profissional/menu_pro.html';
      } else {
        console.error('Tipo de usuário desconhecido');
      }
    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
    }
  });
}

function verificaUsuarioAutenticado() {
  const usuarioAutenticado = localStorage.getItem('usuario')
    ? JSON.parse(localStorage.getItem('usuario'))
    : null;

  if (usuarioAutenticado) {
    const tipo = localStorage.getItem('tipo');
    if (tipo === 'cliente') {
      window.location.href = 'https://goodshape.netlify.app/cliente/menu_cli.html';
    } else if (tipo === 'profissional') {
      window.location.href = 'https://goodshape.netlify.app/profissional/menu_pro.html';
    }
  }
}

export default { login, verificaUsuarioAutenticado };
