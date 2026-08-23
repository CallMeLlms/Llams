import Nav from "@/components/layout/Nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="paper-background min-h-screen overflow-x-hidden text-foreground">
      <Nav />
      {children}
    </div>
  );
}