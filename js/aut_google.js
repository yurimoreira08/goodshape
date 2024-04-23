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