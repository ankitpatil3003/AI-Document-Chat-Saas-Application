// lib/getBaseUrl.ts

export default function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    // local dev server
    return "http://localhost:3000";
  }

  // in production, expect NEXT_PUBLIC_BASE_URL to be set
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not defined");
  }
  return base;
}