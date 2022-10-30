import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();


export async function SaveUser(): Promise<User> {
    const newUser = await prisma.user.create({
        data: {
            email: "sefatanam@gmail.com",
            username: "sefatanam"
        }
    })
    return newUser;
}