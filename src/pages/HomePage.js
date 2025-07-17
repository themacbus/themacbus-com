import React from "react";

export default function HomePage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-24 px-6 text-center rounded-b-3xl shadow-lg max-w-5xl mx-auto my-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          Reliable, Affordable Transportation
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Whether you’re commuting to work, attending an event, or traveling in style, The Transporter has a service that fits your needs. Serving communities across Mississippi.
        </p>
        <a
          href="mailto:tmac@themacbus.org"
          className="inline-block bg-gray-900 text-yellow-400 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1"
        >
          Contact Us
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Fixed Route Shuttles</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Convenient scheduled routes to get you where you need to go affordably and on time.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Luxury Transportation</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Travel in style with premium vehicles for special occasions and group bookings.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We focus on equity and access, working with local partners to serve Mississippi communities.
          </p>
        </div>
      </section>

      {/* Shuttle Pricing Section */}
      <section className="bg-yellow-400 text-gray-900 py-14 px-6 rounded-3xl max-w-5xl mx-auto mb-20 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Shuttle Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "One-Way", price: "$1.75" },
            { label: "Round Trip", price: "$4.00" },
            { label: "Weekly Pass", price: "$24.00" },
            { label: "Monthly Pass", price: "$64.00" },
          ].map(({ label, price }) => (
            <div
              key={label}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition cursor-default"
            >
              <p className="text-xl font-semibold">{label}</p>
              <p className="text-3xl font-extrabold mt-2">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Book Your Ride or Learn More</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Have a special request, group booking, or want more details? Contact us today.
        </p>
        <a
          href="mailto:tmac@themacbus.org"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 max-w-5xl mx-auto">
        &copy; {new Date().getFullYear()} The Transporter | A division of The MAC Bus, Inc.
      </footer>
    </main>
  );
}
