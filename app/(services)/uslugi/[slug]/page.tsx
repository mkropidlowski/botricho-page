import getServices from "@/app/actions/getServices";
import ServicesDetails from "./components/ServicesDetails";
import getSubCategories from "@/app/actions/getSubCategories";

const Services = async ({ params }: { params: { slug: string } }) => {
    const services = await getServices();
    const subcategories = await getSubCategories();
    const slug = decodeURIComponent(params.slug);
    return <ServicesDetails services={services} slug={slug} subCategories={subcategories} />;
};

export default Services;
