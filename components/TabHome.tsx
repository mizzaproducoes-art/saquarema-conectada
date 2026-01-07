/**
 * ============================================
 * TAB HOME - Página Inicial Responsiva
 * ============================================
 * 
 * Layout adaptativo com grid responsivo.
 * Morador: Carteira Digital + Serviços
 * Turista: Hero de Exploração + Roteiros
 */

import React, { useState } from 'react';
import { 
  CreditCard, 
  ArrowRightLeft, 
  FileText, 
  Wifi, 
  Bus, 
  Stethoscope, 
  Umbrella, 
  Landmark,
  Sparkles,
  Send,
  QrCode,
  Receipt,
  Palmtree,
  Camera,
  Utensils,
  Sun,
  Map,
  TrendingUp
} from 'lucide-react';
import { askCityAssistant } from '../services/geminiService';
import { User, ChatMessage } from '../types';

interface TabHomeProps {
  user: User;
}

const TabHome: React.FC<TabHomeProps> = ({ user }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    const responseText = await askCityAssistant(input, user.role);
    
    setIsThinking(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const isResident = user.role === 'resident';

  // Atalhos rápidos dinâmicos
  const residentQuickAccess = [
    { icon: Bus, label: 'Transporte', color: 'from-orange-400 to-orange-500' },
    { icon: Stethoscope, label: 'Saúde', color: 'from-rose-400 to-rose-500' },
    { icon: Landmark, label: 'IPTU', color: 'from-indigo-400 to-indigo-500' },
    { icon: FileText, label: 'Ouvidoria', color: 'from-amber-400 to-amber-500' },
    { icon: Umbrella, label: 'Defesa Civil', color: 'from-cyan-400 to-cyan-500' },
    { icon: TrendingUp, label: 'Economia', color: 'from-emerald-400 to-emerald-500' },
  ];

  const touristQuickAccess = [
    { icon: Palmtree, label: 'Praias', color: 'from-cyan-400 to-ocean-500' },
    { icon: Utensils, label: 'Onde Comer', color: 'from-orange-400 to-red-500' },
    { icon: Map, label: 'Roteiros', color: 'from-emerald-400 to-teal-500' },
    { icon: Camera, label: 'Fotos', color: 'from-pink-400 to-purple-500' },
    { icon: Sun, label: 'Previsão', color: 'from-yellow-400 to-orange-500' },
    { icon: Bus, label: 'Transporte', color: 'from-slate-400 to-slate-600' },
  ];

  const quickAccess = isResident ? residentQuickAccess : touristQuickAccess;

  return (
    <div className="space-y-6 lg:space-y-8">
      
      {/* ===== GRID RESPONSIVO: HERO + AI ASSISTANT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* HERO: CONDICIONAL (3 colunas no desktop) */}
        <div className="lg:col-span-3">
          {isResident ? (
            /* ===== CARD MORADOR: CARTEIRA DIGITAL ===== */
            <div className="relative overflow-hidden rounded-3xl gradient-ocean text-white shadow-xl p-6 lg:p-8 h-full">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-sun-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 lg:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-base lg:text-lg font-semibold tracking-wide">Moeda Social</span>
                      <span className="block text-sm text-ocean-200 font-medium">SAQUÁ</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-ocean-200">Sua Carteira</span>
                  </div>
                </div>
                
                <div className="mb-8 lg:mb-10">
                  <p className="text-ocean-200 text-sm">Saldo disponível</p>
                  <h2 className="text-4xl lg:text-5xl font-extrabold mt-2 tracking-tight flex items-baseline gap-2">
                    <span className="text-xl lg:text-2xl font-medium text-ocean-200">R$</span>
                    {user.balance?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <button className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-all active:scale-95 btn-touch hover-lift">
                    <QrCode className="w-6 h-6" />
                    <span className="text-sm font-medium">Pagar</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-all active:scale-95 btn-touch hover-lift">
                    <ArrowRightLeft className="w-6 h-6" />
                    <span className="text-sm font-medium">Transferir</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-all active:scale-95 btn-touch hover-lift">
                    <Receipt className="w-6 h-6" />
                    <span className="text-sm font-medium">Extrato</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ===== CARD TURISTA: EXPLORE ===== */
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 text-white shadow-xl p-6 lg:p-8 h-full">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-6 h-6 text-yellow-200 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Explore Saquarema</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                  Aproveite o <br />melhor do Verão!
                </h2>
                <p className="text-sm lg:text-base text-white/90 mt-3 font-medium max-w-xs">
                  Descubra praias, picos de surf e a melhor gastronomia da região.
                </p>
                
                <button className="mt-auto pt-6 px-8 py-4 bg-white text-rose-600 rounded-2xl font-bold text-base shadow-lg shadow-rose-900/20 active:scale-95 transition-all hover:shadow-xl hover:scale-105 w-fit">
                  Ver Roteiros Ativos
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ASSISTENTE IA (2 colunas no desktop) */}
        <div className="lg:col-span-2 glass-card rounded-2xl shadow-lg p-5 lg:p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Saquá-IA</h3>
              <p className="text-xs text-slate-500">
                 {isResident ? 'Assistente do Cidadão' : 'Guia Local Inteligente'}
              </p>
            </div>
          </div>
          
          {/* Área de mensagens */}
          <div className="flex-1 space-y-3 mb-4 max-h-48 lg:max-h-64 overflow-y-auto no-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-sm text-slate-500">
                  👋 Olá! Pergunte sobre horários, turismo ou serviços da cidade.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === 'user' 
                    ? 'bg-ocean-500 text-white rounded-br-md' 
                    : 'bg-slate-100 text-slate-800 rounded-bl-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                 </div>
               </div>
            )}
          </div>

          {/* Input de mensagem */}
          <div className="relative mt-auto">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Como posso ajudar?"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-14 py-3.5 text-sm 
                focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 
                transition-all placeholder:text-slate-400"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!input.trim() || isThinking}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 
                text-white rounded-xl hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed 
                transition-all active:scale-95 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ===== ACESSO RÁPIDO ===== */}
      <div>
        <h3 className="text-slate-800 font-bold text-lg lg:text-xl mb-4">
          {isResident ? 'Serviços do Cidadão' : 'Explorar a Cidade'}
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 lg:gap-4 stagger-children">
          {quickAccess.map((item, idx) => (
            <button 
              key={idx} 
              className="flex flex-col items-center gap-2 group animate-fade-in-up"
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-active:scale-95 group-hover:scale-110 transition-transform hover-lift`}>
                <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className="text-xs lg:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors text-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== BANNER PATROCINADO ===== */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl lg:rounded-3xl p-5 lg:p-8 text-white shadow-xl hover-lift">
        {/* Brilho decorativo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-sun-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-ocean-400/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 bg-sun-400 text-slate-900 text-[10px] lg:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <Wifi className="w-3 h-3" />
              Patrocinado
            </span>
            <p className="font-bold text-lg lg:text-xl mt-3">Supermercado Costa Azul</p>
            <p className="text-sm text-slate-400 mt-1">Wi-Fi Starlink gratuito para clientes</p>
          </div>
          <div className="ml-4 p-4 lg:p-5 rounded-2xl bg-sun-400/20">
            <Wifi className="w-8 h-8 lg:w-10 lg:h-10 text-sun-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHome;