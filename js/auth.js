const { GoogleOAuth20Strategy } = require('passport-google-oauth20');
const { initialize } = require('@supabase/supabase-js');
const { AuthClient } = require('@supabase/auth-helpers');

const supabase = initialize('https://lldvmurqmxurewopswzw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZHZtdXJxbXh1cmV3b3Bzd3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjkzNDYsImV4cCI6MjAxNDI0NTM0Nn0.YCXfD2NhypOGMFFPgCAPnrttpk8cA_td_mzD5PNeErI');
const auth = new AuthClient(supabase);

const passport = require('passport');

passport.use(
    new GoogleOAuth20Strategy({
        clientID: '689853966923-e0boo3ldh7n6371gsu3pl5rrq8qretck.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'https://goodshape.netlify.app/profissional/menu_pro',
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await auth.signInWithGoogle(accessToken, profile);
            alert('Usuário autenticado:', user);
            done(null, user);
        } catch (error) {
            alert('Erro na autenticação do Google:', error);
            done(error);
        }
    })
);
