'use client';
import { useState } from 'react';
import { membershipTiers } from '@/lib/pricing';

export default function MembershipPage() {
  const [message, setMessage] = useState('');

  async function submit(e: any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch('/api/membership/apply', { method: 'POST', body: JSON.stringify(payload) });
    const data = await res.json();
    setMessage(`Application submitted. Reference: ${data.reference}`);
    e.currentTarget.reset();
  }

  return (
    <main className="section">
      <h1>Membership Application</h1>
      <p>Join FHBF as part of a year-round Kingdom business ecosystem. Members receive directory listing, Business Village discounts, exposure, opportunities and access to events.</p>
      <div className="grid">
        {membershipTiers.map(t => <div className="card" key={t.name}><h3>{t.name}</h3><h2 className="gold">US${t.price}/year</h2><p>{t.description}</p></div>)}
      </div>

      <div className="notice">Apply below. Payment proof upload is represented by a payment reference field in this prototype.</div>
      {message && <div className="notice">{message}</div>}
      <form onSubmit={submit} className="card">
        <label>Full Name<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Phone / WhatsApp<input name="phone" required /></label>
        <label>Membership Type
          <select name="membershipType">{membershipTiers.map(t => <option key={t.name}>{t.name}</option>)}</select>
        </label>
        <label>Business Name<input name="businessName" /></label>
        <label>Industry<input name="industry" /></label>
        <label>Seven Mountain Category
          <select name="sevenMountain">
            {['Religion/Ministry','Family','Education','Business & Economics','Government','Media & Communication','Arts & Culture'].map(x => <option key={x}>{x}</option>)}
          </select>
        </label>
        <label>Province / City<input name="province" /></label>
        <label>Business Goals<textarea name="goals" rows={4}></textarea></label>
        <label>Payment Reference<input name="paymentRef" placeholder="EcoCash / Bank / ZIPIT reference" /></label>
        <label><input type="checkbox" name="directoryConsent" value="yes" style={{width:'auto'}} /> Include my business in the FHBF Directory</label>
        <button type="submit">Submit Membership Application</button>
      </form>
    </main>
  );
}
