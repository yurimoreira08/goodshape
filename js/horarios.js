const URL = 'https://back-end-live-in-shape-1.onrender.com/salvarHorarios/';
const dia = document.querySelector('.calendar .day.selected')?.dataset.date;
const horaInicioInput = document.getElementById('hora-inicio-input');
const horaFimInput = document.getElementById('hora-fim-input');
const confirmarAgendamento = document.getElementById('confirmar-agendamento');

confirmarAgendamento.onclick = async () => {
    const diaSemana = dia;
    const horaInicio = horaInicioInput.value;
    const horaFim = horaFimInput.value;
    const usuarioId = localStorage.getItem('usuarioId');
 
  
    const agendamento = { diaSemana, horaInicio, horaFim, usuarioId };
  
    const chamada = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(agendamento),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    console.log('chamada:', chamada);
}

