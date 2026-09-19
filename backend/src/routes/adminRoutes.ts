import { Router } from "express";
import prisma from "../lib/prisma";
import {
  authenticateAdmin,
  AuthRequest,
} from "../middleware/authMiddleware";

const router = Router();

/**
 * GET /api/admin/quotes
 * Get all quote requests
 */
router.get(
  "/quotes",
  authenticateAdmin,
  async (req: AuthRequest, res) => {
    try {
      const quotes = await prisma.quoteRequest.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      return res.json({
        quotes,
      });
    } catch (error) {
      console.error("Failed to fetch quotes:", error);

      return res.status(500).json({
        message: "Failed to fetch quote requests.",
      });
    }
  }
);

/**
 * PATCH /api/admin/quotes/:id
 * Update quote status and/or admin notes
 */
router.patch(
  "/quotes/:id",
  authenticateAdmin,
  async (req: AuthRequest, res) => {
    try {
      // Express 5 can type params as string | string[]
      const rawId = req.params.id;

      if (!rawId) {
        return res.status(400).json({
          message: "Quote ID is required.",
        });
      }

      const id = Array.isArray(rawId) ? rawId[0] : rawId;

      if (!id) {
        return res.status(400).json({
          message: "Quote ID is required.",
        });
      }

      const { status, adminNotes } = req.body;

      // Allowed quote statuses
      const allowedStatuses = [
        "New",
        "Contacted",
        "In Progress",
        "Completed",
        "Cancelled",
      ];

      // Validate status
      if (status && !allowedStatuses.includes(status)) {
        return res.status(400).json({
          message: "Invalid quote status.",
        });
      }

      // Check whether quote exists
      const existingQuote = await prisma.quoteRequest.findUnique({
        where: {
          id,
        },
      });

      if (!existingQuote) {
        return res.status(404).json({
          message: "Quote request not found.",
        });
      }

      // Update quote
      const quote = await prisma.quoteRequest.update({
        where: {
          id,
        },
        data: {
          ...(status !== undefined && {
            status,
          }),

          ...(adminNotes !== undefined && {
            adminNotes,
          }),
        },
      });

      return res.json({
        message: "Quote updated successfully.",
        quote,
      });
    } catch (error) {
      console.error("Failed to update quote:", error);

      return res.status(500).json({
        message: "Failed to update quote request.",
      });
    }
  }
);

export default router;