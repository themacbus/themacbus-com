import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section
        className="text-center py-16 px-4 bg-[#f7f7f7] rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Bridging Policy, Planning & Execution for Mississippi Mobility
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The MAC Bus LLC is a veteran-, woman-, and minority-owned Regional Transit Alignment & Coordination Firm
          connecting community needs with high-impact transportation solutions.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <MotionLink
            to="/contact"
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold text-lg"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Partner With Us
          </MotionLink>
          <MotionLink
            to="/book"
            className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-lg"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            Book The Transporter
          </MotionLink>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          {
            title: 'Regional Transit Planning',
            desc: 'Strategic mobility planning aligned with regional policies and long-term growth.',
          },
          {
            title: 'Data & Technology',
            desc: 'Harnessing data for smarter, more responsive transportation systems.',
          },
          {
            title: 'Premium Car Service',
            desc: 'Reliable, high-end rides for justice-involved families and communities.',
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
