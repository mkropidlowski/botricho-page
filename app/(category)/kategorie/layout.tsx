export default async function PanelLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-full flex items-start justify-center">{children}</div>;
}
