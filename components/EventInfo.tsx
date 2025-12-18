import React from 'react';
import { MapPin } from 'lucide-react';

const EventInfo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">開催概要</h2>
            <p className="text-slate-500 mt-2">AI / DX サミット in 大阪 2026</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Date</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">2026年11月22日（日）</p>
                <p className="text-slate-600">13:00 開場 / 13:30 スタート / 18:00 終了予定</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Place</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">グランフロント大阪 ナレッジキャピタル（予定）</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center mt-1">
                  <MapPin size={14} className="mr-1" />
                  Google Mapで見る
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Contents</span>
              </div>
              <div className="w-full">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded text-sm">Talk</span>
                    <span className="text-slate-800 font-medium">5人のゲストによるLark活用・収益化事例</span>
                  </li>
                  <li className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded text-sm">Work</span>
                    <span className="text-slate-800 font-medium">明日から使える「業務改善」ワークショップ</span>
                  </li>
                  <li className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded text-sm">Meet</span>
                    <span className="text-slate-800 font-medium">登壇者・参加者との交流＆仲間づくり</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;