import getServices from "@/app/actions/getServices";
import ServicesDetails from "./components/ServicesDetails";

const Services = async ({ params }: { params: { slug: string } }) => {
    const services = await getServices();
    const slug = decodeURIComponent(params.slug);
    return (
        <div className="w-full h-full">
            <ServicesDetails services={services} slug={slug} />
        </div>
    );
};

export default Services;
