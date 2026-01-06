/**
 * ============================================
 * WELCOME SCREEN - Portal de Entrada
 * ============================================
 * 
 * Tela inicial para segmentação de usuários:
 * - Moradores: Seguem para login/serviços
 * - Turistas: Acesso rápido a lazer/info
 */

import React from 'react';
import { User, Palmtree, ChevronRight, Waves, Map, CreditCard, Camera } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectRole: (role: 'resident' | 'tourist') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectRole }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-slate-50 overflow-hidden">
      
      {/* ===== BACKGROUND DECORATIVO ===== */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ocean-100/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sun-100/30 rounded-full blur-3xl -ml-20 -mb-20"></div>

      {/* ===== HEADER / LOGO ===== */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-glow-blue relative">
          <Waves className="w-10 h-10 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-sun-400 rounded-full border-2 border-white"></div>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
          Saquarema
        </h1>
        <p className="text-ocean-600 font-medium tracking-widest text-xs uppercase mt-1">
          Capital Nacional do Surf
        </p>
      </div>

      <p className="text-slate-500 mb-8 text-center max-w-xs animate-fade-in animate-delay-200">
        Bem-vindo ao portal da nossa cidade maravilhosa. Como deseja navegar?
      </p>

      {/* ===== OPÇÕES DE PERFIL ===== */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        
        {/* CARD: MORADOR */}
        <button 
          onClick={() => onSelectRole('resident')}
          className="group relative overflow-hidden glass-card rounded-[2.5rem] p-1 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up animate-delay-400"
        >
          <div className="bg-white/40 rounded-[2.2rem] p-6 flex items-center gap-5 transition-colors group-hover:bg-white/60">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
              <User className="w-8 h-8" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-800">Sou Morador</h3>
              <p className="text-sm text-slate-500 mt-0.5">Serviços, Moeda Saquá e UPA em tempo real.</p>
            </div>
            
            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-ocean-500 group-hover:translate-x-1 transition-all ml-auto" />
          </div>
          
          {/* Elemento flutuante decorativo */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-ocean-50 rounded-full group-hover:scale-150 transition-transform flex items-center justify-center opacity-20">
             <CreditCard className="w-8 h-8 text-ocean-600" />
          </div>
        </button>

        {/* CARD: TURISTA */}
        <button 
          onClick={() => onSelectRole('tourist')}
          className="group relative overflow-hidden glass-card rounded-[2.5rem] p-1 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up animate-delay-600"
        >
          <div className="bg-white/40 rounded-[2.2rem] p-6 flex items-center gap-5 transition-colors group-hover:bg-white/60">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-sun-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
              <Palmtree className="w-8 h-8" />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-800">Sou Turista</h3>
              <p className="text-sm text-slate-500 mt-0.5">Praias, Eventos locais, Roteiros e Restaurantes.</p>
            </div>
            
            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all ml-auto" />
          </div>

          {/* Elemento flutuante decorativo */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-50 rounded-full group-hover:scale-150 transition-transform flex items-center justify-center opacity-20">
             <Camera className="w-8 h-8 text-orange-600" />
          </div>
        </button>

      </div>

      {/* ===== FOOTER INFO ===== */}
      <div className="mt-auto pt-10 text-center animate-fade-in animate-delay-800">
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mb-4">
          <Map className="w-3.5 h-3.5" />
          www.saquarema.rj.gov.br
        </div>
        <p className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">
          Prefeitura Municipal de Saquarema
        </p>
      </div>

    </div>
  );
};

export default WelcomeScreen;
