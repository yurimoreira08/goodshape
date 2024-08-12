const URL2 = 'https://back-end-live-in-shape-1.onrender.com/salvarHorarios/';
const dia = document.querySelector('.calendar .day.selected')?.dataset.date;
const horaInicioInput = document.getElementById('hora-inicio-input');
const horaFimInput = document.getElementById('hora-fim-input');
const confirmarAgendamento = document.getElementById('confirmar-agendamento');

confirmarAgendamento.onclick = async () => {
  const dia = document.querySelector('.calendar .day.selected')?.dataset.date;
  const horaInicio = horaInicioInput.value;
  const horaFim = horaFimInput.value;
 
 
  console.log("dados", dia, horaInicio, horaFim);

  if (!dia) {
    alert('Por favor, selecione um dia no calendário.');
    return;
  }

  if (!horaInicio || !horaFim) {
    alert('Por favor, insira os horários de início e fim.');
    return;
  }

  if (horaInicio >= horaFim) {
    alert('O horário de início deve ser antes do horário de fim.');
    return;
  }

  const agendamento = { diaSemana: dia, horaInicio, horaFim};

  try {
    const chamada = await fetch(URL2, {
      method: 'POST',
      body: JSON.stringify(agendamento),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Envie o token aqui
      }),
    });
    
    if (!chamada.ok) {
      throw new Error('Erro ao salvar horário.');
    }

    console.log('Chamada:', chamada);
    alert('Horário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    alert('Erro ao salvar horário.');
  }
}
