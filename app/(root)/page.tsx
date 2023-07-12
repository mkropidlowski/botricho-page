import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import PageLayout from "@/components/pageLayout/PageLayout";
import SectionsWrapper from "@/components/sectionsWrapper/SectionsWrapper";
import Services from "@/components/services/Services";

export default function Home() {
    return (
        <PageLayout>
            <Hero className="flex flex-col z-[-100] h-[80vh]" />
            <SectionsWrapper>
                <Services />
                <AboutSection />
                <Contact />
                <Footer />
            </SectionsWrapper>
        </PageLayout>
    );
}
