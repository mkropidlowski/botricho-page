import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1140px] h-full flex items-center flex-col m-auto">{children}</div>
            <Footer />
        </>
    );
}
