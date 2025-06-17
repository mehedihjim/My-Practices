"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          About FlavorVault
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold">FlavorVault</span> — your go-to
          destination for discovering, collecting, and organizing recipes that
          ignite your taste buds. We’re passionate about turning everyday
          cooking into a flavorful journey.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Built and maintained by <span className="font-semibold">USS</span>,
          FlavorVault is crafted with performance, usability, and delight in
          mind. We aim to empower food lovers everywhere with tools to curate
          their personal recipe collections with ease.
        </p>

        <p className="mt-6 text-base text-gray-500 italic">
          “Your taste. Your vault. Your flavor story.”
        </p>

        <p className="mt-10 text-sm text-gray-400">
          Designed and developed by <span className="font-medium">MH Jim</span>{" "}
          ✨
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
