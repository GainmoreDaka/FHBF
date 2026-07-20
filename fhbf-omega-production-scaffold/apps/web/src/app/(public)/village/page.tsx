const pricing = [
  ['Emerging Entrepreneur','US$30','US$60'],
  ['Standard Indoor','US$100','US$150'],
  ['Premium Indoor','US$150','US$250'],
  ['Outdoor Display','US$150','US$250'],
  ['Vehicle Display','US$200','US$350'],
  ['Equipment Display','US$250','US$400'],
];

export default function VillagePage(){
  return <main style={{padding:'48px 24px',maxWidth:'1100px',margin:'auto'}}>
    <h1>Faith Heights Business Village</h1>
    <p>The Business Village is the current featured event, while FHBF remains a year-round business ecosystem.</p>
    <table style={{width:'100%',borderCollapse:'collapse',marginTop:'24px'}}>
      <thead><tr style={{background:'#1e003c',color:'#fff'}}><th>Space</th><th>Member</th><th>Non-member</th></tr></thead>
      <tbody>{pricing.map(row => <tr key={row[0]}>{row.map(col => <td style={{border:'1px solid #ddd',padding:'14px'}} key={col}>{col}</td>)}</tr>)}</tbody>
    </table>
  </main>
}
