/**
 * ============================================
 * WELCOME SCREEN - Portal de Entrada Premium
 * ============================================
 * 
 * Tela inicial responsiva com animações e design premium.
 * Segmentação: Moradores vs Turistas
 */

import React from 'react';
import { User, Palmtree, ChevronRight, Waves, Map, CreditCard, Camera, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectRole: (role: 'resident' | 'tourist') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectRole }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      
      {/* ===== BACKGROUND ANIMADO ===== */}
      <div className="absolute inset-0 gradient-hero">
        {/* Orbs decorativos animados */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sun-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* ===== SEÇÃO ESQUERDA: HERO / BRANDING (Desktop) ===== */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 lg:p-16 text-white">
        
        {/* Logo animado */}
        <div className="animate-fade-in-down">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 glow-blue">
            <Waves className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-sun-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>

        {/* Título principal */}
        <div className="text-center animate-fade-in-up animate-delay-200">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-2 glow-text">
            Saquarema
          </h1>
          <p className="text-ocean-200 font-medium tracking-[0.3em] text-sm lg:text-base uppercase">
            Conectada
          </p>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-xl lg:text-2xl text-white/80 text-center max-w-md animate-fade-in-up animate-delay-400">
          Bem-vindo ao portal da <span className="text-sun-400 font-semibold">Capital Nacional do Surf</span>
        </p>

        {/* Indicador de scroll no desktop */}
        <div className="hidden lg:flex flex-col items-center mt-auto pt-12 animate-fade-in animate-delay-800">
          <span className="text-white/50 text-sm mb-2">Escolha seu perfil</span>
          <ChevronRight className="w-6 h-6 text-white/50 rotate-90 animate-bounce" />
        </div>
      </div>

      {/* ===== SEÇÃO DIREITA: SELEÇÃO DE PERFIL ===== */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 lg:p-16 bg-white/5 backdrop-blur-sm lg:bg-white lg:rounded-l-[3rem] lg:shadow-2xl">
        
        {/* Header da seção (mobile) */}
        <div className="lg:hidden text-center mb-8 animate-fade-in">
          <p className="text-white/70 text-sm">Como deseja navegar?</p>
        </div>

        {/* Header da seção (desktop) */}
        <div className="hidden lg:block text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-50 text-ocean-600 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Selecione seu perfil
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Como deseja navegar?</h2>
          <p className="text-slate-500 mt-2">Personalizamos sua experiência</p>
        </div>

        {/* Cards de seleção */}
        <div className="grid grid-cols-1 gap-5 w-full max-w-md stagger-children">
          
          {/* CARD: MORADOR */}
          <button 
            onClick={() => onSelectRole('resident')}
            className="group relative overflow-hidden glass-card lg:bg-white rounded-[2rem] p-1 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover-lift"
          >
            <div className="bg-white/60 lg:bg-slate-50 rounded-[1.8rem] p-6 flex items-center gap-5 transition-colors group-hover:bg-white">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform glow-blue">
                <User className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              
              <div className="text-left flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Sou Morador</h3>
                <p className="text-sm text-slate-500 mt-1">Serviços públicos, Moeda Saquá e UPA em tempo real.</p>
              </div>
              
              <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-ocean-500 group-hover:translate-x-2 transition-all" />
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-ocean-500/10 rounded-full group-hover:scale-150 transition-transform">
              <CreditCard className="w-8 h-8 text-ocean-600/30 absolute top-4 left-4" />
            </div>
          </button>

          {/* CARD: TURISTA */}
          <button 
            onClick={() => onSelectRole('tourist')}
            className="group relative overflow-hidden glass-card lg:bg-white rounded-[2rem] p-1 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animate-delay-200 hover-lift"
          >
            <div className="bg-white/60 lg:bg-slate-50 rounded-[1.8rem] p-6 flex items-center gap-5 transition-colors group-hover:bg-white">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-sun-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform glow-orange">
                <Palmtree className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              
              <div className="text-left flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Sou Turista</h3>
                <p className="text-sm text-slate-500 mt-1">Praias, eventos, roteiros e os melhores restaurantes.</p>
              </div>
              
              <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-500/10 rounded-full group-hover:scale-150 transition-transform">
              <Camera className="w-8 h-8 text-orange-600/30 absolute top-4 left-4" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10 text-center animate-fade-in animate-delay-600">
          <div className="flex items-center justify-center gap-2 text-slate-400 lg:text-slate-500 text-xs mb-3">
            <Map className="w-3.5 h-3.5" />
            <a href="https://www.saquarema.rj.gov.br" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-500 transition-colors">
              www.saquarema.rj.gov.br
            </a>
          </div>
          <p className="text-[10px] text-slate-300 lg:text-slate-400 uppercase tracking-widest font-bold">
            Prefeitura Municipal de Saquarema
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
