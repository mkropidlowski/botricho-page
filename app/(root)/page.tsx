import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageLayout from "@/components/pageLayout/PageLayout";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <Navbar />
            <PageLayout>
                <h2>Tu będzie sections pageLayout</h2>
            </PageLayout>
            <Footer />
        </main>
    );
}
