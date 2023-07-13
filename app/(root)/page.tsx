import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import PageLayout from "@/components/pageLayout/PageLayout";
import SectionsWrapper from "@/components/sectionsWrapper/SectionsWrapper";
import Services from "@/components/services/Services";
import { BE_Services } from "@/types/types";

export const fakeData: BE_Services[] = [
    {
        id: "1",
        name: "Twarz",
        servicesList: [
            {
                serviceId: "1",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "2",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "3",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "4",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
        ],
    },
    {
        id: "2",
        name: "Głowa",
        servicesList: [
            {
                serviceId: "1",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "2",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
        ],
    },
    {
        id: "3",
        name: "Ciało",
        servicesList: [
            {
                serviceId: "2",
                serviceName: "Trychologiczny peeling",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
        ],
    },
    {
        id: "4",
        name: "Stopy",
        servicesList: [
            {
                serviceId: "1",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "2",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
        ],
    },
    {
        id: "5",
        name: "Brzuch",
        servicesList: [
            {
                serviceId: "1",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
            {
                serviceId: "2",
                serviceName: "Trychologiczny peeling + maska",
                description:
                    "Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            },
        ],
    },
];

export default function Home() {
    return (
        <PageLayout>
            <Hero className="flex flex-col z-[-100] h-[650px]" />
            <SectionsWrapper>
                <Services services={fakeData} />
                <AboutSection />
                <Contact />
                <Footer />
            </SectionsWrapper>
        </PageLayout>
    );
}
