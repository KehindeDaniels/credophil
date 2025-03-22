import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <div className="space-y-2"></div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <div className="space-y-2"></div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2"></div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-y-2"></div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
