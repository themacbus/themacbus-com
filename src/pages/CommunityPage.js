import React from "react";

export default function CommunityPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 py-20 px-6 max-w-5xl mx-auto">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          Building a Stronger Community Together
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          At The MAC Bus, we’re committed to serving Mississippi’s communities by improving access and equity through reliable transportation.
          Discover how we work hand-in-hand with partners and riders to create lasting impact.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 mb-20">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Community Programs</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We support programs designed to improve mobility for seniors, students, and underserved neighborhoods.
            Learn about upcoming events and initiatives.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Volunteer, attend community meetings, or share your story. Together we can make transportation work for everyone.
          </p>
        </div>
      </section>

      <section className="bg-yellow-400 text-gray-900 p-10 rounded-3xl shadow-lg text-center mb-20">
        <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
        <p className="max-w-2xl mx-auto mb-8">
          Want to learn more or collaborate with us? Reach out today — we’d love to hear from you.
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
