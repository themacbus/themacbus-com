import React from "react";
import Layout from "../components/Layout";

export default function ShuttlePricing() {
  const pricing = [
    { label: "One-Way", price: "$1.75", color: "bg-yellow-100 border-yellow-500 text-yellow-800" },
    { label: "Round Trip", price: "$4.00", color: "bg-green-100 border-green-500 text-green-800" },
    { label: "Weekly Pass", price: "$24.00", color: "bg-blue-100 border-blue-500 text-blue-800" },
    { label: "Monthly Pass", price: "$64.00", color: "bg-purple-100 border-purple-500 text-purple-800" },
  ];

  return (
    <Layout>
      <div className="bg-yellow-400 text-gray-900 py-16 px-6 rounded-none shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Shuttle Pricing</h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Affordable fares designed to keep you moving. Whether you're riding once or every day, we’ve got you covered.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {pricing.map(({ label, price, color }) => (
            <div
              key={label}
              className={`border-l-4 p-6 rounded-2xl shadow-md hover:shadow-xl transition ${color} flex flex-col justify-center items-center text-center`}
            >
              <h2 className="text-xl font-bold">{label}</h2>
              <p className="text-4xl font-extrabold mt-2">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
