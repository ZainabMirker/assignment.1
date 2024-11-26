import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <ul className="list-disc ml-5 mt-4">
          <li>Web Development</li>
          <li>Mobile Apps</li>
          <li>Cloud Solutions</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}