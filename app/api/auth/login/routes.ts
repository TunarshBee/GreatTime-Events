// src/app/api/auth/login/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";
import {
  comparePassword,
  createErrorResponse,
  createSuccessResponse,
} from "@/app/lib/auth";
import { signToken } from "@/app/lib/jwt";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return createErrorResponse("Email and password are required", 400);
    }

    // Find admin
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return createErrorResponse("Invalid email or password", 401);
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, admin.password);

    if (!isPasswordValid) {
      return createErrorResponse("Invalid email or password", 401);
    }

    // Generate JWT token
    const token = await signToken({
      id: admin.id,
      email: admin.email,
    });

    return createSuccessResponse({
      message: "Login successful",
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return createErrorResponse("Internal server error", 500);
  }
}
