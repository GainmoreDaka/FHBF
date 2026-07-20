export default function AdminPage(){
  const cards = ['Pending Applications','Active Members','Village Bookings','Pending Payments','Directory Listings','Upcoming Events'];
  return <main style={{padding:'48px 24px'}}>
    <h1>FHBF Admin Dashboard</h1>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'18px'}}>
      {cards.map(c => <div className="card" key={c}><h2>{c}</h2><p>0</p></div>)}
    </div>
  </main>
}
