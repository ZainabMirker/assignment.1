import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-semibold">Our Products</h2>
        <p className="mt-4">Check out our latest products.</p>
      </main>
      <Footer />
    </>
  );
}