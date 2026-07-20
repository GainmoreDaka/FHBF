'use client';
import { useState } from 'react';
import { villagePricing, getVillagePrice } from '@/lib/pricing';

export default function VillagePage() {
  const [standType, setStandType] = useState(villagePricing[0].type);
  const [isMember, setIsMember] = useState('yes');
  const [message, setMessage] = useState('');
  const price = getVillagePrice(standType, isMember === 'yes');

  async function submit(e: any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(form.entries()), amountDue: price };
    const res = await fetch('/api/village/book', { method: 'POST', body: JSON.stringify(payload) });
    const data = await res.json();
    setMessage(`Booking submitted. Reference: ${data.reference}. Amount due: US$${data.amountDue}`);
    e.currentTarget.reset();
  }

  return (
    <main className="section">
      <h1>Faith Heights Business Village Booking</h1>
      <p>The Business Village is the current featured event, but FHBF remains a year-round business platform.</p>
      <table>
        <thead><tr><th>Space Type</th><th>Member Price</th><th>Non-Member Price</th></tr></thead>
        <tbody>{villagePricing.map(v => <tr key={v.type}><td>{v.type}</td><td>US${v.member}</td><td>US${v.nonMember}</td></tr>)}</tbody>
      </table>
      {message && <div className="notice">{message}</div>}
      <form onSubmit={submit} className="card" style={{marginTop:24}}>
        <label>Applicant Name<input name="applicantName" required /></label>
        <label>Business Name<input name="businessName" required /></label>
        <label>Email<input name="email" type="email" /></label>
        <label>Phone / WhatsApp<input name="phone" required /></label>
        <label>Are you an FHBF member?
          <select name="isMember" value={isMember} onChange={e => setIsMember(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>Membership Number<input name="membershipNo" placeholder="FHBF-2026-000001" /></label>
        <label>Space Type
          <select name="standType" value={standType} onChange={e => setStandType(e.target.value)}>
            {villagePricing.map(v => <option key={v.type}>{v.type}</option>)}
          </select>
        </label>
        <div className="notice"><strong>Amount Due: US${price}</strong></div>
        <label>Payment Reference<input name="paymentRef" /></label>
        <button type="submit">Submit Village Booking</button>
      </form>
    </main>
  );
}
