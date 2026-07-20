export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#16002d] text-white">
      <section className="px-6 py-24 text-center">
        <p className="text-[#d4af37] uppercase tracking-[0.35em] text-sm">Faith Heights Business Fellowship</p>
        <h1 className="mt-6 text-5xl font-bold">Building Businesses. Developing Leaders. Transforming Nations.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
          A Kingdom business ecosystem connecting entrepreneurs, professionals, investors, institutions and leaders through networking, trade, investment, learning and opportunity.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="/membership" className="rounded bg-[#d4af37] px-6 py-3 font-bold text-[#16002d]">Apply for Membership</a>
          <a href="/village" className="rounded border border-[#d4af37] px-6 py-3 text-[#d4af37]">Business Village</a>
        </div>
      </section>
    </main>
  );
}
