import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  admin?: {
    adminId: string;
    email: string;
  };
}

export function authenticateAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const token = authHeader.split(" ")[1];

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not configured.");
    }

    const decoded = jwt.verify(token, jwtSecret);

    if (
      typeof decoded !== "object" ||
      !decoded ||
      !("adminId" in decoded) ||
      !("email" in decoded)
    ) {
      return res.status(401).json({
        message: "Invalid authentication token.",
      });
    }

    req.admin = {
      adminId: String(decoded.adminId),
      email: String(decoded.email),
    };

    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired authentication token.",
    });
  }
}