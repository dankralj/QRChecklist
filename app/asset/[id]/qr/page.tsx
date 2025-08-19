export default async function AssetQR({ params }:{ params:{ id:string }}){
  return(<div className="card"><h2>QR Code</h2><p>Print and stick on the asset. Anyone can scan to open the checklist.</p>
  <img alt="QR" src={`/api/asset/${params.id}/qr`} style={{width:280,height:280,background:'#fff',padding:10,borderRadius:12}}/></div>)}
