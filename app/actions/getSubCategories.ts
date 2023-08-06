import prisma from "@/app/libs/prismadb";

const getSubCategories = async () => {
    try {
        const subcategories = await prisma.subCategories.findMany();
        return subcategories;
    } catch (error: any) {
        return [];
    }
};

export default getSubCategories;
