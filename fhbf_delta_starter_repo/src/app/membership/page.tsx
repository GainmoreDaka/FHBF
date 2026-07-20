const tiers = [
  ["Student", "$20/year", "Students, young entrepreneurs and startups."],
  ["Entrepreneur", "$50/year", "Sole traders, SMEs, freelancers and consultants."],
  ["Professional", "$100/year", "Executives, specialists and professionals."],
  ["Business", "$250/year", "Established companies and growing SMEs."],
  ["Corporate", "$500+/year", "Institutions, sponsors and corporate partners."]
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-[#16002d]">Membership</h1>
      <p className="mt-4 max-w-3xl text-gray-700">Membership gives access to directory listing, Business Village discounts, networking, trade missions, opportunities, mentorship and promotion.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map(([name, price, desc]) => (
          <div key={name} className="rounded-xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#16002d]">{name}</h2>
            <p className="mt-2 text-xl font-semibold text-[#d4af37]">{price}</p>
            <p className="mt-3 text-gray-600">{desc}</p>
            <button className="mt-6 rounded bg-[#16002d] px-4 py-2 text-white">Apply Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
