import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://botricho.pl/uslugi/trychologia",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/kosmetologia",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/masaż",
            lastModified: new Date(),
        },
    ];
}
