import React from "react";

export default function SponsorPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 py-20 px-6 max-w-5xl mx-auto">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          Partner With The MAC Bus
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Sponsorships help us grow and provide essential transit services to Mississippi communities.
          Become a partner and make a difference today.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 mb-20">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Why Sponsor?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Gain brand visibility, community goodwill, and help provide accessible transit options.
            Sponsorship benefits include logo placement, event invitations, and more.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Sponsorship Opportunities</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We offer tailored packages for businesses and organizations of all sizes.
            Let’s create a partnership that works for you.
          </p>
        </div>
      </section>

      <section className="bg-yellow-400 text-gray-900 p-10 rounded-3xl shadow-lg text-center mb-20">
        <h3 className="text-3xl font-bold mb-6">Become a Sponsor</h3>
        <p className="max-w-2xl mx-auto mb-8">
          Interested in sponsoring The MAC Bus? Contact us to discuss opportunities and next steps.
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
