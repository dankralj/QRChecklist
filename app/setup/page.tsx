'use client'
import { useState } from 'react'
export default function SetupPage(){const[loading,setLoading]=useState(false);const[msg,setMsg]=useState<string|null>(null)
const seed=async()=>{setLoading(true);setMsg(null);const res=await fetch('/api/seed',{method:'POST'});const data=await res.json();setLoading(false);if(res.ok)setMsg(`Seeded: ${data.assets} assets, ${data.items} items`);else setMsg(`Error: ${data.error}`)}
return(<div className="card"><h2>Quick Setup</h2><ol><li>Create demo data</li><li>Go to Assets, print the QR, try a public submission.</li></ol>
<button className="btn" onClick={seed} disabled={loading}>{loading?'Seeding…':'Seed Demo Data'}</button>{msg&&<p><small>{msg}</small></p>}</div>)}
