import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "hello@nasoavina.com"; // Change if needed
  const password = "ChangeMe123!";       // Change before running in production

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`✅ Admin user already exists: ${email}`);
    return;
  }

  const hashed = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: { email, password: hashed, role: "ADMIN" },
  });

  console.log(`✅ Admin user created: ${email}`);
  console.log(`🔑 Password: ${password} (change it immediately!)`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
