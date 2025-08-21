import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Updated header text */}
      <header className="bg-yellow-400 dark:bg-yellow-600 shadow-md p-4 text-center font-bold text-lg text-gray-900 dark:text-gray-100">
        The Transporter
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 text-center p-6 mt-8">
        <p className="mb-3">
          © {new Date().getFullYear()} The Transporter — All rights reserved.
        </p>
        <nav>
          <ul className="flex justify-center gap-6 text-sm">
            <li>
              <a
                href="/privacy"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:underline"
              >
                Terms of Service
              </a>
            </li>
            {/* 🔗 New Survey Link */}
            <li>
              <a
                href="https://tinyurl.com/The-MAC-Survey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                📋 Community Survey
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
