/**
 * ============================================
 * TAB EVENTS - Agenda Cultural e Esportiva
 * ============================================
 * 
 * Exclusivo para perfis Turista e Moradores
 * interessados nos grandes eventos da cidade.
 */

import React from 'react';
import { Calendar, MapPin, Ticket, Star, Music, Trophy, Waves } from 'lucide-react';

const TabEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Festival de Verão Saquarema 2026',
      date: 'Jan - Fev 2026',
      location: 'Praia da Vila / Itaúna',
      desc: 'Shows nacionais com Barão Vermelho, Kamisa 10 e competições esportivas.',
      type: 'Music',
      icon: Music,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Rei e Rainha do Mar',
      date: '25 de Janeiro, 2026',
      location: 'Praia da Vila',
      desc: 'Maior festival de esportes de praia do Brasil desembarca em Saquarema.',
      type: 'Sports',
      icon: Trophy,
      color: 'from-orange-400 to-rose-500'
    },
    {
      id: 3,
      title: 'WSL - Vivo Rio Pro',
      date: 'Junho 2026',
      location: 'Praia de Itaúna',
      desc: 'Elite do surf mundial na Capital Nacional do Surf.',
      type: 'Surf',
      icon: Waves,
      color: 'from-ocean-400 to-ocean-600'
    }
  ];

  return (
    <div className="space-y-6 pb-28">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">O que tá rolando</h2>
          <p className="text-sm text-slate-500">Eventos e atrações em Saquarema</p>
        </div>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
           <Calendar className="w-6 h-6 text-ocean-500" />
        </div>
      </div>

      {/* ===== LISTA DE EVENTOS ===== */}
      <div className="space-y-4">
        {events.map((event, idx) => (
          <div 
            key={event.id}
            className="glass-card rounded-3xl overflow-hidden shadow-glass animate-fade-in-up"
          >
            {/* Banner superior colorido */}
            <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${event.color} text-white shadow-md`}>
                   <event.icon className="w-5 h-5" />
                </div>
                <div className="bg-slate-50 px-3 py-1 rounded-full border border-slate-100 flex items-center gap-1.5">
                   <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                   <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Destaque</span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-slate-800 leading-tight">
                {event.title}
              </h4>
              
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-ocean-500" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {event.location}
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-2">
                {event.desc}
              </p>

              <button className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                 <Ticket className="w-4 h-4" />
                 Saber mais / Ingressos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== BANNER INFORMATIVO ===== */}
      <div className="bg-ocean-50 rounded-2xl p-5 border border-ocean-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
           <MapPin className="w-6 h-6 text-ocean-500" />
        </div>
        <div className="flex-1">
           <p className="text-xs font-bold text-ocean-800 uppercase tracking-wider">Centro de Apoio</p>
           <p className="text-[11px] text-ocean-600">Dúvidas sobre eventos? Visite o CAT na Praça da Vila.</p>
        </div>
      </div>
    </div>
  );
};

export default TabEvents;
