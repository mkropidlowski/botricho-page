import prisma from "@/app/libs/prismadb";

const getCategories = async () => {
    try {
        const categories = await prisma.categories.findMany();

        return categories;
    } catch (error: any) {
        return [];
    }
};

export default getCategories;
