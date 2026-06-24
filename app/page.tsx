'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail, Heart, ShoppingCart, Bell, ChevronRight, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const announcements = [
    {
      id: 1,
      title: 'नवरात्रि महोत्सव',
      description: 'प्रतिदिन विशेष आरती और प्रसाद वितरण का आयोजन',
      date: 'अक्टूबर 2-11',
      type: 'festival',
    },
    {
      id: 2,
      title: 'महामाया पूजा',
      description: 'विशेष अभिषेक पूजा में भाग लें और आशीर्वाद प्राप्त करें',
      date: 'प्रतिशनिवार',
      type: 'puja',
    },
    {
      id: 3,
      title: 'दर्शन समय विस्तारित',
      description: 'रविवार को दर्शन समय सुबह 4:00 AM से रात 11:00 PM तक',
      date: 'प्रतिरविवार',
      type: 'notice',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    '/WhatsApp_Image_2026-06-04_at_8.59.03_PM.jpeg',
    '/WhatsApp_Image_2026-06-24_at_11.28.26_PM.jpeg,
    '/WhatsApp_Image_2026-06-04_at_8.59.04_PM_-_Copy.jpeg',
    '/WhatsApp_Image_2026-06-04_at_8.59.03_PM_(1).jpeg',
  ];

  const navItems = [
    { label: 'होम', href: '#home' },
    { label: 'परिचय', href: '#about' },
    { label: 'दर्शन', href: '#darshan' },
    { label: 'गैलरी', href: '#gallery' },
    { label: 'समाचार', href: '#announcements' },
    { label: 'संपर्क', href: '#contact' },
  ];

  const serviceItems = [
    {
      icon: '🕯️',
      title: 'आरती समय',
      description: 'प्रातःकाल आरती: 5:00 AM\nसायंकालीन आरती: 7:00 PM',
    },
    {
      icon: '🙏',
      title: 'पूजा सेवाएँ',
      description: 'सभी अवसरों और त्योहारों के लिए विशेष पूजाएं',
    },
    {
      icon: '📿',
      title: 'आध्यात्मिक मार्गदर्शन',
      description: 'दिव्य शिक्षाओं और दर्शन को समझें',
    },
    {
      icon: '🎉',
      title: 'पर्व समारोह',
      description: 'पवित्र त्योहारों का भक्तिपूर्ण उत्सव',
    },
  ];

  const donationTiers = [
    { amount: '₹ 1101', label: 'अभिषेक पूजन' },
    { amount: '₹ 1101', label: 'विशेष पूजा' },
    { amount: '₹ 1101', label: 'हवन पूजन' },
    { amount: '₹ 1101', label: 'श्राद्ध और तर्पण' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ॐ
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-amber-950 tracking-wide">माँ श्यामा माई</h1>
                <p className="text-xs text-amber-700 font-medium">दरभंगा, बिहार</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Header Buttons */}
            <div className="hidden sm:flex gap-2 items-center">
              <Link
                href="/niyukti"
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 relative"
              >
                <Briefcase size={15} />
                नियुक्ति
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-yellow-400 rounded-full"></span>
              </Link>
              <button className="px-5 py-2 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                <Heart size={16} className="fill-white" />
                दान करें
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} className="text-amber-700" /> : <Menu size={24} className="text-amber-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-amber-100 py-4 space-y-2 bg-gradient-to-b from-transparent to-amber-50">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-100 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/niyukti"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-lg"
              >
                <Briefcase size={15} />
                नियुक्ति
              </Link>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-sm font-bold rounded-lg hover:shadow-lg flex items-center justify-center gap-2">
                <Heart size={16} className="fill-white" />
                दान करें
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px] md:h-[650px] overflow-hidden">
        <Image
          src="/WhatsApp_Image_2026-06-24_at_11.28.26_PM.jpeg"
          alt="Maa Shyama Mandir"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 pt-20">
          <div className="mb-6 animate-bounce">
            <div className="text-6xl md:text-8xl drop-shadow-2xl"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-4 drop-shadow-2xl leading-tight tracking-wide" style={{fontFamily:'Georgia,serif'}}>
            जय श्यामा माई
          </h2>
          <p className="text-base md:text-2xl mb-8 drop-shadow-lg max-w-2xl font-medium">
            आस्था, भक्ति और विश्वास का प्रतीक
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              दर्शन बुक करें
            </button>
            <button className="px-8 py-4 bg-white text-amber-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              दान करें
            </button>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section id="announcements" className="bg-gradient-to-r from-amber-700 to-amber-800 py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 text-white">
            <Bell className="flex-shrink-0 mt-1 w-6 h-6 animate-pulse" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  घोषणाएं और समाचार
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </h3>
                <button
                  onClick={() => setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)}
                  className="text-sm hover:bg-amber-600 px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  अगला <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-2">
                <div key={announcements[currentAnnouncement].id} className="animate-fade">
                  <h4 className="font-bold text-lg">{announcements[currentAnnouncement].title}</h4>
                  <p className="text-amber-100 text-sm">{announcements[currentAnnouncement].description}</p>
                  <p className="text-xs text-amber-200 mt-1">{announcements[currentAnnouncement].date}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                {announcements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentAnnouncement(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentAnnouncement ? 'bg-white w-6' : 'bg-amber-300'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="bg-gradient-to-b from-transparent to-amber-50 py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -translate-y-10">
            {[
              { icon: Clock, label: 'खुलने का समय', value: '5:00 AM - 10:00 PM' },
              { icon: MapPin, label: 'स्थान', value: 'दरभंगा, बिहार' },
              { icon: Phone, label: 'फोन', value: '+91 91919 19191' },
              { icon: Mail, label: 'ईमेल', value: 'info@maashyamamandir.in' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-400 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl">
                    <item.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-600 font-medium">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
                <span className="text-amber-900 font-bold text-sm">मंदिर परिचय</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                श्यामा माई मंदिर
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                यह मंदिर समाज की आस्था, भक्ति और विश्वास का प्रतीक है। माँ शयामा का आशीर्वाद सभी भक्तों के जीवन में सुख, शांति और समृद्धि लाता है।
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                यह मंदिर न केवल एक धार्मिक स्थान है, बल्कि एक सामाजिक केंद्र है जहाँ समाज के सभी वर्ग के लोग आते हैं और अपनी श्रद्धा प्रकट करते हैं।
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                अधिक जानें
              </button>
            </div>
            <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-amber-100">
              <Image
                src="/WhatsApp_Image_2026-06-04_at_8.59.04_PM_-_Copy.jpeg"
                alt="मंदिर का अंदरूनी भाग"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="darshan" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-900 font-bold text-sm">हमारी सेवाएँ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              मंदिर की पवित्र सेवाएँ
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              माँ की भक्ति और आराधना के लिए विशेष सेवाएं
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-transparent hover:border-amber-400"
              >
                <div className="text-5xl mb-4 drop-shadow-lg">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-900 font-bold text-sm">मंदिर दीर्घा</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              मंदिर की छवियाँ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-4 border-amber-100"
              >
                <Image
                  src={img}
                  alt={`गैलरी ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-start p-6">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold text-lg">मंदिर दृश्य {idx + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-900 font-bold text-sm">दान और पूजा</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              माँ की सेवा में अवदान
            </h2>
            <p className="text-gray-600 text-lg">
              माँ के मंदिर की सेवा में भाग लें और आशीर्वाद प्राप्त करें
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-3 border-amber-100 hover:border-amber-700 transform hover:-translate-y-4 group"
              >
                <div className="text-4xl font-black text-amber-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tier.amount}
                </div>
                <p className="text-gray-900 font-bold mb-6 text-lg">{tier.label}</p>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105">
                  दान करें
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 inline-flex items-center gap-3 shadow-lg transform hover:scale-105">
              <ShoppingCart size={22} />
              कस्टम राशि दान करें
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-amber-900 font-bold text-sm">संपर्क जानकारी</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              हमसे जुड़ें
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-950 to-amber-900 text-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-black mb-10">संपर्क विवरण</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-3 bg-amber-700 rounded-xl flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">पता</h4>
                    <p className="text-amber-100 leading-relaxed">
                      श्यामा माई मंदिर<br />
                      दरभंगा, बिहार 846004
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-amber-700 rounded-xl flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">फोन</h4>
                    <p className="text-amber-100">+91 91919 19191</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-amber-700 rounded-xl flex-shrink-0">
                    <Mail size={27} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ईमेल</h4>
                    <p className="text-amber-100">info@maashyamamandir.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-amber-700">
                <p className="text-amber-200 text-sm font-bold mb-6">हमें सोशल मीडिया पर फॉलो करें</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 font-bold text-lg">
                    f
                  </a>
                  <a href="#" className="w-12 h-12 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 text-lg">
                    📘
                  </a>
                  <a href="#" className="w-12 h-12 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 text-lg">
                    📱
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl shadow-xl border-3 border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">संदेश भेजें</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">आपका नाम</label>
                  <input
                    type="text"
                    placeholder="अपना नाम दर्ज करें"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-700 transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">ईमेल पता</label>
                  <input
                    type="email"
                    placeholder="अपना ईमेल दर्ज करें"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-700 transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">संदेश</label>
                  <textarea
                    placeholder="अपना संदेश लिखें"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-700 transition-colors bg-white resize-none"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105">
                  संदेश भेजें
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl"></span> त्वरित लिंक
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#home" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ होम</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ परिचय</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ गैलरी</a></li>
                <li><a href="#announcements" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ समाचार</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-4">हमारी सेवाएँ</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#darshan" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ दर्शन</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ पूजा बुकिंग</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ दान</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">→ संपर्क</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-4">मंदिर की जानकारी</h3>
              <p className="text-sm font-medium mb-2">श्यामा माई मंदिर</p>
              <p className="text-sm font-medium mb-4">दरभंगा, बिहार 846004</p>
              <p className="text-xs text-amber-300">सभी भक्तों के लिए खुला</p>
            </div>
          </div>

          <div className="border-t border-amber-700 pt-8">
            <p className="text-center text-sm font-medium">
              © 2026 श्यामा माई मंदिर, दरभंगा। सर्वाधिकार सुरक्षित।
            </p>
            <p className="text-center text-xs text-amber-200 mt-2">
              भक्ति • समर्पण • शांति
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
