import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Button from "./Components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-center mt-10">
          Welcome to My Next.js App
        </h1>
        <p className="text-lg mt-4">This is the home page.</p>
        <Button>Click Me</Button>
      </main>
      <Footer />
    </>
  );
}