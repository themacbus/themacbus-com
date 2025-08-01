import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Partner With Us</h1>
      <form className="space-y-4">
        <input className="w-full border px-4 py-2" placeholder="Name" />
        <input className="w-full border px-4 py-2" placeholder="Organization" />
        <input type="email" className="w-full border px-4 py-2" placeholder="Email" />
        <input type="tel" className="w-full border px-4 py-2" placeholder="Phone" />
        <textarea className="w-full border px-4 py-2" rows="4" placeholder="Message"></textarea>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg">Send</button>
      </form>

      <div className="mt-8 text-center">
        <Link to="/book" className="bg-black text-white px-6 py-2 rounded-lg">Book The Transporter</Link>
      </div>
    </div>
  );
}
