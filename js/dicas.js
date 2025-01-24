const response = await fetch('http://goodshape.netlify.app/profissional/adicionar_dicas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topico, conteudo }),
});
