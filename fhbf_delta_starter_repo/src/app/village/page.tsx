const stands = [
  ["Emerging Entrepreneur", "$30", "$60"],
  ["Standard Indoor Stand", "$100", "$150"],
  ["Premium Indoor Stand", "$150", "$250"],
  ["Outdoor Display", "$150", "$250"],
  ["Vehicle Display", "$200", "$350"],
  ["Equipment Display", "$250", "$400"]
];

export default function VillagePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ff] px-6 py-16">
      <h1 className="text-4xl font-bold text-[#16002d]">Faith Heights Business Village</h1>
      <p className="mt-4 max-w-3xl text-gray-700">The flagship annual marketplace and networking hub, while FHBF remains a year-round business ecosystem.</p>
      <div className="mt-10 overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-[#16002d] text-white">
            <tr><th className="p-4 text-left">Space</th><th className="p-4">Member</th><th className="p-4">Non-member</th></tr>
          </thead>
          <tbody>
            {stands.map(([space, member, non]) => (
              <tr key={space} className="border-t">
                <td className="p-4 font-semibold">{space}</td><td className="p-4 text-center">{member}</td><td className="p-4 text-center">{non}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
