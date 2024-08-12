const URL2 = 'https://back-end-live-in-shape-1.onrender.com/salvarHorarios/';
const diaSemanaInput = document.querySelector('.calendar .day.selected')?.dataset.date;
const horaInicioInput = document.getElementById('hora-inicio-input');
const horaFimInput = document.getElementById('hora-fim-input');
const confirmarAgendamento = document.getElementById('confirmar-agendamento');

confirmarAgendamento.onclick = async () => {
  const diaSemana = document.querySelector('.calendar .day.selected')?.dataset.date;
  const horaInicio = horaInicioInput.value;
  const horaFim = horaFimInput.value;

  console.log("Dados:", diaSemana, horaInicio, horaFim);

  if (!horaInicio || !horaFim) {
    alert('Por favor, insira os horários de início e fim.');
    return;
  }

  if (horaInicio >= horaFim) {
    alert('O horário de início deve ser antes do horário de fim.');
    return;
  }

  const agendamento = { diaSemana, horaInicio, horaFim };
  const chaveSecretaToken = '1skljaksdj9983498327453lsldkjf';
  try {
    const resposta = await fetch(URL2, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${chaveSecretaToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(agendamento)
    });

    if (!resposta.ok) {
      const erroTexto = await resposta.text(); // Obtenha o texto da resposta para mais detalhes
      console.log('Erro:', erroTexto);
      throw new Error(`Erro ao salvar horário: ${erroTexto}`);
    }

    console.log('Resposta:', await resposta.json()); // Exibe a resposta em formato JSON
    alert('Horário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    alert(`Erro ao salvar horário`);
  }
};
