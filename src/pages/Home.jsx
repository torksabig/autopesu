import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import Intro from "@/components/site/Intro";
import FeatureCards from "@/components/site/FeatureCards";
import Services from "@/components/site/Services";
import Pricing from "@/components/site/Pricing";
import Process from "@/components/site/Process";
import Coverage from "@/components/site/Coverage";
import Testimonials from "@/components/site/Testimonials";
import Faq from "@/components/site/Faq";
import Enquiry from "@/components/site/Enquiry";
import SiteFooter from "@/components/site/SiteFooter";
import OfferPopup from "@/components/site/OfferPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <OfferPopup />
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Testimonials />
        <FeatureCards />
        <Pricing />
        <Services />
        <Process />
        <Coverage />
        <Faq />
        <Enquiry />
      </main>
      <SiteFooter />
    </div>
  );
}