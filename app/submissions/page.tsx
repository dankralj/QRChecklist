async function getSubs(){const base=process.env.APP_URL||'http://localhost:3000';const res=await fetch(`${base}/api/submissions`,{cache:'no-store'});if(!res.ok)return[];return res.json()}
export default async function SubmissionsPage(){const subs=await getSubs();return(<div className="card"><h2>Latest Submissions</h2><p><small>Demo only (no auth).</small></p><ul>
{subs.map((s:any)=>(<li key={s.id}><strong>{s.asset_name}</strong> — {s.checklist_name} — {new Date(s.submitted_at).toLocaleString()} — <em>{s.status}</em></li>))}
</ul></div>)}
