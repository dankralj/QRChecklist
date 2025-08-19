import Link from 'next/link'
export default function AssetPage({ params }:{ params:{ id:string }}){return(<div className="card"><h2>Asset</h2><p>Use the QR page to print labels.</p><Link href={`/asset/${params.id}/qr`} className="btn">Show QR</Link></div>)}
