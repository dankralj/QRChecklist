import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
export async function POST(req:Request){const sb=supabaseService();const form=await req.formData();const asset_id=String(form.get('asset_id')||'');const checklist_id=String(form.get('checklist_id')||'')
if(!asset_id||!checklist_id) return NextResponse.json({error:'Missing ids'},{status:400})
const {data:items,error:e1}=await sb.from('checklist_items').select('id,type,required').eq('checklist_id',checklist_id).order('order_index'); if(e1) return NextResponse.json({error:e1.message},{status:500})
let issue=false; const toInsert:any[]=[]; for(const it of (items||[])){const val=String(form.get(`item_${it.id}`)||''); if(val==='Issue') issue=true; if(it.required&&!val) return NextResponse.json({error:'Missing required fields'},{status:400}); toInsert.push({item_id:it.id,value:val})}
const submission={asset_id,checklist_id,submitted_at:new Date().toISOString(),submitted_by:'public',status:issue?'issue':'ok'}
const {data:subIns,error:e2}=await sb.from('submissions').insert(submission).select('id').single(); if(e2) return NextResponse.json({error:e2.message},{status:500})
const answers=toInsert.map(a=>({...a,submission_id:subIns.id})); const {error:e3}=await sb.from('answers').insert(answers as any); if(e3) return NextResponse.json({error:e3.message},{status:500})
return NextResponse.redirect(`${process.env.APP_URL||'http://localhost:3000'}/thanks`,{status:303})}
