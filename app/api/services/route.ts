import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, category, subCategoryName } = body;

        const newService = await prisma.service.create({
            data: {
                title,
                category,
                description,
                subCategoryName,
            },
        });
        return NextResponse.json(newService);
    } catch (err) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const servicesDetails = await prisma.service.findMany();
        return NextResponse.json(servicesDetails);
    } catch (err) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}
