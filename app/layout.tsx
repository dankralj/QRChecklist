import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'QR Checklist', description: 'Scan. Inspect. Comply.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="container">
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}}>
      <div><h1>QR Checklist</h1><small>Scan. Inspect. Comply.</small></div>
      <nav style={{display:'flex',gap:12}}>
        <Link href="/">Home</Link><Link href="/assets">Assets</Link><Link href="/submissions">Submissions</Link><Link href="/setup">Setup</Link>
      </nav>
    </header><hr/>{children}</div></body></html>) }