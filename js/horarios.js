const URL2 = 'https://back-end-live-in-shape-1.onrender.com/salvarHorarios/';
const diaSemana = document.querySelector('.calendar .day.selected')?.dataset.date;
const horaInicioInput = document.getElementById('hora-inicio-input');
const horaFimInput = document.getElementById('hora-fim-input');
const confirmarAgendamento = document.getElementById('confirmar-agendamento');

confirmarAgendamento.addEventListener('click', async () => {
  const selectedDate = document.querySelector('.calendar .day.selected')?.dataset.date;
  const selectedHoraInicio = horaInicioInput.value;
  const selectedHoraFim = horaFimInput.value;

  if (!selectedDate) {
      alert('Por favor, selecione uma data.');
      return;
  }

  if (!selectedHoraInicio || !selectedHoraFim) {
      alert('Por favor, insira os horários de início e fim.');
      return;
  }

  if (selectedHoraInicio >= selectedHoraFim) {
      alert('O horário de início deve ser antes do horário de fim.');
      return;
  }

  try {
      const resposta = await fetch('https://back-end-live-in-shape-1.onrender.com/salvarHorarios', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}` // Adicione o token de autenticação se necessário
          },
          body: JSON.stringify({
              date: selectedDate,
              inicio: selectedHoraInicio,
              fim: selectedHoraFim,
              profissional: 'Danielle Silva' // Substitua com o nome do profissional real
          })
      });

      if (!resposta.ok) {
          throw new Error('Erro ao salvar a disponibilidade.');
      }

      alert('Horário definido com sucesso!');
  } catch (erro) {
      console.error('Erro ao salvar disponibilidade:', erro.message);
  }
});
