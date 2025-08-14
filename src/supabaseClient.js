import { createClient } from '@supabase/supabase-js'

// Configuração temporária para desenvolvimento
// Para usar o Supabase real, substitua as credenciais abaixo
const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Configuração para desenvolvimento local
// Você precisará substituir as credenciais acima pelas suas do Supabase
// Para obter essas credenciais:
// 1. Acesse https://supabase.com
// 2. Crie um novo projeto
// 3. Vá em Settings > API
// 4. Copie a URL e a anon key

// Para desenvolvimento, vamos usar dados mockados
export const isDevelopment = true 