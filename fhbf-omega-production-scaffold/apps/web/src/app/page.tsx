export default function HomePage() {
  return (
    <main>
      <section style={{background:'linear-gradient(135deg,#1e003c,#3d0066)',color:'white',padding:'96px 24px',textAlign:'center'}}>
        <p style={{color:'#d4af37',letterSpacing:'0.35em',textTransform:'uppercase'}}>Faith Heights Business Fellowship</p>
        <h1 style={{fontSize:'52px',maxWidth:'1000px',margin:'24px auto'}}>Building Businesses. Developing Leaders. Transforming Nations.</h1>
        <p style={{maxWidth:'850px',margin:'0 auto',fontSize:'20px',opacity:.9}}>
          A year-round Kingdom business ecosystem connecting entrepreneurs, professionals, investors, institutions and leaders through networking, trade, investment, learning and opportunity.
        </p>
        <div style={{marginTop:'36px',display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <a className="btn-gold" href="/membership">Apply for Membership</a>
          <a className="btn-outline" href="/village">Business Village</a>
          <a className="btn-outline" href="/directory">Business Directory</a>
        </div>
      </section>
      <section style={{padding:'64px 24px',maxWidth:'1100px',margin:'auto'}}>
        <h2>What FHBF Helps Members Do</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'18px'}}>
          {['Build relationships','Find customers','Access markets','Join trade missions','Exhibit at events','Meet investors','Promote businesses','Influence society'].map(item => <div className="card" key={item}>{item}</div>)}
        </div>
      </section>
    </main>
  )
}
