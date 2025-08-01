import { Link } from 'react-router-dom';

const services = [
  "Regional Transit Planning & Alignment",
  "Data & Technology Solutions",
  "Grant Compliance & Management",
  "Public-Private Coordination",
  "Workforce Integration",
  "Emergency Transit Planning",
  "EV Fleet Transition",
  "Premium Private Car Service - The Transporter",
];

export default function Services() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Data-Driven Mobility Solutions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">{service}</h3>
            <Link to="/contact" className="text-red-600 mt-2 inline-block">Partner With Us</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
