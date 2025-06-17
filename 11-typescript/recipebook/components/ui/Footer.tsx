import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} USS. All rights reserved. Designed
          and developed by{" "}
          <a href="" className="animate-pulse text-gray-600">
            MH Jim
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
