import prisma from "@/app/libs/prismadb";

const getServices = async () => {
    try {
        const services = await prisma.service.findMany();

        return services;
    } catch (error: any) {
        return [];
    }
};

export default getServices;
