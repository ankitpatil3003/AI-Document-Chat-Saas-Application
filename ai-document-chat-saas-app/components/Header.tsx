import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import UpgradeButton from "./UpgradeButton";

function Header() {
  return (
    <div className="flex justify-between bg-slate-800 shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        <span className="text-white">Chat with </span><span className="text-cyan-400">Document</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade"><span className="text-white">Pricing</span></Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="border-cyan-400">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-cyan-400" />
            </Link>
          </Button>
          <UpgradeButton />
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;