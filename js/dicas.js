const response = await fetch('https://back-end-live-in-shape-1.onrender.com/dica/adicionar_dicas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topico, conteudo }),
});
