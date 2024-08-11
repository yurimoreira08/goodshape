//Esse script é a da tela de agendamento_profissional

document.getElementById('form-disponibilidade').onsubmit = async function(event) {
    event.preventDefault();

    const usuarioId = document.getElementById('usuarioId').value;
    const diaSemana = document.getElementById('diaSemana').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFim = document.getElementById('horaFim').value;

    const response = await fetch('http://localhost:3000/disponibilidades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuarioId,
        diaSemana,
        horaInicio,
        horaFim
      })
    });

    const result = await response.json();

    if (result.error) {
      alert('Erro: ' + result.error);
    } else {
      alert('Disponibilidade cadastrada com sucesso!');
    }
  }