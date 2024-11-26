import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <form className="mt-4 space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="block w-full p-2 border rounded" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="block w-full p-2 border rounded" 
          />
          <textarea 
            placeholder="Your Message" 
            className="block w-full p-2 border rounded"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}