import getServices from "@/app/actions/getServices";
import List from "./components/List";
const PageList = async () => {
    const services = await getServices();
    return (
        <div>
            <List services={services} />
        </div>
    );
};

export default PageList;
