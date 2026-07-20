export default function HomePage() {
  const pillars = ['Membership', 'Business Directory', 'Business Village', 'Events', 'Trade Missions', 'Opportunities', 'Marketplace', 'Investor Connect'];
  return (
    <main>
      <section className="hero">
        <p className="gold">FAITH HEIGHTS BUSINESS FELLOWSHIP</p>
        <h1>Building Businesses. Developing Leaders. Transforming Nations.</h1>
        <p>A year-round Kingdom business ecosystem connecting entrepreneurs, professionals, investors, institutions and leaders through networking, trade, investment, learning and opportunity.</p>
        <div style={{marginTop: 30}}>
          <a className="btn btn-gold" href="/membership">Apply for Membership</a>
          <a className="btn btn-outline" href="/village">Book Business Village Space</a>
          <a className="btn btn-outline" href="/directory">Explore Directory</a>
        </div>
      </section>
      <section className="section">
        <h2>More Networking. More Growth. More Opportunities.</h2>
        <div className="grid">
          {pillars.map(p => <div className="card" key={p}><h3>{p}</h3><p>Part of the FHBF ecosystem supporting members throughout the year.</p></div>)}
        </div>
      </section>
    </main>
  );
}
