// src/app/api/bookings/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { createErrorResponse, createSuccessResponse } from "@/app/lib/auth";

// GET - Fetch all bookings with optional filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const customer = searchParams.get("customer");

    interface WhereClause {
      status?: string;
      customer?: {
        contains: string;
        mode: "insensitive";
      };
    }

    const where: WhereClause = {};

    if (status) {
      where.status = status;
    }

    if (customer) {
      where.customer = {
        contains: customer,
        mode: "insensitive",
      };
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        hall: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return createSuccessResponse({ bookings });
  } catch (error) {
    console.error("Fetch bookings error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}

// POST - Create a new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customer, phone, email, hallId, date, amount } = body;

    // Validation
    if (!customer || !phone || !hallId || !date) {
      return createErrorResponse(
        "Customer, phone, hall, and date are required",
        400
      );
    }

    // Check if hall exists
    const hall = await prisma.hall.findUnique({
      where: { id: hallId },
    });

    if (!hall) {
      return createErrorResponse("Hall not found", 404);
    }

    // Check if hall is already booked on this date
    const bookingDate = new Date(date);
    const existingBooking = await prisma.booking.findFirst({
      where: {
        hallId,
        date: bookingDate,
        status: {
          in: ["PENDING", "APPROVED"],
        },
      },
    });

    if (existingBooking) {
      return createErrorResponse("Hall is already booked on this date", 409);
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        customer,
        phone,
        email: email || null,
        hallId,
        date: bookingDate,
        amount: amount ? parseFloat(amount) : hall.price,
        status: "PENDING",
        paymentStatus: "PENDING",
      },
      include: {
        hall: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    });

    return createSuccessResponse(
      {
        message: "Booking created successfully",
        booking,
      },
      201
    );
  } catch (error) {
    console.error("Create booking error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}

// PATCH - Update booking status
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, paymentStatus } = body;

    if (!id) {
      return createErrorResponse("Booking ID is required", 400);
    }

    // Check if booking exists
    const existingBooking = await prisma.booking.findUnique({
      where: { id },
    });

    if (!existingBooking) {
      return createErrorResponse("Booking not found", 404);
    }

    // Prepare update data
    interface UpdateData {
      status?: string;
      paymentStatus?: string;
    }

    const updateData: UpdateData = {};

    if (status) {
      if (!["PENDING", "APPROVED", "CANCELLED", "COMPLETED"].includes(status)) {
        return createErrorResponse("Invalid status", 400);
      }
      updateData.status = status;
    }

    if (paymentStatus) {
      if (!["PENDING", "PAID", "FAILED", "REFUNDED"].includes(paymentStatus)) {
        return createErrorResponse("Invalid payment status", 400);
      }
      updateData.paymentStatus = paymentStatus;
    }

    // Update booking
    const booking = await prisma.booking.update({
      where: { id },
      data: updateData,
      include: {
        hall: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    });

    return createSuccessResponse({
      message: "Booking updated successfully",
      booking,
    });
  } catch (error) {
    console.error("Update booking error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}

// DELETE - Delete a booking
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return createErrorResponse("Booking ID is required", 400);
    }

    // Check if booking exists
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    if (!booking) {
      return createErrorResponse("Booking not found", 404);
    }

    // Delete booking
    await prisma.booking.delete({
      where: { id },
    });

    return createSuccessResponse({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Delete booking error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}
