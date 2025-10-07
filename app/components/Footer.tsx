import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-3">RAPPORTÖR</h3>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            An intelligent safety analytics platform designed to transform workplace safety at IKEA.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Project Info</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>Team 6</li>
            <li>Chalmers University</li>
            <li>IKEA Capstone 2025</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <Link
            href="/contact"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Get in touch with our team →
          </Link>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Team 6 - Chalmers University of Technology</p>
      </div>
    </footer>
  );
}