import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TeamHighlight from "@/components/sections/TeamHighlight";
import CaseStudies from "@/components/sections/CaseStudies";
import AboutBlurb from "@/components/sections/AboutBlurb";
import Insights from "@/components/sections/Insights";
import Testimonials from "@/components/sections/Testimonials";
import ContactCta from "@/components/sections/ContactCta";
import Footer from "@/components/Footer";
import { homepageContent } from "@/content";

export default function Home() {
  return (
    <>
      <Navbar content={homepageContent.navbar} />
      <main className="flex min-h-screen flex-col">
        <Hero content={homepageContent.hero} />
        <Services content={homepageContent.services} />
        <TeamHighlight content={homepageContent.teamHighlight} />
        <CaseStudies content={homepageContent.caseStudies} />
        <AboutBlurb content={homepageContent.aboutBlurb} />
        <Insights content={homepageContent.insights} />
        <Testimonials content={homepageContent.testimonials} />
        <ContactCta content={homepageContent.contactCta} />
        <Footer content={homepageContent.footer} />
      </main>
    </>
  );
}
