import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AnimatedCube3DClient from "./components/AnimatedCube3DClient";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <Header />
        <AnimatedCube3DClient />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}
