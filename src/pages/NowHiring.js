import React, { useEffect } from "react";
import Layout from "../components/Layout";

export default function NowHiring() {
  useEffect(() => {
    window.location.href = "https://www.themacbus.org/now-hiring";
  }, []);

  return (
    <Layout>
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg text-yellow-400">Redirecting to job opportunities...</p>
      </section>
    </Layout>
  );
}
