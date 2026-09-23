import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";
import { authenticateAdmin, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

/**
 * Admin Login
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordValid = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not configured.");
    }

    const token = jwt.sign(
      {
        adminId: admin.id,
        email: admin.email,
      },
      jwtSecret,
      {
        expiresIn: "8h",
      }
    );

    return res.json({
      message: "Login successful.",
      token,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Something went wrong during login.",
    });
  }
});

/**
 * Change Admin Email
 */
router.patch(
  "/email",
  authenticateAdmin,
  async (req: AuthRequest, res) => {
    try {
      const { email } = req.body;

      if (!email || typeof email !== "string") {
        return res.status(400).json({
          message: "A valid email address is required.",
        });
      }

      const normalizedEmail = email.trim().toLowerCase();

      const emailExists = await prisma.adminUser.findUnique({
        where: { email: normalizedEmail },
      });

      if (emailExists && emailExists.id !== req.admin?.adminId) {
        return res.status(409).json({
          message: "This email is already in use.",
        });
      }

      const admin = await prisma.adminUser.update({
        where: {
          id: req.admin!.adminId,
        },
        data: {
          email: normalizedEmail,
        },
      });

      return res.json({
        message: "Email updated successfully.",
        admin: {
          id: admin.id,
          email: admin.email,
        },
      });
    } catch (error) {
      console.error("Change email error:", error);

      return res.status(500).json({
        message: "Unable to update email.",
      });
    }
  }
);

/**
 * Change Admin Password
 */
router.patch(
  "/password",
  authenticateAdmin,
  async (req: AuthRequest, res) => {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({
          message: "Current password and new password are required.",
        });
      }

      if (typeof newPassword !== "string" || newPassword.length < 8) {
        return res.status(400).json({
          message: "New password must be at least 8 characters long.",
        });
      }

      const admin = await prisma.adminUser.findUnique({
        where: {
          id: req.admin!.adminId,
        },
      });

      if (!admin) {
        return res.status(404).json({
          message: "Admin account not found.",
        });
      }

      const currentPasswordValid = await bcrypt.compare(
        currentPassword,
        admin.passwordHash
      );

      if (!currentPasswordValid) {
        return res.status(401).json({
          message: "Current password is incorrect.",
        });
      }

      const newPasswordHash = await bcrypt.hash(newPassword, 12);

      await prisma.adminUser.update({
        where: {
          id: admin.id,
        },
        data: {
          passwordHash: newPasswordHash,
        },
      });

      return res.json({
        message: "Password updated successfully.",
      });
    } catch (error) {
      console.error("Change password error:", error);

      return res.status(500).json({
        message: "Unable to update password.",
      });
    }
  }
);

export default router;