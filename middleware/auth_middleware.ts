import { Request, Response, NextFunction } from "express";

const AUTH_TOKEN = process.env.AUTH_TOKEN;

export function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid token" });
    return;
  }

  const token = authHeader.split(" ")[1];

  if (token !== AUTH_TOKEN) {
    res.status(403).json({ error: "Forbidden: Invalid token" });
    return;
  }

  next(); 
}
