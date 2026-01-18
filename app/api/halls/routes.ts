// src/app/api/halls/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { createErrorResponse, createSuccessResponse } from "@/app/lib/auth";

// GET - Fetch all halls
export async function GET(request: NextRequest) {
  try {
    const halls = await prisma.hall.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: { bookings: true },
        },
      },
    });

    return createSuccessResponse({ halls });
  } catch (error) {
    console.error("Fetch halls error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}

// POST - Create a new hall
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, capacity, price } = body;

    // Validation
    if (!name || !capacity || !price) {
      return createErrorResponse("Name, capacity, and price are required", 400);
    }

    if (capacity < 1) {
      return createErrorResponse("Capacity must be at least 1", 400);
    }

    if (price < 0) {
      return createErrorResponse("Price must be a positive number", 400);
    }

    // Create hall
    const hall = await prisma.hall.create({
      data: {
        name,
        capacity: parseInt(capacity),
        price: parseFloat(price),
      },
    });

    return createSuccessResponse(
      {
        message: "Hall created successfully",
        hall,
      },
      201
    );
  } catch (error) {
    console.error("Create hall error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}

// DELETE - Delete a hall
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return createErrorResponse("Hall ID is required", 400);
    }

    // Check if hall exists
    const hall = await prisma.hall.findUnique({
      where: { id },
      include: {
        _count: {
          select: { bookings: true },
        },
      },
    });

    if (!hall) {
      return createErrorResponse("Hall not found", 404);
    }

    // Optional: Check if hall has active bookings
    if (hall._count.bookings > 0) {
      return createErrorResponse(
        "Cannot delete hall with existing bookings",
        400
      );
    }

    // Delete hall
    await prisma.hall.delete({
      where: { id },
    });

    return createSuccessResponse({
      message: "Hall deleted successfully",
    });
  } catch (error) {
    console.error("Delete hall error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}
