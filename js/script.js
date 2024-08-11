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

//alert tela das chamadas
function confirmCall() {
    alert("Horários confirmados!")
}
document.addEventListener('DOMContentLoaded', () => {
    const resultadosContainer = document.querySelector('.resultados');
    const searchInput = document.querySelector('.barraPesquisa .procurar');
    const searchIcon = document.querySelector('.barraPesquisa ion-icon[name="search-outline"]');

    // URL da API no Render
    const apiUrl = 'https://https://back-end-live-in-shape-1.onrender.com/profissionais';

    // Função para carregar e exibir os profissionais
    const loadProfissionais = async (query = '') => {
        try {
            const response = await fetch(`${apiUrl}?search=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const profissionais = await response.json();

            resultadosContainer.innerHTML = '';

            if (profissionais.length === 0) {
                resultadosContainer.innerHTML = '<p>Nenhum profissional encontrado.</p>';
                return;
            }

            profissionais.forEach(profissional => {
                const profissionalHTML = `
                    <a href="ver_profissionais.html?id=${profissional.id}" class="button_buscar-profissionais">
                        <div class="profissional-buscar">
                            <div class="ion-alinhar-buscar">
                                <ion-icon name="person" class="aumentar-person-buscar"></ion-icon>
                            </div>
                            <div class="alinhar-ion-buscar">
                                <h2>${profissional.nome} ${profissional.sobreNome}</h2>
                                <p>${profissional.tipo}</p>
                            </div>
                        </div>
                    </a>
                `;
                resultadosContainer.innerHTML += profissionalHTML;
            });
        } catch (error) {
            console.error('Erro ao buscar profissionais:', error);
        }
    };

    // Carregar profissionais ao iniciar a página
    loadProfissionais();

    // Função para buscar profissionais ao clicar no ícone de pesquisa
    searchIcon.addEventListener('click', () => {
        loadProfissionais(searchInput.value);
    });

    // Função para buscar profissionais ao digitar no campo de pesquisa
    searchInput.addEventListener('input', () => {
        loadProfissionais(searchInput.value);
    });
});
console.log('Search input value:', searchInput.value);
console.log('Fetching data from:', `${apiUrl}?search=${encodeURIComponent(query)}`);
