import React from "react";

export default function RestrictedAccess() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* Header */}
      <header className="flex justify-center py-6 border-b border-gray-800">
        <img
          src="/dcanalytica-logo.png"   // ✅ logo served from public/
          alt="DCAnalytica Logo"
          className=" sm:w-20 bg-white rounded-lg animate-pulse "
        />
      </header>

      {/* Main Warning Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-red-500 mb-6 tracking-wide animate-pulse">
          ⚠️ Access Restricted
        </h1>

        <div className="bg-gray-900/80 rounded-xl shadow-2xl p-6 sm:p-8 max-w-xl w-full border border-red-600">
          <p className="mb-2">Not authorised outside of United States.</p>
          <p className="mb-2">Foreign IP detected.</p>
          <p className="mb-6">
            VPN and foreign IP addresses are prohibited from entering the site.
          </p>

          <div className="bg-black/70 rounded-lg p-5 border border-red-500">
            <p className="text-gray-300">
              If you are our client, please contact the hotline first.
            </p>
            <p className="text-blue-400 font-semibold mt-2 text-lg">
              Secure Client Support Available
            </p>
          </div>
        </div>

        <p className="text-gray-400 mt-10 italic">
          Sorry for the inconvenience.
        </p>
      </main>

      {/* Extra Professional Content */}
      <section className="bg-gray-950 py-12 px-6 text-center border-t border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-100">
          About DCAnalytica
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-6">
          DCAnalytica is a research & consulting entity specializing in secure
          data insights, compliance frameworks, and advanced analytics. Our
          mission is to empower organizations with clarity and confidence in a
          complex digital world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              Data Security
            </h3>
            <p className="text-gray-400 text-sm">
              Protecting sensitive information with cutting-edge monitoring and
              compliance protocols.
            </p>
          </div>
          <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              Research & Insights
            </h3>
            <p className="text-gray-400 text-sm">
              Delivering actionable intelligence through advanced analytics and
              market studies.
            </p>
          </div>
          <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              Compliance Advisory
            </h3>
            <p className="text-gray-400 text-sm">
              Guiding organizations through regulatory landscapes with tailored
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2026 DCAnalytica — Research & Consulting, LLC. All rights reserved.
      </footer>
    </div>
  );
}
