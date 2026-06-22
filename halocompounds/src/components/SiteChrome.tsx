import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ComplianceBar from "@/components/ComplianceBar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ComplianceBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </>
  );
}
