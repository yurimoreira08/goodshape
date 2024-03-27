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
        console.log(cliente)
        const resposta = await fetch('https://back-end-live-in-shape-1.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cliente),
        });
        console.log(resposta)
        const dados = await resposta.json();
        localStorage.setItem('token', dados.token);
        localStorage.setItem('cliente', JSON.stringify(dados.cliente));
        window.location.href = 'https://goodshape.netlify.app/menu_cli.html';
      } catch (erro) {
        console.log(cliente)
        console.error(erro);
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
