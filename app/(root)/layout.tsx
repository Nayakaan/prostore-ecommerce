import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        <Header />
        <main className="flex-1 wrapper">{ children }</main>
        <Footer />
      </main>
    </div>
  );
}