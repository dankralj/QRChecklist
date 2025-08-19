import { supabaseService } from '@/lib/supabase'
import QRCode from 'qrcode'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' // ensure Node runtime on Vercel

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const sb = supabaseService()
  const { data, error } = await sb
    .from('assets')
    .select('qr_token')
    .eq('id', params.id)
    .maybeSingle()

  if (error || !data) {
    return new Response('Not found', { status: 404 })
  }

  const url = `${process.env.APP_URL || 'http://localhost:3000'}/p/${data.qr_token}`

  // Generate PNG buffer and wrap in a Blob so it's valid BodyInit
  const png = await QRCode.toBuffer(url, { errorCorrectionLevel: 'M', margin: 1, width: 512 })
  const blob = new Blob([png], { type: 'image/png' })

  return new Response(blob, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'no-store',
    },
  })
}
