import { createClient } from '@supabase/supabase-js';

// Initialiser Supabase avec ton URL et ta clé API
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);
