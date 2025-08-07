import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 w-full
        text-red-600
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:text-red-800
        ${className}`}
      {...props}
    />
  );
}
