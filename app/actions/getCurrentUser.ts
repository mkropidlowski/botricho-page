import prisma from "../libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }

    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            },
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        return null;
    }
};

export default getCurrentUser;
