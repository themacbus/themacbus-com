import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6">
      <section className="text-center py-12 bg-[#f7f7f7]">
        <h1 className="text-4xl font-bold">Bridging Policy, Planning & Execution for Mississippi Mobility</h1>
        <p className="mt-4 text-lg">
          The MAC Bus LLC is a veteran-, woman-, and minority-owned Regional Transit Alignment & Coordination Firm...
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/contact" className="bg-red-600 text-white px-6 py-2 rounded-lg">Partner With Us</Link>
          <Link to="/book" className="bg-black text-white px-6 py-2 rounded-lg">Book The Transporter</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white shadow p-4 text-center">
          <h3 className="text-xl font-semibold">Regional Transit Planning</h3>
        </div>
        <div className="bg-white shadow p-4 text-center">
          <h3 className="text-xl font-semibold">Data & Technology</h3>
        </div>
        <div className="bg-white shadow p-4 text-center">
          <h3 className="text-xl font-semibold">Premium Car Service</h3>
        </div>
      </section>
    </div>
  );
}
