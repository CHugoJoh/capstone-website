import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="mb-16">
      <nav className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logos/chalmers-logo.svg"
            alt="Chalmers University of Technology"
            width={150}
            height={45}
            className="dark:invert"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button variant="outline">Contact Team</Button>
          </Link>
        </div>
      </nav>

      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
          IKEA Capstone Innovation Project 2025
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          RAPPORTÖR
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Intelligent Safety Analytics Platform for IKEA
        </p>
      </div>
    </header>
  );
}