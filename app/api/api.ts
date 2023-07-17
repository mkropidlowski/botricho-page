export async function getCategories() {
    const res = await fetch(`https://botricho.pl/api/categories`, { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Bład pobierania danych");
    }

    return res.json();
}

export async function getServices() {
    const res = await fetch(`https://botricho.pl/api/services`, { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Bład pobierania danych");
    }

    return res.json();
}
