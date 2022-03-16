import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.enc.NODE_ENV === "development") {
  Global.prisma = prisma;
}
