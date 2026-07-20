const items = [
  ['Tender','Construction supplier needed for commercial renovation'],
  ['Partnership','Distribution partner wanted for solar products'],
  ['Investment','Agribusiness seeking working capital partner'],
  ['Job','Operations manager required for growing SME'],
];

export default function OpportunitiesPage() {
  return (
    <main className="section">
      <h1>Opportunities Hub</h1>
      <p>Jobs, tenders, partnerships, franchises and investment opportunities for FHBF members.</p>
      <div className="grid">
        {items.map(([type,title]) => <div className="card" key={title}><p className="gold">{type}</p><h3>{title}</h3><button>View Opportunity</button></div>)}
      </div>
    </main>
  );
}
