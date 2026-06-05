'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Building2, Calendar, FileText, MapPin, Users } from 'lucide-react';

const positions = [
  { title: 'पुजारी', count: '03', category: 'धार्मिक' },
  { title: 'महिला पुजारी', count: '01', category: 'धार्मिक' },
  { title: 'प्रबंधक', count: '01', category: 'प्रशासन' },
  { title: 'सहायक प्रबंधक', count: '01', category: 'प्रशासन' },
  { title: 'लेखापाल', count: '01', category: 'वित्त' },
  { title: 'सहायक लेखापाल', count: '01', category: 'वित्त' },
  { title: 'जनसम्पर्क समन्वयक', count: '01', category: 'सम्पर्क' },
  { title: 'कंप्यूटर ऑपरेटर', count: '01', category: 'तकनीकी' },
  { title: 'बिजली मिस्त्री', count: '01', category: 'तकनीकी' },
];

const tenders = [
  'सुरक्षा एजेन्सी',
  'सफाई एजेन्सी',
  'वाहन पार्किंग',
  'सी. सी. सी. टी.वी. कैमरा',
  'बिजली संचालन',
  'रख-रखाव',
];

const categoryColors: Record<string, string> = {
  धार्मिक: 'bg-orange-100 text-orange-800 border border-orange-200',
  प्रशासन: 'bg-blue-100 text-blue-800 border border-blue-200',
  वित्त: 'bg-green-100 text-green-800 border border-green-200',
  सम्पर्क: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
  तकनीकी: 'bg-gray-100 text-gray-800 border border-gray-200',
};

export default function NiyuktiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-amber-800 hover:bg-amber-50 transition-colors font-semibold text-sm group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            वापस जाएं
          </Link>
          <div className="h-5 w-px bg-amber-200" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center text-white font-bold">
              ॐ
            </div>
            <div>
              <p className="text-sm font-bold text-amber-950 leading-none">माँ शयामा मई मंदिर</p>
              <p className="text-xs text-amber-700">दरभंगा, बिहार</p>
            </div>
          </div>
          <div className="ml-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 animate-pulse">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              आवेदन खुले हैं
            </span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700/60 rounded-full text-amber-100 text-sm font-semibold mb-6">
            <Briefcase size={16} />
            नियुक्ति एवं निविदा
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
            माँ शयामा मंदिर न्यास समिति
          </h1>
          <p className="text-amber-200 text-lg md:text-xl font-medium mb-2">दरभंगा</p>
          <p className="text-amber-300 text-base max-w-2xl mx-auto">
            विज्ञापन सह निविदा — रिक्त पदों पर नियुक्ति हेतु आवेदन आमंत्रित हैं
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="bg-amber-700/50 rounded-2xl px-6 py-4 flex items-center gap-3">
              <Calendar size={22} className="text-amber-200" />
              <div className="text-left">
                <p className="text-xs text-amber-300 font-medium">अंतिम तिथि</p>
                <p className="text-white font-bold">25 जून 2026</p>
              </div>
            </div>
            <div className="bg-amber-700/50 rounded-2xl px-6 py-4 flex items-center gap-3">
              <Users size={22} className="text-amber-200" />
              <div className="text-left">
                <p className="text-xs text-amber-300 font-medium">कुल पद</p>
                <p className="text-white font-bold">11 रिक्तियाँ</p>
              </div>
            </div>
            <div className="bg-amber-700/50 rounded-2xl px-6 py-4 flex items-center gap-3">
              <MapPin size={22} className="text-amber-200" />
              <div className="text-left">
                <p className="text-xs text-amber-300 font-medium">स्थान</p>
                <p className="text-white font-bold">दरभंगा, बिहार</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Notice Image */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">आधिकारिक विज्ञापन</h2>
            <p className="text-gray-600 text-sm">माँ शयामा मंदिर न्यास समिति, दरभंगा द्वारा जारी</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200">
            <Image
              src="/Recruitment.jpeg"
              alt="भर्ती विज्ञापन — माँ शयामा मंदिर न्यास समिति"
              width={900}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-3">
              <span className="text-amber-900 font-bold text-sm">रिक्त पद</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              उपलब्ध पदों की सूची
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {pos.count}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[pos.category]}`}>
                    {pos.category}
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-amber-800 transition-colors">
                  {pos.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                  {pos.count} {parseInt(pos.count) === 1 ? 'पद' : 'पद'} उपलब्ध
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tender Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-3">
              <span className="text-amber-900 font-bold text-sm">निविदा</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              सेवा निविदाएं
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              निम्नलिखित सेवाओं हेतु सक्षम एवं अनुभवी व्यक्ति / एजेन्सी से निविदा आमंत्रित की जाती है
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tenders.map((tender, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-amber-700" />
                </div>
                <span className="font-bold text-gray-900">{tender}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-3">
              <span className="text-amber-900 font-bold text-sm">आवेदन प्रक्रिया</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              आवेदन कैसे करें
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                step: '01',
                title: 'आवेदन पत्र प्राप्त करें',
                desc: 'माँ शयामा मंदिर न्यास कार्यालय, दरभंगा से या सूचना पट्ट से विस्तृत जानकारी प्राप्त करें',
                icon: FileText,
              },
              {
                step: '02',
                title: 'दस्तावेज़ तैयार करें',
                desc: 'सभी आवश्यक दस्तावेज़ और प्रमाण पत्रों की प्रतिलिपि संलग्न करें',
                icon: Briefcase,
              },
              {
                step: '03',
                title: 'डाक / स्पीड पोस्ट से भेजें',
                desc: 'आवेदन पत्र निबंधित डाक / स्पीड पोस्ट द्वारा 25 जून 2026 तक भेजें',
                icon: MapPin,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 text-center border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-black text-amber-200 mb-4 leading-none">{item.step}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <item.icon size={22} />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-black text-lg">!</span>
              </div>
              <div>
                <h4 className="font-black text-red-800 text-lg mb-2">महत्वपूर्ण नोट</h4>
                <p className="text-red-700 leading-relaxed font-medium">
                  पूर्व में इस संदर्भ में आमंत्रित सभी आवेदन निरस्त किया जाता है। पूर्व के आवेदक भी पुनः नये सिरे से आवेदन कर सकते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-12 px-4 bg-gradient-to-br from-amber-900 to-amber-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-200 text-sm font-semibold mb-4">
            माननीय अध्यक्ष एवं माननीय सचिव-सह-जिलाधिकारी के आदेश से निर्गत
          </p>
          <h3 className="text-2xl font-black mb-1">मधुबाला सिन्हा</h3>
          <p className="text-amber-300 font-medium">(प्रभारी सह सचिव)</p>
          <p className="text-amber-400 text-sm mt-2">माँ शयामा मंदिर न्यास समिति, दरभंगा</p>

          <div className="mt-8 pt-8 border-t border-amber-700">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 font-black rounded-xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              मुख्य पृष्ठ पर वापस जाएं
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-300 py-6 px-4 text-center text-sm font-medium">
        © 2024 माँ शयामा मई मंदिर, दरभंगा। सर्वाधिकार सुरक्षित।
      </footer>
    </div>
  );
}
