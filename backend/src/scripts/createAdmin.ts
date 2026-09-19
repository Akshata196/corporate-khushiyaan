import "dotenv/config";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

async function createAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      throw new Error(
        "ADMIN_EMAIL and ADMIN_PASSWORD must be configured in .env"
      );
    }

    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log("Admin with this email already exists.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const admin = await prisma.adminUser.create({
      data: {
        email,
        passwordHash,
      },
    });

    console.log("Admin created successfully:");
    console.log("Email:", admin.email);
  } catch (error) {
    console.error("Failed to create admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();