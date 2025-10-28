import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Connect from "@/components/Connect";
import GetInvolved from "@/components/GetInvolved";
import StayConnected from "@/components/StayConnected";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Events />
        <Connect />
        <GetInvolved />
        <StayConnected />
      </main>
      <Footer />
    </div>
  );
}
