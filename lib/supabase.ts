import { createClient } from '@supabase/supabase-js'
export function supabaseService(){const url=process.env.SUPABASE_URL!;const key=process.env.SUPABASE_SERVICE_ROLE!;if(!url||!key) throw new Error('Missing Supabase service env vars');return createClient(url,key,{auth:{persistSession:false}})}
export function supabaseAnon(){const url=process.env.SUPABASE_URL!;const key=process.env.SUPABASE_ANON_KEY!;if(!url||!key) throw new Error('Missing Supabase anon env vars');return createClient(url,key)}
