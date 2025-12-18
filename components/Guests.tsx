import React from 'react';
import { Plus } from 'lucide-react';
import { GUESTS } from '../constants';

const Guests: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-slate-900">その「輪」の中にいるのは、<br />こんな人たちです。</h2>
          <p className="text-slate-600">今回のサミットに登壇する、5人の先駆者たち。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GUESTS.map((guest) => (
            <div key={guest.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <img src={guest.image} className="w-full h-full object-cover" alt={guest.name} />
                </div>
                <div>
                  <p className={`text-xs font-bold ${guest.roleColor} ${guest.roleBg} px-2 py-0.5 rounded-full inline-block mb-1`}>
                    {guest.role}
                  </p>
                  <h3 className="font-bold text-lg text-slate-900">{guest.name}</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {guest.description}
              </p>
            </div>
          ))}

          {/* Join the Circle Card */}
          <div className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white shadow-xl transform scale-105 border-2 border-blue-500">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl mb-4 animate-bounce">
              <Plus size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">次は、あなたです。</h3>
            <p className="text-slate-300 text-sm mb-4">
              この輪に入って、<br />一緒にノウハウを共有しませんか？
            </p>
            <a href="#register" className="text-blue-400 font-bold hover:text-blue-300 text-sm border-b border-blue-400 pb-0.5">
              サミットに参加する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guests;