// src/lib/auth.ts

import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { verifyToken, JWTPayload } from "./jwt";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export async function getAuthUser(
  request: NextRequest
): Promise<JWTPayload | null> {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

export function createErrorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export function createSuccessResponse(data: any, status: number = 200) {
  return Response.json(data, { status });
}
