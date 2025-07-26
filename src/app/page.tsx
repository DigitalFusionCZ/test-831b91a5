'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Using the original website's content as a base
  const companyName = 'Vše Pro Stavby';
  const tagline = 'Vše, co potřebujete pro vaše stavební projekty';
  const aboutText = 'Jsme Vše Pro Stavby, partner pro komplexní dodávky stavebních materiálů a služeb. S dlouholetými zkušenostmi v oboru vám nabízíme široký sortiment kvalitních produktů a profesionální poradenství. Naším cílem je usnadnit vám práci a zajistit hladký průběh vašich stavebních projektů, ať už jde o malou rekonstrukci nebo velkou stavbu. Spolehněte se na nás a uvidíte, že "Vše Pro Stavby" není jen název, ale filozofie.';
  const services = [
    { title: 'Komplexní dodávky materiálů', description: 'Zajišťujeme dodávky široké škály stavebních materiálů přímo na místo vaší stavby.' },
    { title: 'Odborné poradenství', description: 'Náš tým specialistů je připraven vám pomoci s výběrem správných materiálů a řešení.' },
    { title: 'Logistika a doprava', description: 'Efektivní logistika a spolehlivá doprava materiálu jsou pro nás prioritou.' },
    { title: 'Zajistíme i realizaci', description: 'Pomůžeme vám nejen s materiálem, ale i s nalezením vhodných dodavatelů pro stavební práce.' }
  ];
  const contactInfo = {
    email: 'info@vseprostavby.cz',
    phone: '+420 777 123 456',
    address: 'Stavební 123, 100 00 Praha'
  };

  useEffect(() => {
    // Set dynamic page title
    document.title = 'Vše Pro Stavby - Váš Partner pro Stavebnictví';

    // Generate favicon (simple circle with gradient)
    const primaryColor = '#4F46E5'; // Example primary color
    const secondaryColor = '#8B5CF6'; // Example secondary color
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${primaryColor}" /><stop offset="100%" stop-color="${secondaryColor}" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-3xl font-extrabold text-indigo-700 tracking-tight transition-colors duration-300 hover:text-indigo-800">
              {companyName}
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300">O nás</a></li>
              <li><a href="#services" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300">Služby</a></li>
              <li><a href="#contact" className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300">Kontakt</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li><a href="#about" onClick={toggleMenu} className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition duration-300 rounded-md">O nás</a></li>
            <li><a href="#services" onClick={toggleMenu} className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition duration-300 rounded-md">Služby</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition duration-300 rounded-md">Kontakt</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white min-h-[500px] flex items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up">
            {tagline}
          </h1>
          <p className="text-lg sm:xl lg:text-2xl opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Váš spolehlivý partner pro komplexní dodávky stavebních materiálů a služeb.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-indigo-800 bg-white hover:bg-indigo-50 transition duration-300 shadow-lg transform hover:scale-105 animate-fade-in-up delay-400">
            Kontaktujte nás
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        {/* Background elements (for visual effect) */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">O nás</h2>
            <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Vaše spokojenost, naše mise
            </p>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600">
              {aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Naše služby</h2>
            <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Komplexní řešení pro vaše projekty
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {/* Generic icon, could be replaced with specific SVGs */}
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-purple-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Kontakt</h2>
            <p className="mt-2 text-3xl leading-snug font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Spojte se s námi
            </p>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600">
              Máte dotazy nebo potřebujete poradit? Neváhejte nás kontaktovat!
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full">
              <div className="flex justify-center mb-4">
                <svg className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v14z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600"><a href={`mailto:${contactInfo.email}`} className="text-indigo-600 hover:underline hover:text-indigo-700 transition-colors duration-300">{contactInfo.email}</a></p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full">
              <div className="flex justify-center mb-4">
                <svg className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
              <p className="mt-2 text-gray-600"><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-indigo-600 hover:underline hover:text-indigo-700 transition-colors duration-300">{contactInfo.phone}</a></p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full">
              <div className="flex justify-center mb-4">
                <svg className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Adresa</h3>
              <p className="mt-2 text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {companyName}. Všechna práva vyhrazena.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">DigitalFusion</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInMoveUp 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
