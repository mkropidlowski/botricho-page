import Image from "next/image";
import Loading from "./loading";

export const dynamic = "force-dynamic";
const folderName = "images";

async function getData() {
    try {
        const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/?folder=${folderName}&tags=true&metadata=true&max_results=50`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Basic ${btoa(
                    `${process.env.NEXT_CLOUDINARY_API_KEY}:${process.env.NEXT_CLOUDINARY_API_SECRET}`
                )}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Błąd sieci lub zapytania do API Cloudinary.");
        }

        const data = await response.json();
        const { resources, next_cursor: nextCursor } = data;

        const images = resources.map((resource: any) => {
            const { width, height, folder } = resource;
            return {
                id: resource.asset_id,
                image: resource.secure_url,
                width,
                height,
                folder,
            };
        });

        return images;
    } catch (error) {
        console.error("Błąd pobierania danych z API.", error);
        return [];
    }
}

export default async function Page() {
    const data = await getData();
    return (
        <div className="flex flex-col items-center gap-10 relative top-[130px] w-full p-3">
            <div className="flex flex-col gap-6 items-center">
                <h2 className="text-[30px] font-bold">Zapoznaj się z efektami naszych zabiegów</h2>

                {data ? (
                    <div className="max-w-[1000px] flex flex-wrap gap-3 justify-center">
                        {data.map((res: any) => {
                            if (res.folder === folderName) {
                                return (
                                    <div
                                        key={res.id}
                                        className="flex  items-center justify-center w-[300px] h-[300px] relative"
                                    >
                                        <Image
                                            src={res.image}
                                            alt={res.id}
                                            fill
                                            priority
                                            style={{ objectFit: "fill" }}
                                            className="rounded-md"
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
}
