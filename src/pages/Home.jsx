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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <FeatureCards />
        <Services />
        <Pricing />
        <Process />
        <Coverage />
        <Testimonials />
        <Faq />
        <Enquiry />
      </main>
      <SiteFooter />
    </div>
  );
}