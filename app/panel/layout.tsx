export default async function PanelLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>Witaj</h2>
            {children}
        </div>
    );
}
