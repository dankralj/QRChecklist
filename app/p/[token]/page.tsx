import { getAssetByToken, getChecklistForAsset, getChecklistItems } from '@/lib/data'
export default async function PublicChecklist({ params }:{ params:{ token:string }}){
  const asset=await getAssetByToken(params.token); if(!asset) return <div className="card"><h2>Not Found</h2><p>Invalid or expired code.</p></div>
  const checklist=await getChecklistForAsset(asset.id); const items=checklist?await getChecklistItems(checklist.id):[]
  return(<div className="card"><h2>{asset.name}</h2><p><small>Serial: {asset.serial}</small></p>
  {!checklist&&<p>No checklist assigned.</p>}{checklist&&(<form action={`/api/submit`} method="POST" className="grid">
  <input type="hidden" name="asset_id" value={asset.id}/><input type="hidden" name="checklist_id" value={checklist.id}/>
  {items.map((it:any)=>(<div key={it.id}><label><strong>{it.order_index}. {it.prompt}</strong></label>
  {it.type==='boolean'&&(<select className="select" name={`item_${it.id}`} required={it.required}><option value="">Select…</option><option value="OK">OK</option><option value="Issue">Issue</option></select>)}
  {it.type==='text'&&(<input className="input" name={`item_${it.id}`} placeholder="Enter notes"/>)}
  {it.type==='number'&&(<input className="input" type="number" step="any" name={`item_${it.id}`}/>)}
  </div>))}<button className="btn" type="submit">Submit Checklist</button></form>)}</div>)}
