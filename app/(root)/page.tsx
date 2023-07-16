import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import PageLayout from "@/components/pageLayout/PageLayout";
import SectionsWrapper from "@/components/sectionsWrapper/SectionsWrapper";
import Services from "@/components/services/Services";

const PROD_URL = (process.env.NEXT_BASE_URL as String) ? (process.env.NEXT_LOCAL_URL as String) : "";

export async function getCategories() {
    const res = await fetch(`${PROD_URL}/api/categories`, { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Bład pobierania danych");
    }

    return res.json();
}

export async function getServices() {
    const res = await fetch(`${PROD_URL}/api/services`, { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Bład pobierania danych");
    }

    return res.json();
}

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
