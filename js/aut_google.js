supabase.auth.signInWithOAuth({
    provider: 'google',
})

const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
        queryParams: {
            access_type: 'offline',
            prompt: 'consent',
        },
    },
})

import crypto from 'crypto'

const nonce = crypto.randomBytes(16).toString('base64') // Generate a random nonce
const encoder = new TextEncoder()
const encodedNonce = encoder.encode(nonce) // Encode the nonce
const hash = await crypto.subtle.digest('SHA-256', encodedNonce) // Hash it with SHA-256
const bytes = new Uint8Array(hash)
const hashedNonce = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0')) // Convert the hash to a hexadecimal string
    .join('')

 const botaoLoginGoogle = document.getElementById('g_id_onload');

    botaoLoginGoogle.addEventListener('click', async () => {
      try {
        // Iniciar login Google OAuth
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline', // Opcional
              prompt: 'consent',      // Opcional
            },
          },
        });
    
        if (error) {
          // Lidar com erro de autenticação
          console.error('Erro de login:', error);
          // Informar o usuário sobre o erro
        } else {
          // Login bem-sucedido!
          alert('Login bem-sucedido:', data);
          window.location.href = 'https://goodshape.netlify.app/cliente/menu_cli';
        }
      } catch (error) {
        // Lidar com erros inesperados
        console.error('Erro inesperado:', error);
      }
    });