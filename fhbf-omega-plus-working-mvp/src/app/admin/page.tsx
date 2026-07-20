import { readJson } from '@/lib/storage';

export default function AdminPage() {
  const applications = readJson<any[]>('membership-applications.json', []);
  const bookings = readJson<any[]>('village-bookings.json', []);

  return (
    <main className="section">
      <h1>FHBF Admin Preview</h1>
      <div className="grid">
        <div className="card dark-card"><h2>{applications.length}</h2><p>Membership Applications</p></div>
        <div className="card dark-card"><h2>{bookings.length}</h2><p>Village Bookings</p></div>
        <div className="card dark-card"><h2>US${bookings.reduce((s,b)=>s+Number(b.amountDue||0),0)}</h2><p>Village Revenue Pipeline</p></div>
      </div>

      <h2>Membership Applications</h2>
      <table>
        <thead><tr><th>Reference</th><th>Name</th><th>Type</th><th>Business</th><th>Status</th></tr></thead>
        <tbody>{applications.map(a => <tr key={a.reference}><td>{a.reference}</td><td>{a.name}</td><td>{a.membershipType}</td><td>{a.businessName}</td><td>{a.status}</td></tr>)}</tbody>
      </table>

      <h2>Village Bookings</h2>
      <table>
        <thead><tr><th>Reference</th><th>Business</th><th>Space</th><th>Member?</th><th>Amount</th></tr></thead>
        <tbody>{bookings.map(b => <tr key={b.reference}><td>{b.reference}</td><td>{b.businessName}</td><td>{b.standType}</td><td>{b.isMember}</td><td>US${b.amountDue}</td></tr>)}</tbody>
      </table>
    </main>
  );
}
