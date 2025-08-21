// src/pages/RoutesPage.js

import React from "react";

export default function RoutesPage() {
  return (
    <main className="routes-page p-6 max-w-4xl mx-auto">
      <section className="hero mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Explore Our Routes
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Find the route maps, schedules, and ticketing info you need to get
          around.
        </p>
      </section>

      {/* 🚍 Survey Banner */}
      <section className="bg-yellow-100 text-center py-6 rounded-lg shadow-md my-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          📣 We’re expanding service in Jackson County.
        </h2>
        <p className="text-gray-700 mb-4">
          Help us plan routes by taking this quick survey.
        </p>
        <a
          href="https://tinyurl.com/The-MAC-Survey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Take Survey
        </a>
      </section>
    </main>
  );
}
