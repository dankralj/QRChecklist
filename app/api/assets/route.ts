import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
export async function GET(){const sb=supabaseService();const {data,error}=await sb.from('assets').select('*').order('name'); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json(data)}
