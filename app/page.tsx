'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  Calendar,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';

// होमपेज पर दिखने वाली नवीनतम सूचनाएं (नई निविदा/नियुक्ति आने पर यहाँ जोड़ें)
const latestNotices = [
  {
    id: '04/2026',
    category: 'निविदा',
    title: 'नवाह 2026 हेतु विभिन्न सामग्री एवं सेवाओं की अल्पकालीन निविदा (सूचना सं०-04/2026)',
    lastDate: '24 नवंबर 2026 (अपराह्न 2:00 बजे)',
    status: 'सक्रिय',
    link: '/tender-04-2026.pdf',
  },
];

// गैलरी की तस्वीरें — public/ फोल्डर में असली फोटो डालकर src बदल लें
const galleryPhotos = [
  {
    id: 1,
    title: 'माँ श्यामा माई मंदिर मुख्य परिसर',
    caption: 'माधवेश्वर परिसर, दरभंगा',
    src: '/gallery-1.jpg',
  },
  {
    id: 2,
    title: 'गर्भगृह एवं दिव्य श्रृंगार',
    caption: 'माँ श्यामा (काली) की अलौकिक प्रतिमा',
    src: '/gallery-2.jpg',
  },
  {
    id: 3,
    title: 'नवाह महायज्ञ एवं पर्व उत्सव',
    caption: 'वार्षिक धार्मिक आयोजन',
    src: '/gallery-3.jpg',
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryPhotos)[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-stone-900 scroll-smooth">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#5C1414] text-white shadow-md border-b border-amber-500/30">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <p className="font-black text-base md:text-lg leading-tight truncate">
              माँ श्यामा मंदिर न्यास समिति
            </p>
            <p className="text-[11px] md:text-xs text-amber-200/90 truncate">
              माधवेश्वर परिसर, दरभंगा (बिहार)
            </p>
          </Link>

          {/* Desktop Navigation — Only Home, About, History, Notification, Gallery, Contact */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            <a href="#home" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              होम
            </a>
            <a href="#about" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              परिचय
            </a>
            <a href="#history" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              इतिहास
            </a>
            <Link
              href="/niyukti"
              className="mx-1 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#4A0E0E] font-bold transition-colors shadow-sm"
            >
              <Bell size={15} />
              सूचनाएं
            </Link>
            <a href="#gallery" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              गैलरी
            </a>
            <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              संपर्क
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="मेनू खोलें"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#4A0E0E] border-t border-amber-500/20 px-4 py-3 space-y-1">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10"
            >
              होम (Home)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10"
            >
              परिचय (About)
            </a>
            <a
              href="#history"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10"
            >
              इतिहास (History)
            </a>
            <Link
              href="/niyukti"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold bg-amber-500 text-[#4A0E0E]"
            >
              <Bell size={15} />
              सूचनाएं (Notification)
            </Link>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10"
            >
              गैलरी (Gallery)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10"
            >
              संपर्क (Contact)
            </a>
          </div>
        )}
      </header>

      {/* Hero Section with Temple Background */}
      <section
        id="home"
        className="relative bg-[#4A0E0E] text-white overflow-hidden"
      >
        {/* Background Temple Image (public/temple-bg.jpg) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/temple-bg.jpeg')" }}
        />

        {/* Dark Maroon Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0E0E]/90 via-[#5C1414]/75 to-[#4A0E0E]/55" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs md:text-sm font-semibold mb-4 backdrop-blur-sm">
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 drop-shadow-sm">
              जय श्यामा माई 
            </h1>
            <p className="text-amber-100/95 text-sm sm:text-base md:text-lg leading-relaxed mb-8 drop-shadow-sm">
              आस्था, भक्ति और विश्वास का पावन सिद्धपीठ — वर्ष 1933 में स्थापित, ललित नारायण मिथिला विश्वविद्यालय परिसर, कमेश्वरनगर, दरभंगा।
            </p>

            {/* Quick Info Pills (Darshan Timing & Location) */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="inline-flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm">
                <Clock size={18} className="text-amber-300 flex-shrink-0" />
                <span>
                  <strong className="text-amber-200">दर्शन समय:</strong> प्रातः 5:00 AM – रात्रि 10:00 PM
                </span>
              </div>
              <div className="inline-flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm">
                <MapPin size={18} className="text-amber-300 flex-shrink-0" />
                <span>कमेश्वरनगर, दरभंगा, बिहार 846004</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/niyukti"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#4A0E0E] font-bold text-sm md:text-base transition-colors shadow-lg"
              >
                <Bell size={18} />
                नवीनतम सूचनाएं एवं निविदा देखें
              </Link>
              <a
                href="#history"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/30 hover:bg-black/45 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm md:text-base transition-colors"
              >
                मंदिर का इतिहास
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notifications Strip */}
      <section className="max-w-6xl w-full mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl border border-amber-200 shadow-lg p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-lg md:text-xl font-black text-[#5C1414]">
                नवीनतम सूचनाएं एवं निविदाएं
              </h2>
            </div>
            <Link
              href="/niyukti"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#7D1E1E] hover:text-amber-700"
            >
              सभी सूचनाएं देखें
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {latestNotices.map((notice) => (
              <div
                key={notice.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-[#FFFBF5] border border-amber-200/80"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                      {notice.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {notice.status}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      सूचना सं० {notice.id}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-red-700 font-semibold inline-flex items-center gap-1.5">
                    <Calendar size={13} />
                    अंतिम तिथि: {notice.lastDate}
                  </p>
                </div>

                <a
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#6B1818] hover:bg-[#521111] text-white text-xs md:text-sm font-bold transition-colors flex-shrink-0"
                >
                  <FileText size={15} />
                  PDF देखें
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (परिचय) */}
      <section id="about" className="max-w-6xl w-full mx-auto px-4 pt-14 md:pt-20 pb-8 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            हमारे बारे में
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#5C1414] mt-1">
            मंदिर एवं न्यास समिति का परिचय
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs font-bold text-amber-800">स्थापना वर्ष</p>
            <p className="text-2xl font-black text-[#5C1414] mt-1">1933</p>
            <p className="text-xs text-stone-600 mt-1">
              महाराजा कामेश्वर सिंह (दरभंगा राज) द्वारा निर्मित
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs font-bold text-amber-800">पूजा पद्धति</p>
            <p className="text-lg font-black text-[#5C1414] mt-1">वैदिक एवं तांत्रिक विधि</p>
            <p className="text-xs text-stone-600 mt-1">
              नवरात्रि एवं वार्षिक नवाह महायज्ञ के प्रमुख आयोजन
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs font-bold text-amber-800">प्रबंधन</p>
            <p className="text-lg font-black text-[#5C1414] mt-1">न्यास समिति, दरभंगा</p>
            <p className="text-xs text-stone-600 mt-1">
              बिहार राज्य धार्मिक न्यास पर्षद, पटना से निबंधित
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-amber-100 p-6 md:p-8 shadow-sm text-stone-700 text-sm md:text-base leading-relaxed">
          <p>
            <strong>माँ श्यामा मंदिर न्यास समिति, दरभंगा</strong> (बिहार राज्य धार्मिक न्यास पर्षद , पटना से निबंधित) मंदिर परिसर की व्यवस्था, धार्मिक आयोजनों, स्वच्छता, श्रद्धालुओं की सुविधा तथा वार्षिक नवाह महायज्ञ जैसे प्रमुख पर्वों का संचालन पारदर्शी रूप से करती है। यह मंदिर केवल एक धार्मिक स्थल ही नहीं, बल्कि मिथिलांचल की आस्था और सामाजिक एकता का प्रमुख केंद्र है।
          </p>
        </div>
      </section>

      {/* History Section (इतिहास) */}
      <section id="history" className="max-w-6xl w-full mx-auto px-4 py-10 md:py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            ऐतिहासिक धरोहर
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#5C1414] mt-1">
            मंदिर का इतिहास
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-amber-100 p-6 md:p-8 shadow-sm space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
          <p>
            <strong>माँ श्यामा माई मंदिर</strong> बिहार के दरभंगा जिले में ललित नारायण मिथिला विश्वविद्यालय परिसर के भीतर स्थित माता काली को समर्पित एक अत्यंत प्रसिद्ध और पवित्र सिद्धपीठ है। इस ऐतिहासिक मंदिर का निर्माण वर्ष <strong>1933</strong> में दरभंगा राज के महाराजा कामेश्वर सिंह ने अपने पिता महाराजा रामेश्वर सिंह की चिता भूमि (श्मशान) पर करवाया था, जो स्वयं एक महान तंत्र साधक थे।
          </p>
          <p>
            मंदिर के गर्भगृह में भगवान शिव की छाती पर विराजमान माँ श्यामा (काली) की एक विशाल और अलौकिक प्रतिमा स्थापित है, जिनके दाहिनी ओर महाकाल और बाईं ओर भगवान गणेश तथा बटुक भैरव की मूर्तियाँ हैं।
          </p>
          <p>
            इस मंदिर की सबसे अनोखी विशेषता यह है कि आमतौर पर श्मशान भूमि पर बने मंदिरों में मांगलिक कार्य वर्जित होते हैं, लेकिन यहाँ माता को कुलदेवी मानकर शादी-विवाह, मुंडन और उपनयन जैसे सभी शुभ संस्कार अत्यंत धूमधाम से संपन्न किए जाते हैं। यहाँ वैदिक और तांत्रिक दोनों विधियों से पूजा की जाती है।
          </p>
        </div>
      </section>

      {/* Photo Gallery Section (गैलरी) */}
      <section id="gallery" className="bg-amber-50/60 border-y border-amber-100 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              मंदिर की झलकियाँ
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#5C1414] mt-1">
              चित्र दीर्घा (Gallery)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group text-left bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200">
              <p className="font-bold text-stone-900 text-sm md:text-base">
                {selectedPhoto.title}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="bg-stone-100 max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="px-4 py-3 text-xs text-stone-600">{selectedPhoto.caption}</div>
          </div>
        </div>
      )}

      {/* Contact & Footer (संपर्क) */}
      <footer id="contact" className="bg-[#4A0E0E] text-amber-100 mt-auto scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black text-white text-lg mb-3">
              माँ श्यामा मंदिर न्यास समिति
            </h3>
            <p className="text-sm text-amber-200/80 leading-relaxed">
              माधवेश्वर परिसर, कमेश्वरनगर, दरभंगा, बिहार — 846004
            </p>
          </div>

          <div className="space-y-2.5 text-sm">
            <h4 className="font-bold text-white mb-2">संपर्क विवरण</h4>
            <p className="flex items-center gap-2 text-amber-200/90">
              <Phone size={15} className="text-amber-400 flex-shrink-0" />
              +91 9234321940 
            </p>
            <p className="flex items-center gap-2 text-amber-200/90">
              <Mail size={15} className="text-amber-400 flex-shrink-0" />
            </p>
            <p className="flex items-center gap-2 text-amber-200/90">
              <Mail size={15} className="text-amber-400 flex-shrink-0" />
              shyamamai1933@gmail.com
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-bold text-white mb-2">त्वरित लिंक</h4>
            <div className="flex flex-col gap-1.5 text-amber-200/90">
              <a href="#home" className="hover:text-white">होम</a>
              <a href="#about" className="hover:text-white">परिचय</a>
              <a href="#history" className="hover:text-white">इतिहास</a>
              <Link href="/niyukti" className="hover:text-white font-semibold text-amber-300">
                सूचनाएं
              </Link>
              <a href="#gallery" className="hover:text-white">गैलरी</a>
              <a href="#contact" className="hover:text-white">संपर्क</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-amber-300/80">
          © 2026 माँ श्यामा मंदिर न्यास समिति, दरभंगा। सर्वाधिकार सुरक्षित।
        </div>
      </footer>
    </div>
  );
}
