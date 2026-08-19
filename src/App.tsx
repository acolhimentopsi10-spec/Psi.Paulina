import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Globe,
  HeartHandshake,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  CalendarCheck,
  Clock,
  ChevronRight,
  Menu,
  X,
  Star,
  ExternalLink,
  ZoomIn,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '556592191001';
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;
  const defaultWhatsAppMsg = encodeURIComponent('Olá, Paulina! Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico.');
  const corporateWhatsAppMsg = encodeURIComponent('Olá, Paulina! Gostaria de saber mais sobre a consultoria empresarial NR1.');
  const partnershipWhatsAppMsg = encodeURIComponent('Olá, Paulina! Gostaria de conversar sobre palestras, convites ou uma possível parceria.');
  
  const emailAddress = 'Mendes_paulina@hotmail.com';
  const instagramUrl = 'https://www.instagram.com/paulina.psico/';
  const linktreeUrl = 'https://linktr.ee/paulinamendes';
  const googleReviewsUrl = 'https://www.google.com/maps/place/Paulina+Mendes+%7C+Psic%C3%B3loga/@-14.3785895,-56.3949789,17z/data=!4m6!3m5!1s0x939f1b7b1dea66c7:0x376420a519d3d8b0!8m2!3d-14.3787529!4d-56.3923351!16s%2Fg%2F11xff3r5kq?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D';

  // Review images provided by the client
  const reviewImages = [
    {
      id: 'rev-1',
      src: 'https://i.ibb.co/hJ6F0BCB/Whats-App-Image-2026-08-19-at-15-37-58.jpg',
      alt: 'Avaliação real de paciente sobre o atendimento com Paulina Mendes'
    },
    {
      id: 'rev-2',
      src: 'https://i.ibb.co/jPc8DptW/Whats-App-Image-2026-08-19-at-15-37-11.jpg',
      alt: 'Depoimento real de paciente sobre o acolhimento e escuta terapêutica'
    },
    {
      id: 'rev-3',
      src: 'https://i.ibb.co/m5rNGk0x/Whats-App-Image-2026-08-19-at-16-33-39.jpg',
      alt: 'Registro de experiência positiva e evolução no processo com Paulina Mendes'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3B281B] flex flex-col font-sans selection:bg-[#F6E8C3] selection:text-[#2D1E14]">
      {/* HEADER / NAVIGATION */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E8DFC8]/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#inicio"
            className="group flex flex-col focus:outline-none"
            aria-label="Paulina Mendes - Início"
          >
            <span className="font-serif-editorial text-2xl sm:text-3xl tracking-tight text-[#3B281B] group-hover:text-[#5C4033] transition-colors">
              Paulina Mendes
            </span>
            <span className="text-[11px] tracking-wider uppercase text-[#8C7362] font-medium -mt-0.5">
              Psicóloga • CRP 18/5307
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#4A3525]">
            <a
              href="#inicio"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Sobre
            </a>
            <a
              href="#atendimentos"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Atendimentos
            </a>
            <a
              href="#empresas"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Para Empresas
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="hover:text-[#2D1E14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B281B] hover:after:w-full after:transition-all"
            >
              Contato
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-button"
              href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B281B] text-[#FAF7F2] text-xs lg:text-sm font-medium tracking-wide hover:bg-[#533927] active:scale-[0.98] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
              <span>Agendar atendimento</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#3B281B] hover:bg-[#EFE7D8]/60 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-6 py-6 shadow-md transition-all">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#3B281B]">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Início</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Sobre</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>
              <a
                href="#atendimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Atendimentos</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>
              <a
                href="#empresas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Para Empresas (NR1)</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Depoimentos</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#EFE7D8] flex items-center justify-between"
              >
                <span>Contato</span>
                <ChevronRight className="w-4 h-4 text-[#8C7362]" />
              </a>

              <div className="pt-3">
                <a
                  href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3B281B] text-[#FAF7F2] text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
                  <span>Agendar atendimento no WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 lg:pb-24 bg-[#F6E8C3] overflow-hidden border-b border-[#E8DFC8]"
      >
        {/* Subtle decorative editorial grid background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#3B281B 0.75px, transparent 0.75px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
              {/* Badge & CRP */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs tracking-wider uppercase font-semibold text-[#533927]">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2]/80 border border-[#E8DAB7] shadow-2xs backdrop-blur-xs">
                  Psicóloga • Psicanálise
                </span>
                <span className="px-3 py-1 rounded-full bg-[#3B281B]/10 text-[#3B281B] font-mono font-medium">
                  CRP 18/5307
                </span>
              </div>

              {/* Title & Name */}
              <div className="space-y-3">
                <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#3B281B] leading-[1.12] tracking-tight">
                  Um espaço para olhar para si com mais cuidado.
                </h1>
                <p className="font-cormorant text-xl sm:text-2xl text-[#6E4D38] italic">
                  Com acolhimento, escuta e respeito à sua singularidade.
                </p>
              </div>

              {/* Complementary Text */}
              <p className="text-base sm:text-lg text-[#4A3525] leading-relaxed max-w-xl font-normal">
                Atendimento psicológico on-line, com escuta, acolhimento e uma abordagem individualizada para cada história.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-2">
                <div className="flex items-center gap-2.5 text-sm text-[#3B281B]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7362] shrink-0" />
                  <span>Sessões 100% On-line e Seguras</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#3B281B]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7362] shrink-0" />
                  <span>Espaço Sigiloso & Acolhedor</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#3B281B]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7362] shrink-0" />
                  <span>Praticidade no seu ritmo e rotina</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#3B281B]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7362] shrink-0" />
                  <span>Consultoria Empresarial NR1</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  id="hero-schedule-btn"
                  href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-semibold tracking-wide hover:bg-[#2C1E14] active:scale-[0.98] transition-all shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
                  <span>Agendar atendimento</span>
                </a>

                <a
                  id="hero-learn-more-btn"
                  href="#sobre"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2]/80 text-[#3B281B] border border-[#DDCFA9] text-sm font-medium hover:bg-[#FAF7F2] active:scale-[0.98] transition-all"
                >
                  <span>Conhecer meu trabalho</span>
                  <ArrowRight className="w-4 h-4 text-[#8C7362]" />
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Visual backframe with subtle earthy tint */}
                <div className="absolute -inset-3 bg-[#EADBAB] rounded-3xl -rotate-1 transform -z-10 transition-transform" />
                
                {/* Main Client Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF7F2] bg-[#E8DFC8]">
                  <img
                    src="https://i.ibb.co/8LcZdf09/projeto-1.jpg"
                    alt="Paulina Mendes - Psicóloga e Psicanalista"
                    className="w-full h-auto object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle lower overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-sm p-3.5 rounded-xl border border-[#E8DFC8] shadow-sm flex items-center justify-between">
                    <div>
                      <p className="font-serif-editorial text-sm font-semibold text-[#3B281B]">
                        Paulina Mendes
                      </p>
                      <p className="text-[11px] text-[#8C7362] font-medium">
                        Atendimento Psicológico On-line
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#533927] bg-[#F6E8C3] px-2.5 py-1 rounded-md">
                      <Globe className="w-3.5 h-3.5 text-[#3B281B]" />
                      Brasil & Exterior
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION / QUEM SOU EU */}
      <section
        id="sobre"
        className="py-20 sm:py-24 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE7D8]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 bg-[#F6E8C3] rounded-3xl rotate-1 transform -z-10" />
                <div className="rounded-2xl overflow-hidden shadow-md border-4 border-[#FFFFFF] bg-[#E8DFC8]">
                  <img
                    src="https://i.ibb.co/jPKd4qRH/projeto-2.jpg"
                    alt="Psicóloga Paulina Mendes"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Floating Quote Stamp */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#3B281B] text-[#FAF7F2] p-4 rounded-2xl shadow-lg max-w-[220px] hidden sm:block border border-[#533927]">
                  <p className="font-cormorant text-base italic leading-snug">
                    "O processo terapêutico é a construção de um espaço seguro para a sua história."
                  </p>
                  <p className="text-[10px] text-[#F6E8C3] uppercase tracking-wider font-semibold mt-2">
                    Paulina Mendes • CRP 18/5307
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Professional Bio */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
                  Sobre a profissional
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B] leading-tight">
                  Quem sou eu
                </h2>
              </div>

              <div className="space-y-4 text-[#4A3525] text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-[#3B281B]">
                  Sou <strong>Paulina Mendes</strong>, psicóloga (CRP 18/5307), e acredito que o processo terapêutico começa quando encontramos um espaço seguro para olhar para nossa própria história.
                </p>
                <p>
                  Meu trabalho é fundamentado na <strong>escuta atenta, no acolhimento genuíno e na compreensão profunda da singularidade de cada pessoa</strong>. Através da psicoterapia e da psicanálise, auxilio indivíduos a elaborarem seus sentimentos, atravessarem momentos desafiadores e descobrirem novas formas de se relacionar consigo e com o mundo.
                </p>
                <p className="text-sm sm:text-base text-[#6E4D38]">
                  Além do atendimento individual a pacientes, atuo também no universo corporativo com consultoria empresarial voltada para a saúde mental e às diretrizes da NR1, promovendo ambientes de trabalho mais saudáveis e preventivos.
                </p>
              </div>

              {/* Key Indicators / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-[#FAF0D9]/60 border border-[#E8DAB7] p-3 rounded-xl text-center">
                  <p className="font-serif-editorial font-semibold text-[#3B281B] text-sm sm:text-base">
                    Atendimento On-line
                  </p>
                  <p className="text-[11px] text-[#8C7362] mt-0.5">Praticidade e sigilo</p>
                </div>
                <div className="bg-[#FAF0D9]/60 border border-[#E8DAB7] p-3 rounded-xl text-center">
                  <p className="font-serif-editorial font-semibold text-[#3B281B] text-sm sm:text-base">
                    Escuta Individualizada
                  </p>
                  <p className="text-[11px] text-[#8C7362] mt-0.5">Sem fórmulas prontas</p>
                </div>
                <div className="bg-[#FAF0D9]/60 border border-[#E8DAB7] p-3 rounded-xl text-center">
                  <p className="font-serif-editorial font-semibold text-[#3B281B] text-sm sm:text-base">
                    Psicoterapia
                  </p>
                  <p className="text-[11px] text-[#8C7362] mt-0.5">Autoconhecimento</p>
                </div>
                <div className="bg-[#FAF0D9]/60 border border-[#E8DAB7] p-3 rounded-xl text-center">
                  <p className="font-serif-editorial font-semibold text-[#3B281B] text-sm sm:text-base">
                    Psicanálise
                  </p>
                  <p className="text-[11px] text-[#8C7362] mt-0.5">Investigação profunda</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-medium hover:bg-[#533927] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
                  <span>Conversar com a Paulina no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION / COMO POSSO TE ACOMPANHAR */}
      <section
        id="atendimentos"
        className="py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] border-b border-[#E8DFC8]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
              Modalidades de Atendimento
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B]">
              Como posso te acompanhar
            </h2>
            <p className="text-[#6E4D38] text-base sm:text-lg">
              Caminhos desenhados para acolher a sua jornada com respeito, escuta e técnica.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Psicoterapia */}
            <div
              id="card-psicoterapia"
              className="bg-[#FAF7F2] p-8 sm:p-9 rounded-2xl border border-[#E8DFC8] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6E8C3] flex items-center justify-center text-[#3B281B]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#3B281B]">
                  Psicoterapia
                </h3>
                <p className="text-[#4A3525] text-sm sm:text-base leading-relaxed">
                  Um espaço de escuta e reflexão para compreender sentimentos, conflitos, comportamentos e diferentes momentos da vida.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFE7D8]">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá, Paulina! Gostaria de entender mais sobre a Psicoterapia individual.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3B281B] hover:text-[#8C7362] transition-colors"
                >
                  <span>Saber mais</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Psicanálise */}
            <div
              id="card-psicanalise"
              className="bg-[#FAF7F2] p-8 sm:p-9 rounded-2xl border border-[#E8DFC8] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6E8C3] flex items-center justify-center text-[#3B281B]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#3B281B]">
                  Psicanálise
                </h3>
                <p className="text-[#4A3525] text-sm sm:text-base leading-relaxed">
                  Um processo de investigação e escuta profunda, respeitando a singularidade da história e das experiências de cada pessoa.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFE7D8]">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá, Paulina! Gostaria de saber mais sobre as sessões de Psicanálise.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3B281B] hover:text-[#8C7362] transition-colors"
                >
                  <span>Saber mais</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Atendimento On-line */}
            <div
              id="card-atendimento-online"
              className="bg-[#FAF7F2] p-8 sm:p-9 rounded-2xl border border-[#E8DFC8] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6E8C3] flex items-center justify-center text-[#3B281B]">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#3B281B]">
                  Atendimento On-line
                </h3>
                <p className="text-[#4A3525] text-sm sm:text-base leading-relaxed">
                  Atendimento psicológico realizado de forma on-line, com praticidade, privacidade e acolhimento no conforto do seu ambiente.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFE7D8]">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá, Paulina! Gostaria de saber como funciona o atendimento on-line.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3B281B] hover:text-[#8C7362] transition-colors"
                >
                  <span>Saber mais</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Informational Notice */}
          <div className="mt-12 p-5 rounded-xl bg-[#EFE7D8]/60 border border-[#E0D4BE] text-center text-xs sm:text-sm text-[#6E4D38] max-w-2xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3B281B] shrink-0" />
            <span>Todos os atendimentos seguem rigorosamente o Código de Ética Profissional do Psicólogo (CFP).</span>
          </div>

        </div>
      </section>

      {/* CONCEPTUAL SECTION / UM ESPAÇO PARA VOCÊ */}
      <section
        id="processo"
        className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE7D8] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
            O Processo Terapêutico
          </span>
          
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B] max-w-3xl mx-auto leading-tight">
            "Um espaço para você"
          </h2>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF0D9]/50 border border-[#E8DAB7] relative max-w-4xl mx-auto">
            {/* Subtle quotation marks */}
            <span className="font-serif-editorial text-7xl text-[#D8C7B5] leading-none absolute top-4 left-6 opacity-40 select-none">
              “
            </span>

            <p className="text-lg sm:text-2xl text-[#3B281B] font-cormorant italic leading-relaxed relative z-10 max-w-3xl mx-auto">
              A terapia pode ser um espaço de pausa em meio à rotina, de elaboração diante das dificuldades e de construção de novas possibilidades.
            </p>

            <div className="w-16 h-[1.5px] bg-[#B09B8B] mx-auto my-6" />

            <p className="text-sm sm:text-base text-[#4A3525] max-w-2xl mx-auto leading-relaxed">
              Não existe uma fórmula pronta. Cada processo é construído de maneira única, de acordo com a história, as necessidades e o tempo de cada pessoa.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-medium hover:bg-[#533927] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
              <span>Iniciar minha jornada</span>
            </a>
          </div>
        </div>
      </section>

      {/* CORPORATE SECTION / PARA EMPRESAS (NR1) */}
      <section
        id="empresas"
        className="py-20 sm:py-24 lg:py-28 bg-[#F6E8C3] border-b border-[#E8DFC8] relative"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#533927]">
              <Building2 className="w-4 h-4 text-[#3B281B]" />
              <span>Atuação Institucional & Corporativa</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B] leading-tight">
              Psicologia também no ambiente corporativo
            </h2>
            <p className="text-lg sm:text-xl font-cormorant text-[#6E4D38] italic">
              Consultoria empresarial NR1 e cuidado com as relações de trabalho.
            </p>
            <p className="text-[#4A3525] text-base sm:text-lg leading-relaxed pt-2">
              Paulina Mendes também atua com empresas oferecendo consultoria especializada voltada à saúde mental no trabalho, orientações organizacionais e ações voltadas às demandas psicossociais relacionadas à NR1.
            </p>
          </div>

          {/* Corporate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            
            {/* Topic 1 */}
            <div className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#E8DAB7] shadow-2xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EFE2BA] flex items-center justify-center text-[#3B281B] mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif-editorial text-xl text-[#3B281B] mb-2">
                Consultoria Empresarial
              </h3>
              <p className="text-[#5C4033] text-sm leading-relaxed">
                Suporte estratégico e humanizado para gestores e equipes na compreensão das dinâmicas emocionais no ambiente profissional.
              </p>
            </div>

            {/* Topic 2 */}
            <div className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#E8DAB7] shadow-2xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EFE2BA] flex items-center justify-center text-[#3B281B] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif-editorial text-xl text-[#3B281B] mb-2">
                Saúde Mental no Trabalho
              </h3>
              <p className="text-[#5C4033] text-sm leading-relaxed">
                Desenvolvimento de ações de acolhimento e conscientização para promover um clima organizacional saudável e sustentável.
              </p>
            </div>

            {/* Topic 3 */}
            <div className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#E8DAB7] shadow-2xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EFE2BA] flex items-center justify-center text-[#3B281B] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-editorial text-xl text-[#3B281B] mb-2">
                Prevenção de Riscos Psicossociais
              </h3>
              <p className="text-[#5C4033] text-sm leading-relaxed">
                Identificação e manejo preventivo de fatores de estresse, sobrecarga e desgaste nas relações de trabalho.
              </p>
            </div>

            {/* Topic 4 */}
            <div className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#E8DAB7] shadow-2xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EFE2BA] flex items-center justify-center text-[#3B281B] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif-editorial text-xl text-[#3B281B] mb-2">
                Orientação para Empresas
              </h3>
              <p className="text-[#5C4033] text-sm leading-relaxed">
                Alinhamento institucional para implementar práticas contínuas de escuta e bem-estar nas organizações.
              </p>
            </div>

            {/* Topic 5 */}
            <div className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#E8DAB7] shadow-2xs hover:shadow-sm transition-all sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-[#EFE2BA] flex items-center justify-center text-[#3B281B] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-editorial text-xl text-[#3B281B] mb-2">
                Palestras e Ações Educativas
              </h3>
              <p className="text-[#5C4033] text-sm leading-relaxed">
                Encontros dinâmicos, rodas de conversa e palestras informativas sobre saúde emocional, relações interpessoais e qualidade de vida.
              </p>
            </div>

          </div>

          {/* Corporate CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-9 rounded-2xl bg-[#3B281B] text-[#FAF7F2]">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif-editorial text-2xl text-[#F6E8C3]">
                Deseja implementar ações de saúde mental na sua empresa?
              </h3>
              <p className="text-sm text-[#D8C7B5]">
                Entre em contato direto para entender a consultoria ideal para a sua equipe.
              </p>
            </div>

            <a
              id="corporate-cta-btn"
              href={`${whatsappBaseUrl}?text=${corporateWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F6E8C3] text-[#3B281B] font-semibold text-sm hover:bg-[#FFF5D6] active:scale-[0.98] transition-all shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#3B281B]" />
              <span>Quero falar sobre consultoria</span>
            </a>
          </div>

        </div>
      </section>

      {/* LECTURES, INVITES & PARTNERSHIPS / PALESTRAS, CONVITES E PARCERIAS */}
      <section
        id="palestras"
        className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE7D8]"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="bg-[#F4EFE6] border border-[#E8DFC8] rounded-3xl p-8 sm:p-12 lg:p-14 text-center space-y-6 shadow-xs relative overflow-hidden">
            
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F6E8C3] text-[#3B281B] mx-auto shadow-2xs">
              <Sparkles className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
                Oportunidades Institucionais
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#3B281B]">
                Palestras, Convites e Parcerias
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A3525] max-w-2xl mx-auto leading-relaxed">
              Tem uma empresa, evento ou projeto e gostaria de contar com a participação da Paulina? Entre em contato para conversar sobre palestras, convites, projetos e possibilidades de parceria.
            </p>

            {/* Email display pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#D9CBBF] text-sm sm:text-base font-mono text-[#3B281B] font-medium">
              <Mail className="w-4 h-4 text-[#8C7362]" />
              <span>{emailAddress}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <a
                id="partnership-email-btn"
                href={`mailto:${emailAddress}?subject=Convite%20ou%20Parceria%20-%20Paulina%20Mendes`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-medium hover:bg-[#533927] transition-all"
              >
                <Mail className="w-4 h-4 text-[#F6E8C3]" />
                <span>Enviar e-mail</span>
              </a>

              <a
                id="partnership-whatsapp-btn"
                href={`${whatsappBaseUrl}?text=${partnershipWhatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#3B281B] border border-[#D8C7B5] text-sm font-medium hover:bg-[#FAF0D9] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#3B281B]" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS / DEPOIMENTOS REAL PRINTS GALLERY */}
      <section
        id="depoimentos"
        className="py-20 sm:py-24 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE7D8]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
              Depoimentos Reais
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B]">
              Quem já passou por aqui
            </h2>
            <p className="text-[#6E4D38] text-base sm:text-lg">
              Registros genuínos de experiências compartilhadas por pacientes ao longo do processo terapêutico.
            </p>
          </div>

          {/* Real Reviews Cards Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {reviewImages.map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image Header with zoom hint */}
                <div
                  className="relative aspect-4/5 overflow-hidden bg-[#F4EFE6] cursor-pointer"
                  onClick={() => setActiveImageModal(review.src)}
                >
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-[#3B281B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#FAF7F2] text-xs font-medium backdrop-blur-2xs">
                    <ZoomIn className="w-5 h-5 text-[#F6E8C3]" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>

                {/* Card footer caption */}
                <div className="p-4 bg-[#FAF7F2] border-t border-[#EFE7D8] flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C49A45]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C49A45] text-[#C49A45]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7362] font-medium">
                    Avaliação Verificada
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Button to Google Profile */}
          <div className="mt-12 text-center">
            <a
              id="google-reviews-btn"
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF0D9] text-[#3B281B] border border-[#DDCFA9] text-sm font-semibold hover:bg-[#F6E8C3] transition-all"
            >
              <span>Ver avaliações no Google</span>
              <ExternalLink className="w-4 h-4 text-[#6E4D38]" />
            </a>
          </div>

        </div>
      </section>

      {/* INSTAGRAM SECTION / CONTINUE ESSA CONVERSA */}
      <section
        id="instagram"
        className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E8DFC8]"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] text-[#3B281B] border border-[#E0D4BE] shadow-2xs">
            <Instagram className="w-6 h-6" />
          </div>

          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#3B281B]">
            Continue essa conversa
          </h2>

          <p className="text-base sm:text-lg text-[#4A3525] max-w-xl mx-auto leading-relaxed">
            Acompanhe conteúdos sobre saúde mental, psicologia, psicanálise e reflexões sobre a vida.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              id="instagram-link-btn"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-medium hover:bg-[#533927] transition-all"
            >
              <Instagram className="w-4 h-4 text-[#F6E8C3]" />
              <span>Conhecer Instagram (@paulina.psico)</span>
            </a>

            <a
              id="linktree-link-btn"
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF7F2] text-[#3B281B] border border-[#D9CBBF] text-sm font-medium hover:bg-[#FAF0D9] transition-all"
            >
              <span>Acessar Linktree</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8C7362]" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        id="cta-final"
        className="py-20 sm:py-24 bg-[#F6E8C3] border-b border-[#E8DFC8] text-center relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-6 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#533927]">
            Dê o primeiro passo
          </span>
          
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3B281B] leading-tight max-w-3xl mx-auto">
            "Talvez o primeiro passo seja simplesmente começar."
          </h2>

          <p className="text-base sm:text-lg text-[#4A3525] max-w-xl mx-auto leading-relaxed">
            Se você sente que chegou o momento de olhar para si com mais cuidado, estou aqui para te acompanhar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              id="final-cta-schedule"
              href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#3B281B] text-[#FAF7F2] text-sm font-semibold hover:bg-[#2C1E14] active:scale-[0.98] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
              <span>Agendar atendimento</span>
            </a>

            <a
              id="final-cta-whatsapp"
              href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FAF7F2] text-[#3B281B] border border-[#DDCFA9] text-sm font-medium hover:bg-[#FAF7F2] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#3B281B]" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION / VAMOS CONVERSAR */}
      <section
        id="contato"
        className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE7D8]"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="bg-[#FAF0D9]/50 border border-[#E8DAB7] rounded-3xl p-8 sm:p-12 shadow-xs space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7362]">
                Canais Diretos
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#3B281B]">
                Vamos conversar?
              </h2>
              <p className="text-sm sm:text-base text-[#6E4D38]">
                Entre em contato para tirar dúvidas, verificar disponibilidade ou agendar sua primeira sessão.
              </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Professional Identity Card */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
                <p className="font-serif-editorial text-xl text-[#3B281B]">
                  Paulina Mendes
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8C7362] font-semibold">
                  Psicóloga | Psicanálise
                </p>
                <div className="pt-2 text-sm text-[#4A3525] space-y-1.5 font-medium">
                  <p>• Registro: CRP 18/5307</p>
                  <p>• Modalidade: Atendimento 100% On-line</p>
                  <p>• Brasil e pacientes no exterior</p>
                </div>
              </div>

              {/* Contact Data Card */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
                <p className="font-serif-editorial text-xl text-[#3B281B]">
                  Contatos Oficiais
                </p>
                <ul className="text-sm text-[#4A3525] space-y-2.5">
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#3B281B] shrink-0" />
                    <span>WhatsApp: <strong>+55 65 9219-1001</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#3B281B] shrink-0" />
                    <span className="font-mono text-xs sm:text-sm">{emailAddress}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#3B281B] shrink-0" />
                    <span>Instagram: <strong>@paulina.psico</strong></span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Big Action Button */}
            <div className="pt-2">
              <a
                id="contact-whatsapp-main-btn"
                href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#3B281B] text-[#FAF7F2] text-base font-semibold hover:bg-[#2C1E14] active:scale-[0.99] transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-[#F6E8C3]" />
                <span>Agendar atendimento pelo WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D1E14] text-[#D8C7B5] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#4A3525]">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif-editorial text-2xl sm:text-3xl text-[#FAF7F2] tracking-tight">
                Paulina Mendes
              </span>
              <p className="text-xs uppercase tracking-wider text-[#F6E8C3] font-semibold">
                Psicóloga | Psicanálise • CRP 18/5307
              </p>
              <p className="text-sm text-[#B39D8C] leading-relaxed max-w-sm">
                Atendimento psicológico on-line fundamentado na escuta, acolhimento e singularidade humana. Consultoria empresarial NR1.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-4 space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#FAF7F2] font-semibold">
                Navegação
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#FAF7F2] transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-[#FAF7F2] transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#atendimentos" className="hover:text-[#FAF7F2] transition-colors">
                    Atendimentos
                  </a>
                </li>
                <li>
                  <a href="#empresas" className="hover:text-[#FAF7F2] transition-colors">
                    Para Empresas
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-[#FAF7F2] transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#FAF7F2] transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Networks & Direct Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#FAF7F2] font-semibold">
                Conectar
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#F6E8C3]" />
                    <span>Instagram (@paulina.psico)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={linktreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#F6E8C3]" />
                    <span>Linktree (paulinamendes)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F6E8C3]" />
                    <span>WhatsApp (+55 65 9219-1001)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#F6E8C3]" />
                    <span className="text-xs font-mono">{emailAddress}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Legal Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7362]">
            <p>© 2026 Paulina Mendes. Todos os direitos reservados.</p>
            <p>Atendimento psicológico regido pelo Conselho Federal de Psicologia.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <aside aria-label="Atendimento rápido no WhatsApp">
        <a
          id="floating-whatsapp-btn"
          href={`${whatsappBaseUrl}?text=${defaultWhatsAppMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#3B281B] text-[#FAF7F2] shadow-xl hover:bg-[#20140D] hover:scale-105 active:scale-95 transition-all border border-[#5C4033]"
          aria-label="Falar com Paulina Mendes no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-[#F6E8C3]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
          </div>
          <span className="hidden sm:inline font-medium text-xs tracking-wide">
            Fale com a Paulina
          </span>
        </a>
      </aside>

      {/* LIGHTBOX MODAL FOR REVIEWS */}
      {activeImageModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tamanho ampliado"
          className="fixed inset-0 z-50 bg-[#2D1E14]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] bg-[#FAF7F2] rounded-2xl overflow-hidden p-3 border border-[#E8DFC8] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#3B281B] text-[#FAF7F2] hover:bg-[#533927] transition-all shadow-md focus:outline-none"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImageModal}
              alt="Avaliação ampliada de paciente"
              className="w-full max-h-[82vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
