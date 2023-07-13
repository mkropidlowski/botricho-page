import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="w-full h-full flex items-center flex-col">{children}</div>
            <Footer />
        </>
    );
}
