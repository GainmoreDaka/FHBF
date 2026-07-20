import './style.css';

export const metadata = {
  title: 'Faith Heights Business Fellowship',
  description: 'Kingdom Business Ecosystem',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/" className="brand">FHBF</a>
          <div>
            <a href="/membership">Membership</a>
            <a href="/village">Business Village</a>
            <a href="/directory">Directory</a>
            <a href="/opportunities">Opportunities</a>
            <a href="/admin">Admin</a>
            <a href="/member">Member</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
