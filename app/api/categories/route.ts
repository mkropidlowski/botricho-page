import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, image } = body;

        const newCategory = await prisma.categories.create({
            data: {
                name,
                image,
            },
        });
        return NextResponse.json(newCategory);
    } catch (err) {
        return NextResponse.json({ message: "POST ERROR" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const category = await prisma.categories.findMany();
        return NextResponse.json(category);
    } catch (err) {
        return NextResponse.json({ message: "GET ERROR" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const { categoryId } = await request.json();
    try {
        await prisma.categories.delete({
            where: {
                id: categoryId,
            },
        });
        return NextResponse.json("Pomyślnie usunięto.");
    } catch (error) {
        return NextResponse.json({ message: "Bład usuwania" }, { status: 500 });
    }
}
