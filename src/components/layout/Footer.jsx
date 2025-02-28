import { Brain } from "lucide-react";

const Footer = ({ customClass = "" }) => {
  return (
    <footer className={`bg-blue-600 text-gray-400 py-5 ${customClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-gray-300" />
            <span className="text-white font-semibold">STARKLA</span>
          </div>
          <p className="text-sm text-gray-300">
            © 2025 STARKLA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
