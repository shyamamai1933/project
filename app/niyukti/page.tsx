'use client';

import Link from 'next/link';
import { ArrowLeft, Bell, Calendar, ExternalLink, FileText } from 'lucide-react';

interface NotificationItem {
  id: string;
  title: string;
  category: 'निविदा' | 'नियुक्ति' | 'सामान्य सूचना';
  publishedDate: string;
  lastDate?: string;
  status: 'सक्रिय' | 'बंद';
  link?: string;
}

// नई सूचना / निविदा / नियुक्ति जोड़ने के लिए नीचे दिए गए array में ऑब्जेक्ट जोड़ें
const notifications: NotificationItem[] = [
  {
    id: '04/2026',
    title: 'नवाह 2026 हेतु विभिन्न सामग्री एवं सेवाओं की अल्पकालीन निविदा (सूचना सं०-04/2026)',
    category: 'निविदा',
    publishedDate: '20 नवंबर 2026',
    lastDate: '24 नवंबर 2026 (अपराह्न 2:00 बजे)',
    status: 'सक्रिय',
    link: '/tender-04-2026.pdf', // अगर फाइल का नाम नहीं बदला है, तो '/sarvajanik_suchna_04_2026.pdf' लिखें
  },
];
];

const categoryColors: Record<NotificationItem['category'], string> = {
  निविदा: 'bg-purple-100 text-purple-700 border border-purple-200',
  नियुक्ति: 'bg-blue-100 text-blue-700 border border-blue-200',
  'सामान्य सूचना': 'bg-amber-100 text-amber-800 border border-amber-200',
};

export default function NotificationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-amber-800 hover:bg-amber-50 transition-colors font-semibold text-sm group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            वापस जाएं
          </Link>
          <div className="h-5 w-px bg-amber-200" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
              ॐ
            </div>
            <div>
              <p className="text-sm font-bold text-amber-950 leading-none">
                माँ श्यामा माई मंदिर
              </p>
              <p className="text-xs text-amber-700">दरभंगा, बिहार</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700/60 rounded-full text-amber-100 text-sm font-semibold mb-6">
            <Bell size={16} />
            आधिकारिक सूचनाएं
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
            सूचनाएं एवं निविदाएं
          </h1>
          <p className="text-amber-200 text-lg md:text-xl font-medium">
            माँ श्यामा मंदिर न्यास समिति, दरभंगा
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {notifications.length === 0 ? (
            /* Blank / Empty State */
            <div className="bg-white rounded-3xl border-2 border-amber-100 shadow-sm py-20 px-6 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Bell size={30} />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                वर्तमान में कोई सूचना उपलब्ध नहीं है
              </h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                माँ श्यामा मंदिर न्यास समिति द्वारा जारी की जाने वाली नई निविदाएं,
                नियुक्तियाँ एवं आवश्यक सूचनाएं यहाँ प्रकाशित की जाएंगी।
              </p>
            </div>
          ) : (
            /* Notifications List (auto-renders when items are added) */
            <div className="space-y-4">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border-2 border-amber-100 p-5 md:p-6 shadow-sm hover:border-amber-300 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                        सं. {item.id}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryColors[item.category]}`}
                      >
                        {item.category}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          item.status === 'सक्रिय'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} className="text-amber-700" />
                        प्रकाशन तिथि: {item.publishedDate}
                      </span>
                      {item.lastDate && (
                        <span className="text-red-600 font-semibold">
                          अंतिम तिथि: {item.lastDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-xs font-bold rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all shadow-sm flex-shrink-0"
                    >
                      <FileText size={14} />
                      विवरण देखें
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

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
            © 2026 श्यामा माई मंदिर, दरभंगा। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </footer>
    </div>
  );
}
