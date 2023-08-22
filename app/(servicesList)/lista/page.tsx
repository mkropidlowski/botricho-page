import getServices from "@/app/actions/getServices";
import List from "./components/List";
export const dynamic = "force-dynamic";
const PageList = async () => {
    const services = await getServices();
    return (
        <div>
            <List services={services} />
        </div>
    );
};

export default PageList;
