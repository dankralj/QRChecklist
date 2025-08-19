import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
import QRCode from 'qrcode'
export const dynamic='force-dynamic'
export async function GET(_:Request,{params}:{params:{id:string}}){const sb=supabaseService();const {data,error}=await sb.from('assets').select('qr_token').eq('id',params.id).maybeSingle()
if(error||!data) return new NextResponse('Not found',{status:404})
const url=`${process.env.APP_URL||'http://localhost:3000'}/p/${data.qr_token}`; const png=await QRCode.toBuffer(url,{errorCorrectionLevel:'M',margin:1,width:512})
return new NextResponse(png,{headers:{'Content-Type':'image/png','Cache-Control':'no-store'}})}
