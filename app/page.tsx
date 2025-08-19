import Link from 'next/link'
export default function Home(){return(<div className="grid"><div className="card">
<h2>Welcome</h2><p>Create assets, attach checklists, and print QR codes for shop-floor inspections.</p>
<div className="grid" style={{gridTemplateColumns:'1fr 1fr 1fr'}}>
<Link className="btn" href="/setup">Quick Setup</Link>
<Link className="btn" href="/assets">View Assets</Link>
<Link className="btn" href="/submissions">Latest Submissions</Link></div></div></div>)}
