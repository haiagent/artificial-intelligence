import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="md:flex-grow">
            <p className="text-white font-bold text-xl mb-2">
              Artificial Intelligence Portfolio
            </p>
            <p className="text-gray-400">
              A one-page website exploring the world of AI.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <a
              href="#"
              className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 md:mt-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;