import { createClient } from '@supabase/supabase-js';

// Initialiser Supabase avec ton URL et ta clé API
const supabaseUrl = 'https://qvpbynnwbwtzghexirlc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cGJ5bm53Ynd0emdoZXhpcmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzODcwNzAsImV4cCI6MjA0MTk2MzA3MH0.Yqb9sJBg4yh6Rj9xuVl8JUqLYRVUZ3OIJMgY9u6D_AY';
export const supabase = createClient(supabaseUrl, supabaseKey);
