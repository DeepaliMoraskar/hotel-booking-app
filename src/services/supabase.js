
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://wnwgvezaajkzmpssahrr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indud2d2ZXphYWprem1wc3NhaHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjY4ODAsImV4cCI6MjA2Mjc0Mjg4MH0.ywwzKKlb6srFC0c1vivJeGNCgAgBYnkwLHTKOPwpzSg'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;