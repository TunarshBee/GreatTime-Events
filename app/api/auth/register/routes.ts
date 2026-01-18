// src/app/api/auth/register/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";
import {
  hashPassword,
  createErrorResponse,
  createSuccessResponse,
} from "@/app/lib/auth";
import { signToken } from "@/app/lib/jwt";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Validation
    if (!email || !password) {
      return createErrorResponse("Email and password are required", 400);
    }

    if (password.length < 6) {
      return createErrorResponse("Password must be at least 6 characters", 400);
    }

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      return createErrorResponse("Admin with this email already exists", 409);
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create admin
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    // Generate JWT token
    const token = await signToken({
      id: admin.id,
      email: admin.email,
    });

    return createSuccessResponse(
      {
        message: "Admin registered successfully",
        admin,
        token,
      },
      201
    );
  } catch (error) {
    console.error("Registration error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}
