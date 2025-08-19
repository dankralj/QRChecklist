import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
export async function GET(){const sb=supabaseService();const {data,error}=await sb.from('submissions').select('id,submitted_at,status,assets(name),checklists(name)').order('submitted_at',{ascending:false}).limit(50)
if(error) return NextResponse.json({error:error.message},{status:500})
const mapped=(data||[]).map((s:any)=>({id:s.id,submitted_at:s.submitted_at,status:s.status,asset_name:s.assets?.name||'Unknown',checklist_name:s.checklists?.name||'Unknown'}))
return NextResponse.json(mapped)}
