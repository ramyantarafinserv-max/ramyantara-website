import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yjiwgellliymqmxejgee.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaXdnZWxsbGl5bXFteGVqZ2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MjQwNzcsImV4cCI6MjA0MTMwMDA3N30.mbhlEClwT1yQJG-unqIEjvf9wZHVKpaUALNpRchdT04'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
