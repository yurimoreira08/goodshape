function login() {
    const email = document.querySelector('#emailLogin');
    const senha = document.querySelector('#senhaLogin');
    const btnLogin = document.querySelector('#btnLogin');
  
    btnLogin.addEventListener('click', async (event) => {
      try {
        const cliente = {
          email: email.value,
          senha: senha.value,
        };
        const resposta = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cliente),
        });
        const dados = await resposta.json();
        localStorage.setItem('token', dados.token);
        localStorage.setItem('cliente', JSON.stringify(dados.cliente));
        window.location.href = 'https://goodshape.netlify.app/login';
      } catch (erro) {
        console.error(erro);
        alert('Erro ao fazer login!');
      }
    });
  }
  
  function verificaUsuarioAutenticado() {
    const usuarioAutenticado = localStorage.getItem('cliente')
      ? JSON.parse(localStorage.getItem('cliente'))
      : null;
    // const avatar = document.querySelector('#avatar');
  
    if (usuarioAutenticado) {
      window.location.href = 'https://goodshape.netlify.app/menu_cli';
    }
  }
  
  export default { login, verificaUsuarioAutenticado };
