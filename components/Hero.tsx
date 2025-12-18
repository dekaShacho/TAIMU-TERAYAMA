import React from 'react';
import { ArrowRight, UserCircle } from 'lucide-react';
import { MAIN_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-700 font-bold text-sm">大阪開催決定！先行エントリー受付中</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-slate-900">
              業務改善の<br />
              <span className="gradient-text">新しいスタンダード</span>の<br />
              輪に入ろう。
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Larkの登場で、「業務改善」の定義が変わり始めています。<br />
              まだ多くの人が気づいていない今だからこそ、<br />
              <span className="font-bold text-slate-900 bg-yellow-200 px-1">先行者利益</span>をつかむチャンスがある。<br />
              <br />
              Entimeたいむと5人の実践者が、<br />
              その可能性と「ワクワクする未来」をシェアします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#register" className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                サミットに参加する
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-8 py-4 rounded-xl transition flex items-center justify-center">
                詳しく見る
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative">
            {/* Blob shape background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/50 to-purple-200/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img src={MAIN_IMAGE} alt="イベントの雰囲気" className="w-full h-full object-cover" />
                
                {/* Overlays */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <UserCircle className="text-blue-500" size={20} />
                  <p className="font-bold text-slate-800 text-sm">Lark研究所 たいむ</p>
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-float">
                  + 5 Special Guests
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;