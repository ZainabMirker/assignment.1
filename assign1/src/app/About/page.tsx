import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <>
    <Navbar/>
      <main className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-semibold">About Us</h2>
        <p className="mt-4">We are a company dedicated to providing the best services.</p>
      </main>
      
    </>
  );
}