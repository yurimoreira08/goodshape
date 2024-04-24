supabase.auth.signInWithOAuth({
    provider: 'google',
})

const { data, error } = supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
        queryParams: {
            access_type: 'offline',
            prompt: 'consent',
        },
    },
})

async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
      nonce: 'NONCE', // must be the same one as provided in data-nonce (if any)
    })
  }

    const chamada = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(response),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
    
      console.log('chamada:', chamada);
      if (chamada.status == 201) {
        alert('salvo com sucesso');
        window.location.href = 'https://goodshape.netlify.app/cliente/planos';
      } else {
        // tratar erro
      }
    