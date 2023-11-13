const URL = 'http://localhost:3000/usuarios/';
const tbody = document.querySelector('tbody');

async function carregaUsuarios() {
  const chamada = await fetch(URL);
  console.log(chamada);
  if (chamada.status == 200) {
    tbody.innerHTML = '';
    const usuarios = await chamada.json();
    usuarios.forEach((usuario) => {
      tbody.innerHTML =
        tbody.innerHTML +
        `
      <tr>
      <td>${usuario.id}</td>
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
    </tr>
      `;
    });
  } else {
    //tratar erro
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  carregaUsuarios();
});