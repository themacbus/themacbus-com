import React from "react";

export default function InvestPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 py-20 px-6 max-w-5xl mx-auto">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          Invest in Mobility & Community
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Your investment powers access, equity, and opportunity across Mississippi.
          Join us to support a sustainable, community-driven transit future.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 mb-20">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Why Invest?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Investing in The MAC Bus means supporting accessible transportation that transforms lives,
            connects communities, and creates economic opportunities.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We envision a future where everyone has reliable, affordable transit options — empowering individuals and strengthening communities.
          </p>
        </div>
      </section>

      <section className="bg-yellow-400 text-gray-900 p-10 rounded-3xl shadow-lg text-center mb-20">
        <h3 className="text-3xl font-bold mb-6">Get Involved</h3>
        <p className="max-w-2xl mx-auto mb-8">
          Ready to invest or learn more about partnership opportunities? We’re here to answer your questions and collaborate for impact.
        </p>
        <a
          href="mailto:tmac@themacbus.org"
          className="inline-block bg-gray-900 text-yellow-400 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1"
        >
          Contact Us
        </a>
      </section>

      <footer className="text-center py-6 text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        &copy; {new Date().getFullYear()} The Transporter | A division of The MAC Bus, Inc.
      </footer>
    </main>
  );
}
