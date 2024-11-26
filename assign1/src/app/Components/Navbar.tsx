import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Services">Services</Link></li>
        <li><Link href="/Products">Products</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;