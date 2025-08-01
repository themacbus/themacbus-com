import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="font-bold text-xl">The MAC Bus</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Partner With Us</Link>
        <Link to="/book">Book The Transporter</Link>
      </div>
    </nav>
  );
}
