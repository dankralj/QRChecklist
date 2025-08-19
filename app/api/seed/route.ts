import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
import crypto from 'node:crypto'
export async function POST(){const sb=supabaseService();const accountId=crypto.randomUUID();const assetId=crypto.randomUUID();const checklistId=crypto.randomUUID();const token=crypto.randomUUID().replace(/-/g,'')
const e1=await sb.from('accounts').insert([{id:accountId,name:'Demo Co'}]); if(e1.error) return NextResponse.json({error:e1.error.message},{status:500})
const e2=await sb.from('assets').insert([{id:assetId,account_id:accountId,name:'Forklift A',type:'forklift',serial:'FL-001',qr_token:token}]); if(e2.error) return NextResponse.json({error:e2.error.message},{status:500})
const e3=await sb.from('checklists').insert([{id:checklistId,account_id:accountId,name:'Daily Forklift Inspection',version:1,is_active:true}]); if(e3.error) return NextResponse.json({error:e3.error.message},{status:500})
const items=[
{checklist_id:checklistId,order_index:1,prompt:'Tires & wheels',type:'boolean',required:true},
{checklist_id:checklistId,order_index:2,prompt:'Forks & mast condition',type:'boolean',required:true},
{checklist_id:checklistId,order_index:3,prompt:'Hydraulic leaks observed?',type:'boolean',required:true},
{checklist_id:checklistId,order_index:4,prompt:'Battery/charge level (%)',type:'number',required:true},
{checklist_id:checklistId,order_index:5,prompt:'Notes',type:'text',required:false},
]; const e4=await sb.from('checklist_items').insert(items as any); if(e4.error) return NextResponse.json({error:e4.error.message},{status:500})
const e5=await sb.from('asset_checklists').insert([{asset_id:assetId,checklist_id:checklistId}]); if(e5.error) return NextResponse.json({error:e5.error.message},{status:500})
return NextResponse.json({assets:1,items:items.length,token})}
