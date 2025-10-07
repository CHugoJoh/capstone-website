import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="mb-20 sm:mb-28">
      <nav className="flex justify-between items-center mb-16 sm:mb-20">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logos/chalmers-logo.svg"
            alt="Chalmers University of Technology"
            width={150}
            height={45}
            className="invert transition-opacity hover:opacity-80"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-gray-700 hover:border-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-200 font-medium"
            >
              Contact Team
            </Button>
          </Link>
        </div>
      </nav>

      <div className="text-center space-y-6">
        <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-950 to-purple-950 border border-blue-800 rounded-full text-sm font-medium text-blue-300">
          IKEA Capstone Innovation Project 2025
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          RAPPORTÖR
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Intelligent Safety Analytics Platform for IKEA
        </p>
      </div>
    </header>
  );
}