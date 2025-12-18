import React from 'react';
import { Quote } from 'lucide-react';
import { TIME_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-black mb-12 text-slate-900">
          Larkで<span className="circle-text text-blue-600">業務改善</span>を仕事にする。<br />
          そんな未来が、もう来ています。
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left items-center">
          <div className="space-y-6 text-slate-600 text-lg">
            <p>
              「Larkを入れたけど、使いこなせていない」<br />
              そんな企業が今、日本中に溢れています。
            </p>
            <p>
              これは裏を返せば、<br />
              <strong className="text-slate-900 underline decoration-orange-400 decoration-4 underline-offset-4">「Larkで業務を整理できる人」</strong>の価値が<br />
              爆上がりしているということ。
            </p>
            <p>
              ただの設定代行ではありません。<br />
              チームの働き方を変え、ムダを無くし、<br />
              みんなが笑顔で働ける環境をつくる。<br />
              そんなクリエイティブな「業務改善」の領域が広がっています。
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl relative">
            <Quote className="text-blue-200 absolute top-4 left-4" size={40} />
            <p className="font-bold text-xl text-slate-800 mb-4 relative z-10">
              まだプレイヤーが少ない今だからこそ、<br />
              いち早くこの領域に飛び込んでほしい。<br />
              一緒に市場を作っていく仲間が必要です。
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                <img src={TIME_IMAGE} className="w-full h-full object-cover" alt="たいむ" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">たいむ (寺山 大夢)</p>
                <p className="text-slate-500">株式会社Entime 代表</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;