import React from 'react';
import { Youtube, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-10 text-center border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <span className="font-bold text-white text-lg">株式会社Entime</span>
          <p className="text-sm mt-1">「面倒くさい」を解消し、人が本来の仕事に熱狂できる世界へ。</p>
        </div>
        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a href="#" className="hover:text-white transition" aria-label="YouTube">
            <Youtube size={24} />
          </a>
          <a href="#" className="hover:text-white transition" aria-label="Twitter">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition" aria-label="Instagram">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-xs">© 2026 Entime Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;