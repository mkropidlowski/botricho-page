import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h2>Hello</h2>
            <button className="p-2 bg-slate-500">
                <Link href="/panel">Panel admina.</Link>
            </button>
            <button className="p-2 bg-sky-600">
                <Link href="/logowanie">Logowanie</Link>
            </button>
        </main>
    );
}
