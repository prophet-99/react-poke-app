export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Hello Root Layout Dashboard</h1>
      {children}
    </main>
  );
}
