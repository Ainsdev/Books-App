import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vtxvhzouiujnkblsnlhq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0eHZoem91aXVqbmtibHNubGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMyNTc2OTEsImV4cCI6MTk3ODgzMzY5MX0.YMUW6GGVF7uC9HakADBiYjNNoEAlWXJWTTksyRZqB4s'

export const supabase = createClient(supabaseUrl, supabaseKey)
