import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import PageLayout from "@/components/pageLayout/PageLayout";
import SectionsWrapper from "@/components/sectionsWrapper/SectionsWrapper";
import Services from "@/components/services/Services";
import getCategories from "../actions/getCategories";
import EmployeeSection from "@/components/employeeSection/EmployeeSection";

export default async function Home() {
    const categories = await getCategories();
    return (
        <PageLayout>
            <SectionsWrapper>
                <Services categories={categories} />
                <AboutSection />
                <EmployeeSection />
                <Contact />
                <Footer />
            </SectionsWrapper>
        </PageLayout>
    );
}
