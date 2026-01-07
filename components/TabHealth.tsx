/**
 * ============================================
 * TAB HEALTH - Saúde e Telemedicina
 * ============================================
 * 
 * Informações de saúde pública de Saquarema,
 * agendamento de consultas e telemedicina
 * para reduzir filas na UPA.
 */

import React from 'react';
import { Calendar, Clock, Activity, Video, Building2, Users, ChevronRight } from 'lucide-react';

const TabHealth: React.FC = () => {
  // Status das unidades de saúde reais de Saquarema
  const healthUnits = [
    {
      name: 'UPA 24h Dr. José Leal Martins',
      location: 'Bacaxá',
      queue: 'Baixa',
      waitTime: '~15 min',
      status: 'low' as const,
    },
    {
      name: 'Centro de Saúde Elza Corrêa',
      location: 'Centro',
      queue: 'Moderada',
      waitTime: '~35 min',
      status: 'medium' as const,
    },
  ];

  // Campanhas ativas
  const campaigns = [
    {
      title: 'Vacinação Gripe',
      description: 'Disponível em todos os postos até 30/11.',
      color: 'bg-pink-50 border-pink-100',
      iconBg: 'bg-pink-200 text-pink-700',
    },
    {
      title: 'Dengue - Mutirão',
      description: 'Agentes visitando bairros toda semana.',
      color: 'bg-orange-50 border-orange-100',
      iconBg: 'bg-orange-200 text-orange-700',
    },
  ];

  const queueConfig = {
    low: { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500', ring: 'ring-emerald-100' },
    medium: { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500', ring: 'ring-amber-100' },
    high: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500', ring: 'ring-red-100' },
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* ===== STATUS DAS UNIDADES ===== */}
      <div className="space-y-4">
        <h3 className="text-sm lg:text-base font-bold text-slate-500 uppercase tracking-wider px-1">
          Unidades de Saúde
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {healthUnits.map((unit, index) => {
          const config = queueConfig[unit.status];
          
          return (
            <div 
              key={index}
              className="glass-card p-5 rounded-2xl shadow-glass animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                    <h4 className="font-bold text-slate-800 text-sm truncate">{unit.name}</h4>
                  </div>
                  <p className="text-xs text-slate-500 ml-6">{unit.location}</p>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${config.bg} ${config.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                      Fila {unit.queue}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {unit.waitTime}
                    </div>
                  </div>
                </div>
                
                {/* Indicador visual circular */}
                <div className={`h-14 w-14 rounded-full ${config.bg} ring-4 ${config.ring} flex items-center justify-center flex-shrink-0`}>
                  <Activity className={`w-6 h-6 ${config.text}`} />
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* ===== AÇÕES RÁPIDAS ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Telemedicina */}
        <button className="glass-card rounded-2xl p-5 lg:p-6 shadow-glass flex flex-col items-center text-center transition-all hover:shadow-lg active:scale-[0.98] btn-touch hover-lift">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl flex items-center justify-center text-white mb-3 shadow-md">
            <Video className="w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <span className="font-bold text-slate-800 text-sm lg:text-base">Telemedicina</span>
          <span className="text-xs lg:text-sm text-slate-500 mt-1">Consulta online</span>
        </button>

        {/* Minhas Consultas */}
        <button className="glass-card rounded-2xl p-5 lg:p-6 shadow-glass flex flex-col items-center text-center transition-all hover:shadow-lg active:scale-[0.98] btn-touch hover-lift">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-3 shadow-md">
            <Calendar className="w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <span className="font-bold text-slate-800 text-sm lg:text-base">Consultas</span>
          <span className="text-xs lg:text-sm text-slate-500 mt-1">Minha agenda</span>
        </button>
      </div>

      {/* ===== PRÓXIMA CONSULTA (MOCK) ===== */}
      <div className="glass-card rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-glass border-l-4 border-ocean-500 hover-lift">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-ocean-600 font-semibold uppercase tracking-wider">Próxima consulta</p>
            <p className="font-bold text-slate-800 mt-1">Clínico Geral</p>
            <p className="text-sm text-slate-500 mt-0.5">Dr. Carlos Eduardo Silva</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>15 Jan 2026 • 14:30</span>
            </div>
          </div>
          <button className="p-3 rounded-xl bg-ocean-50 text-ocean-600 hover:bg-ocean-100 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ===== CAMPANHAS ATIVAS ===== */}
      <div>
        <h3 className="text-sm lg:text-base font-bold text-slate-500 uppercase tracking-wider px-1 mb-3">
          Campanhas Ativas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {campaigns.map((campaign, index) => (
            <div 
              key={index}
              className={`flex items-start gap-3 p-4 rounded-2xl border ${campaign.color} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-2.5 rounded-xl ${campaign.iconBg}`}>
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{campaign.title}</p>
                <p className="text-xs text-slate-600 mt-0.5">{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabHealth;