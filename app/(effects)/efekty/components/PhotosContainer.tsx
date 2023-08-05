const CLOUD_NAME = "dah4tfxpe";
const API_KEY = "133863872986957";
const API_SECRET = "-psdYBSw24rK6W4VrBW6G8E8ykw";

export default function PhotosContainer({ images }) {
    console.log(images);

    return (
        <div className="flex flex-col items-center gap-10 relative top-[130px] w-full p-3">
            <div>
                <h2 className="text-[30px] font-bold">Zapoznaj się z efektami naszych zabiegów</h2>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const result = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`, {
        headers: {
            Authorization: `Basic ${Buffer.from(API_KEY + ":" + API_SECRET).toString("base64")}`,
        },
    }).then((response) => response.json());
    console.log(result);

    const { resources } = result;

    const images = resources.map((resource) => {
        return {
            id: resource.asset_id,
            title: resource.public_id,
            image: resource.secure_url,
        };
    });

    return {
        props: {
            images,
        },
    };
}
