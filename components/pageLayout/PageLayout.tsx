import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Hero className="flex flex-col h-[650px]" />
            <main className="max-w-[1240px] min-h-screen flex items-center justify-center flex-col m-auto">
                {children}
            </main>
        </>
    );
};

export default PageLayout;
