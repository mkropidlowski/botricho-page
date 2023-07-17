import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default async function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1140px] max-h-max flex items-center flex-col m-auto">{children}</div>
            <Footer className="mt-[150px]" />
        </>
    );
}
