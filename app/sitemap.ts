import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://botricho.pl",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/Twarz",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/Głowa",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/Włosy",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/Masaż",
            lastModified: new Date(),
        },
        {
            url: "https://botricho.pl/uslugi/Stopy",
            lastModified: new Date(),
        },
    ];
}
