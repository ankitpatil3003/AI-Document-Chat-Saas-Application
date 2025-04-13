// app/dashboard/layout.tsx
import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import { ReactNode } from "react";
interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen">
        <Header />

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
}