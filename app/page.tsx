import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AnimatedCube3DClient from "./components/AnimatedCube3DClient";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <main className="max-w-5xl mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <Header />
        <AnimatedCube3DClient />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}
