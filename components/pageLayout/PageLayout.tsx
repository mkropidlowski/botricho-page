import Navbar from "../navbar/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="max-w-[1240px] flex items-center justify-center flex-col m-auto">{children}</main>
        </>
    );
};

export default PageLayout;
