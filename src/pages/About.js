import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Our Story */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 border-b pb-2">Our Story</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          The MAC Bus LLC was founded to close the transportation gap in underserved Mississippi communities by connecting people to opportunity. With a unique focus on equity and impact, we bring a bold vision to the future of mobility in the South.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold text-red-600">Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To connect communities through integrated, sustainable, and data-driven mobility solutions that serve the people first.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold text-red-600">Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To be Mississippi’s leading regional transit alignment partner—driving economic growth, public safety, and equitable access through transportation.
        </p>
      </motion.section>
    </motion.div>
  );
}
