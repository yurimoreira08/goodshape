function verificaUsuarioAutenticado() {
  const usuarioAutenticado = localStorage.getItem('usuario')
    ? JSON.parse(localStorage.getItem('usuario'))
    : null;
  
  if (!usuarioAutenticado) {
    window.location.href = 'https://goodshape.netlify.app/login';
  } else {
    // Opcional: atualizar UI com base no usuário
    // const avatar = document.querySelector('#avatar');
    // if (avatar) {
    //   avatar.title = usuarioAutenticado.nome;
    // }
  }
}


function logout() {
  const btnSair = document.querySelector('#btnSair');
  
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      // Remover itens do localStorage
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      localStorage.removeItem('tipo'); // Opcional, se você estiver armazenando o tipo de usuário separadamente

      // Redirecionar para a página de login
      window.location.href = 'https://goodshape.netlify.app/login';
    });
  }
}


// async function carregarUsuarios() {
//   if (!usuarioAutenticado) {
//     return;
//   }
//   try {
//     const resposta = await fetch('http://localhost:3000/clientes', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     const usuarios = await resposta.json();
//     const tbody = document.querySelector('tbody');
//     usuarios.forEach((usuario) => {
//       const tr = `<tr>
//     <td>${usuario.nome}</td>
//     <td>${usuario.email}</td>
//     <td><a href="#">alterar</a></td>
//   </tr>`;
//       tbody.innerHTML += tr;
//     });
//   } catch (erro) {
//     console.error(erro);
//     alert('Erro ao carregar usuários!');
//   }
// }

export default { verificaUsuarioAutenticado, logout };
