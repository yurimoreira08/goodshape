const response = await fetch('http://localhost:3000/profissional/adicionar_dicas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topico, conteudo }),
});
