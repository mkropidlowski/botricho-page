import Navbar from "@/components/navbar/Navbar";

export default function EffectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="max-w-[1140px] h-screen flex items-center flex-col m-auto">{children}</div>
        </>
    );
}
