const URL = 'https://back-end-live-in-shape-1.onrender.com/horarios/';
const dia = document.querySelector('.calendar .day.selected')?.dataset.date;
const horaInicioInput = document.getElementById('hora-inicio-input');
const horaFimInput = document.getElementById('hora-fim-input');
const confirmarAgendamento = document.getElementById('confirmar-agendamento');

confirmarAgendamento.onclick = async () => {
    const diaSemana = dia;
    const horaInicio = horaInicioInput.value;
    const horaFim = horaFimInput.value;
    const usuarioId = localStorage.getItem('usuarioId'); // Certifique-se de que o 'usuarioId' está armazenado corretamente

    const agendamento = { diaSemana, horaInicio, horaFim, usuarioId };

    try {
        const chamada = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(agendamento),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Inclua o token de autenticação
            }),
        });

        if (!chamada.ok) {
            throw new Error(`Erro ao enviar solicitação: ${chamada.statusText}`);
        }

        console.log('Resposta da chamada:', await chamada.text());
    } catch (erro) {
        console.error('Erro ao chamar a API:', erro);
    }
};
