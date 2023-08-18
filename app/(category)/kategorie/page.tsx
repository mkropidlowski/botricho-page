import CategoryList from "./components/CategoryList";
import getCategories from "@/app/actions/getCategories";

const PageCategory = async () => {
    const category = await getCategories();
    return (
        <div>
            <CategoryList category={category} />
        </div>
    );
};

export default PageCategory;
