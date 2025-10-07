import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}
