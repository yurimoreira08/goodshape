//js dos planos
const botao = document.querySelector('.conheca');
const divConteudo = document.querySelector('.conteudo');

botao.addEventListener('click', () => {
    divConteudo.classList.toggle('oculta');
})

const botao1 = document.querySelector('.conheca1');
const divConteudo1 = document.querySelector('.conteudo1');

botao1.addEventListener('click', () => {
    divConteudo1.classList.toggle('oculta1');
})

const botao2 = document.querySelector('.conheca2');
const divConteudo2 = document.querySelector('.conteudo2');

botao2.addEventListener('click', () => {
    divConteudo2.classList.toggle('oculta2');
})

document.addEventListener('DOMContentLoaded', () => {
    const adicionarHorarioButton = document.querySelector('#adicionarHorario');
    const confirmarPlanejamentoButton = document.querySelector('#confirmarPlanejamento');
    const horarioInicioInput = document.querySelector('#horarioInicio');
    const horarioFimInput = document.querySelector('#horarioFim');
    const listaHorarios = document.querySelector('#listaHorarios');
    
    let horarios = [];

    adicionarHorarioButton.addEventListener('click', () => {
        const horarioInicio = horarioInicioInput.value;
        const horarioFim = horarioFimInput.value;

        if (horarioInicio && horarioFim) {
            const horario = {
                inicio: horarioInicio,
                fim: horarioFim
            };
            
            horarios.push(horario);
            atualizarListaHorarios();
            
            horarioInicioInput.value = '';
            horarioFimInput.value = '';
        } else {
            alert('Por favor, preencha ambos os campos de horário.');
        }
    });

    function atualizarListaHorarios() {
        listaHorarios.innerHTML = '';
        horarios.forEach((horario, index) => {
            listaHorarios.innerHTML += `<p>Horário ${index + 1}: ${horario.inicio} - ${horario.fim}</p>`;
        });
    }

    confirmarPlanejamentoButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/salvar-horarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    horarios: horarios
                }),
            });

            if (response.ok) {
                alert('Horários confirmados!');
                horarios = [];
                atualizarListaHorarios();
            } else {
                alert('Erro ao salvar horários.');
            }
        } catch (error) {
            console.error('Erro ao confirmar horários:', error);
            alert('Erro ao confirmar horários.');
        }
    });
});
