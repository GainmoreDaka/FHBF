const samples = [
  ['Kingdom Solar Solutions','Solar & Energy','Commercial solar, batteries and installations'],
  ['Crown Properties','Property','Development, sales and property management'],
  ['Grace Legal Partners','Legal Services','Corporate, compliance and advisory services'],
];

export default function DirectoryPage() {
  return (
    <main className="section">
      <h1>Business Directory</h1>
      <p>Discover FHBF member businesses, suppliers, professionals and service providers.</p>
      <div className="grid">
        {samples.map(([name,cat,desc]) => <div className="card" key={name}><h3>{name}</h3><p className="gold">{cat}</p><p>{desc}</p><button>View Profile</button></div>)}
      </div>
    </main>
  );
}
