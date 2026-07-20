const tiers = [
  ['Student','US$20/year','Students, youth entrepreneurs and startups'],
  ['Entrepreneur','US$50/year','SMEs, freelancers and consultants'],
  ['Professional','US$100/year','Executives and specialists'],
  ['Business','US$250/year','Established companies and growing SMEs'],
  ['Corporate','US$500+/year','Institutions and corporate partners'],
];

export default function MembershipPage(){
  return <main style={{padding:'48px 24px',maxWidth:'1100px',margin:'auto'}}>
    <h1>Membership</h1>
    <p>Membership gives visibility, credibility, Business Village discounts, directory listing, networking, trade missions and year-round opportunities.</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'18px',marginTop:'24px'}}>
      {tiers.map(([name,price,desc]) => <div className="card" key={name}>
        <h2>{name}</h2><strong>{price}</strong><p>{desc}</p><button>Apply Now</button>
      </div>)}
    </div>
  </main>
}
