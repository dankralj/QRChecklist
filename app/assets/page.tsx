import Link from 'next/link'
async function getAssets(){const base=process.env.APP_URL||'http://localhost:3000';const res=await fetch(`${base}/api/assets`,{cache:'no-store'});if(!res.ok)return[];return res.json()}
export default async function AssetsPage(){const assets=await getAssets();return(<div className="grid"><div className="card"><h2>Assets</h2><p>Click to view QR, or open the public checklist page.</p><ul>
{assets.map((a:any)=>(<li key={a.id} style={{marginBottom:8}}><strong>{a.name}</strong> — <small>{a.type} · {a.serial}</small> <Link href={`/asset/${a.id}/qr`} className="btn">QR</Link> <Link href={`/p/${a.qr_token}`} className="btn">Public Link</Link></li>))}
</ul></div></div>)}
