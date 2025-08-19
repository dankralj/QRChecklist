import { supabaseService } from './supabase'
export async function getAssets(){const sb=supabaseService();const {data}=await sb.from('assets').select('*').order('name');return data||[]}
export async function getAssetByToken(token:string){const sb=supabaseService();const {data}=await sb.from('assets').select('*').eq('qr_token',token).maybeSingle();return data||null}
export async function getChecklistForAsset(asset_id:string){const sb=supabaseService();const {data}=await sb.from('asset_checklists').select('checklist_id, checklists(*)').eq('asset_id',asset_id).maybeSingle();return (data&&(data as any).checklists)||null}
export async function getChecklistItems(checklist_id:string){const sb=supabaseService();const {data}=await sb.from('checklist_items').select('*').eq('checklist_id',checklist_id).order('order_index');return data||[]}
