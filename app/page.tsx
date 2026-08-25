import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingCallBar from "@/components/FloatingCallBar";

export default function Home() {
  return <main>
    <Header />
    <Hero />
    <TrustSection />
    <StorySection />
    <MenuSection />
    <ReservationSection />
    <LocationSection />
    <Footer />
    <FloatingCallBar />
  </main>;
}
