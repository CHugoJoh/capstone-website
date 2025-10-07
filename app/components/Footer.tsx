import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pt-16 border-t border-gray-800">
      <div className="grid sm:grid-cols-3 gap-12 mb-12">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg tracking-tight text-white">RAPPORTÖR</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            An intelligent safety analytics platform designed to transform workplace safety at IKEA.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg tracking-tight text-white">Project Info</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Team 6</li>
            <li>Chalmers University</li>
            <li>IKEA Capstone 2025</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg tracking-tight text-white">Contact</h3>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Get in touch with our team →
          </Link>
        </div>
      </div>
      <div className="text-center pt-10 border-t border-gray-800 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Team 6 - Chalmers University of Technology</p>
      </div>
    </footer>
  );
}