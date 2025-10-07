import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AnimatedCube3DClient from "./components/AnimatedCube3DClient";

export default function Home() {
  return (
    <div
      className="font-sans min-h-screen bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbghero.png&w=1080&q=75)'
      }}
    >
      <main className="max-w-5xl mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <Header />
        <AnimatedCube3DClient />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}
