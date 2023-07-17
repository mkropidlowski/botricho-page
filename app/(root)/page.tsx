import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import PageLayout from "@/components/pageLayout/PageLayout";
import SectionsWrapper from "@/components/sectionsWrapper/SectionsWrapper";
import Services from "@/components/services/Services";
import { getCategories } from "../api/api";

export default async function Home() {
    const categories = await getCategories();
    return (
        <PageLayout>
            <SectionsWrapper>
                <Services categories={categories} />
                <AboutSection />
                <Contact />
                <Footer />
            </SectionsWrapper>
        </PageLayout>
    );
}
