import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <Layout>
      <section className="min-h-screen bg-black text-white py-16 px-6 md:px-20 lg:px-32">
        <motion.h1
          className="text-5xl font-extrabold mb-10 text-yellow-400 tracking-wide drop-shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          About Us
        </motion.h1>

        <motion.div
          className="max-w-4xl space-y-10 leading-relaxed text-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <p>
            <strong className="text-yellow-400">The Transporter</strong> was founded by husband-and-wife
            team <strong>Henry and Tawanna McFarlin</strong>, two retired U.S. Army veterans with over{" "}
            <strong>40 years of combined transportation experience</strong> and more than{" "}
            <strong>35 years of civilian service</strong>. What began as a frustrating moment—struggling
            to get around the city for short-distance travel—sparked something bigger: a realization
            that <em>mobility isn’t just about convenience</em>, it’s about{" "}
            <strong>access, opportunity, and equity</strong>.
          </p>

          <p>
            What started as a casual conversation about golf carts quickly grew into a full-blown
            vision: <strong>a transportation solution that truly serves the community</strong>. Whether
            it’s <strong>fixed-route shuttles</strong>, <strong>premium rides</strong>, or{" "}
            <strong>connecting people to work, school, and essential services</strong>, The Transporter
            was built to keep people moving. Because let’s face it:
          </p>

          <motion.blockquote
            className="border-l-4 border-yellow-400 pl-6 italic text-yellow-300 text-lg shadow-md bg-gray-900 rounded-md py-4"
            variants={fadeInUp}
            custom={2}
          >
            “Without transportation, you can’t work. Without work, you can’t buy a car. Without a car,
            there’s no insurance.”
          </motion.blockquote>

          <p>It’s a cycle we’re here to break.</p>

          <hr className="border-gray-700 my-12" />

          <motion.h2
            className="text-4xl font-bold text-yellow-400 mb-6"
            variants={fadeInUp}
            custom={3}
          >
            Our Founders
          </motion.h2>
          <p>
            <strong>Tawanna McFarlin</strong>, CEO and visionary behind The Transporter, leads
            strategic growth, partnerships, and community outreach. <br />
            <strong>Henry McFarlin</strong>, COO, handles daily operations, logistics, and execution.
            As in marriage, they work side by side—united in purpose—to bring this vision to life.
          </p>

          <motion.h2
            className="text-4xl font-bold text-yellow-400 mt-12 mb-6"
            variants={fadeInUp}
            custom={4}
          >
            Our Roots
          </motion.h2>
          <p>
            The McFarlins live in <strong>Chesapeake, Virginia</strong> with their two children,{" "}
            <strong>Henry and Takota</strong>, and three beloved dogs. With deep roots in{" "}
            <strong>Mississippi</strong> and a heart for <strong>underserved communities</strong>, they
            are actively <strong>relocating to Moss Point, MS</strong>, to help rebuild and reimagine
            what local transportation can look like for the Gulf Coast.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
