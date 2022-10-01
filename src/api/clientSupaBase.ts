import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vtxvhzouiujnkblsnlhq.supabase.co'
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_URL
export const supabase = createClient(supabaseUrl, supabaseKey)
