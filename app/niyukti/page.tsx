'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Calendar, ExternalLink, MapPin, Users } from 'lucide-react';

const vacancies = [
  { sno: 1,  name: 'पुजारी',                      count: '03', category: 'धार्मिक', lastDate: '6 जुलाई2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 2,  name: 'महिला पुजारी',                count: '01', category: 'धार्मिक', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 3,  name: 'प्रबंधक',                     count: '01', category: 'प्रशासन', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 4,  name: 'सहायक प्रबंधक',              count: '01', category: 'प्रशासन', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 5,  name: 'लेखापाल',                     count: '01', category: 'वित्त',   lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 6,  name: 'सहायक लेखापाल',             count: '01', category: 'वित्त',   lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 7,  name: 'जनसम्पर्क समन्वयक',         count: '01', category: 'सम्पर्क', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 8,  name: 'कंप्यूटर ऑपरेटर',           count: '01', category: 'तकनीकी', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 9,  name: 'बिजली मिस्त्री',             count: '01', category: 'तकनीकी', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/zdbkbgDm3gW5SxBz5' },
  { sno: 10, name: 'सुरक्षा एजेन्सी (निविदा)',   count: '—',  category: 'निविदा',  lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
  { sno: 11, name: 'सफाई एजेन्सी (निविदा)',      count: '—',  category: 'निविदा',  lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
  { sno: 12, name: 'वाहन पार्किंग (निविदा)',     count: '—',  category: 'निविदा',  lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
  { sno: 13, name: 'सी.सी.टी.वी. कैमरा (निविदा)', count: '—', category: 'निविदा', lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
  { sno: 14, name: 'बिजली संचालन (निविदा)',      count: '—',  category: 'निविदा',  lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
  { sno: 15, name: 'रख-रखाव (निविदा)',           count: '—',  category: 'निविदा',  lastDate: '6 जुलाई 2026', applyLink: 'https://forms.gle/fVi1rxTwxaLdAPddA' },
];

const categoryColors: Record<string, string> = {
  धार्मिक: 'bg-orange-100 text-orange-700 border border-orange-200',
  प्रशासन: 'bg-blue-100 text-blue-700 border border-blue-200',
  वित्त:   'bg-green-100 text-green-700 border border-green-200',
  सम्पर्क: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
  तकनीकी: 'bg-slate-100 text-slate-700 border border-slate-200',
  निविदा:  'bg-purple-100 text-purple-700 border border-purple-200',
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
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            वापस जाएं
          </Link>
          <div className="h-5 w-px bg-amber-200" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
              ॐ
            </div>
            <div>
              <p className="text-sm font-bold text-amber-950 leading-none">माँ श्यामा माई मंदिर</p>
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
            माँ श्यामा मंदिर न्यास समिति
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
            <p className="text-gray-600 text-sm">माँ श्यामा मंदिर न्यास समिति, दरभंगा द्वारा जारी</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200">
            <Image
              src="/Recruitment.jpeg"
              alt="भर्ती विज्ञापन — माँ श्यामा मंदिर न्यास समिति"
              width={900}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vacancies Table */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-3">
              <span className="text-amber-900 font-bold text-sm">रिक्तियाँ एवं निविदाएं</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              पद एवं निविदा सूची
            </h2>
            <p className="text-gray-500 text-sm">
              आवेदन निबंधित डाक / स्पीड पोस्ट द्वारा भेजें — अंतिम तिथि:{' '}
              <span className="font-bold text-red-600">25 जून 2026</span>
            </p>
          </div>

                    {/* Important Note */}
          <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-600 font-black text-lg leading-none">!</span>
            </div>
            <div>
              <h4 className="font-black text-red-800 mb-1">आवेदन / निविदा जमा करने के निर्देश</h4>
              <ol className="list-decimal pl-5 space-y-2 text-red-700 text-sm">
              <li>"आवेदन करें" बटन पर क्लिक करें।</li>
              <li>खुलने वाले Google Form में दिए गए लिंक से आवेदन / निविदा फॉर्म डाउनलोड करें।</li>
              <li>फॉर्म को मोबाइल/कंप्यूटर पर भरें या प्रिंट निकालकर भरें।</li>
              <li>भरे हुए फॉर्म को PDF, JPG या PNG फॉर्मेट में तैयार करें।</li>
              <li>आवश्यक दस्तावेज़ों को भी PDF, JPG या PNG फॉर्मेट में तैयार रखें।</li>
              <li>Google Form में मांगी गई जानकारी भरें।</li>
              <li>भरे हुए फॉर्म तथा आवश्यक दस्तावेज़ अपलोड करें।</li>
              <li>सभी जानकारी जांचकर Submit बटन पर क्लिक करें।</li>
            </ol>

            <h5 className="font-bold text-red-800 mt-4 mb-2">ध्यान दें:</h5>

            <ul className="list-disc pl-5 space-y-1 text-red-700 text-sm">
              <li>सभी जानकारी सही एवं पूर्ण रूप से भरें।</li>
              <li>अपलोड की गई फाइलें स्पष्ट और पढ़ने योग्य होनी चाहिए।</li>
              <li>अधूरा आवेदन / निविदा स्वीकार नहीं किया जाएगा।</li>
            </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-red-600 font-black text-lg leading-none">!</span>
            </div>
            <div>
              <h4 className="font-black text-red-800 mb-1">महत्वपूर्ण नोट</h4>
              <p className="text-red-700 text-sm leading-relaxed">
                पूर्व में इस संदर्भ में आमंत्रित सभी आवेदन निरस्त किए जाते हैं। पूर्व के आवेदक भी
                पुनः नये सिरे से आवेदन कर सकते हैं।
              </p>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-2xl border-2 border-amber-100 overflow-hidden shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-800 to-amber-900 text-white">
                  <th className="px-5 py-4 text-left font-black w-16">क्र.सं.</th>
                  <th className="px-5 py-4 text-left font-black">पद / सेवा का नाम</th>
                  <th className="px-5 py-4 text-center font-black w-28">रिक्तियाँ</th>
                  <th className="px-5 py-4 text-center font-black w-36">श्रेणी</th>
                  <th className="px-5 py-4 text-center font-black w-36">अंतिम तिथि</th>
                  <th className="px-5 py-4 text-center font-black w-36">आवेदन लिंक</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((v, idx) => (
                  <tr
                    key={v.sno}
                    className={`border-b border-amber-100 transition-colors duration-150 hover:bg-amber-100/70 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'
                    }`}
                  >
                    <td className="px-5 py-4 font-bold text-gray-400">{v.sno}</td>
                    <td className="px-5 py-4 font-bold text-gray-900">{v.name}</td>
                    <td className="px-5 py-4 text-center font-black text-amber-800">{v.count}</td>
                    <td className="px-5 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${categoryColors[v.category]}`}>
                        {v.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-red-600 font-bold text-xs">{v.lastDate}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <a
                        href={v.applyLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-xs font-bold rounded-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-200 hover:shadow-md transform hover:scale-105"
                      >
                        आवेदन करें
                        <ExternalLink size={12} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {vacancies.map((v) => (
              <div
                key={v.sno}
                className="bg-white rounded-2xl border-2 border-amber-100 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-800 font-black text-xs flex-shrink-0">
                      {v.sno}
                    </span>
                    <h3 className="font-black text-gray-900 text-sm leading-tight">{v.name}</h3>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColors[v.category]}`}>
                    {v.category}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-amber-100">
                  <p className="text-xs text-gray-500">
                    रिक्तियाँ: <span className="font-black text-amber-800">{v.count}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-red-600 font-bold">{v.lastDate}</span>
                  </p>
                  <a
                    href={v.applyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-xs font-bold rounded-lg"
                  >
                    आवेदन करें
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-900 font-black rounded-xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg mb-8"
          >
            <ArrowLeft size={20} />
            मुख्य पृष्ठ पर वापस जाएं
          </Link>
          <p className="text-amber-400 text-xs mt-4">
            © 2024 माँ श्यामा माई मंदिर, दरभंगा। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </footer>
    </div>
  );
}
