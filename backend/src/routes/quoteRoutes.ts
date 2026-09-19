import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      quantity,
      budgetPerGift,
      occasion,
      message,
    } = req.body;

    if (!fullName || !email ) {
      return res.status(400).json({
        message: "Full name, email, and phone are required.",
      });
    }

    const quote = await prisma.quoteRequest.create({
      data: {
        fullName,
        companyName,
        email,
        phone: phone || null,
        quantity: quantity ? Number(quantity) : null,
        budgetPerGift,
        occasion,
        message,
      },
    });

    return res.status(201).json({
      message: "Quote request submitted successfully.",
      quoteId: quote.id,
    });
  } catch (error) {
    console.error("Quote submission error:", error);

    return res.status(500).json({
      message: "Something went wrong while submitting the quote.",
    });
  }
});

export default router;