/**
 * ============================================
 * TAB TRANSPORT - Rastreamento de Ônibus
 * ============================================
 * 
 * Exibe linhas de ônibus reais de Saquarema
 * com status em tempo real e modo offline
 * para áreas sem cobertura de internet.
 */

import React, { useState } from 'react';
import { Bus, MapPin, SignalHigh, WifiOff, Clock, Navigation } from 'lucide-react';
import { BusLine } from '../types';

const TabTransport: React.FC = () => {
  const [offlineMode, setOfflineMode] = useState(false);

  // Dados das linhas de ônibus reais de Saquarema
  const buses: BusLine[] = [
    { 
      id: '1', 
      route: 'Bacaxá ↔ Praia de Itaúna', 
      status: 'ontime', 
      nextArrival: '5 min', 
      location: 'Av. Saquarema, próx. Terminal' 
    },
    { 
      id: '2', 
      route: 'Centro ↔ Jaconé', 
      status: 'delayed', 
      nextArrival: '18 min', 
      location: 'Rodoviária Municipal' 
    },
    { 
      id: '3', 
      route: 'Vilatur ↔ Centro', 
      status: 'ontime', 
      nextArrival: '2 min', 
      location: 'Próx. Ponte da Barra' 
    },
    { 
      id: '4', 
      route: 'Sampaio Corrêa ↔ Palmital', 
      status: 'stopped', 
      nextArrival: '--', 
      location: 'Garagem - Sem operação' 
    },
    { 
      id: '5', 
      route: 'Bacaxá ↔ Praia Seca', 
      status: 'ontime', 
      nextArrival: '12 min', 
      location: 'RJ-102, Km 8' 
    },
  ];

  // Mapeamento de status para cores e textos
  const statusConfig = {
    ontime: { 
      bg: 'bg-emerald-50', 
      text: 'text-emerald-700', 
      border: 'border-emerald-500',
      label: 'No horário',
      dot: 'bg-emerald-500'
    },
    delayed: { 
      bg: 'bg-amber-50', 
      text: 'text-amber-700', 
      border: 'border-amber-500',
      label: 'Atrasado',
      dot: 'bg-amber-500'
    },
    stopped: { 
      bg: 'bg-red-50', 
      text: 'text-red-700', 
      border: 'border-red-500',
      label: 'Parado',
      dot: 'bg-red-500'
    },
  };

  return (
    <div className="space-y-5 pb-28">
      {/* ===== TOGGLE MODO OFFLINE ===== */}
      <div className="glass-card p-4 rounded-2xl shadow-glass flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl transition-all ${
            offlineMode 
              ? 'bg-slate-100 text-slate-400' 
              : 'bg-emerald-100 text-emerald-600'
          }`}>
            {offlineMode ? <WifiOff className="w-5 h-5" /> : <SignalHigh className="w-5 h-5" />}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">
              {offlineMode ? 'Modo Offline' : 'Tempo Real'}
            </p>
            <p className="text-xs text-slate-500">
              {offlineMode ? 'Dados salvos localmente' : 'Atualização via GPS'}
            </p>
          </div>
        </div>
        
        {/* Toggle Switch */}
        <button 
          onClick={() => setOfflineMode(!offlineMode)}
          className={`relative w-14 h-7 rounded-full p-1 transition-all duration-300 ${
            offlineMode ? 'bg-ocean-500' : 'bg-slate-200'
          }`}
        >
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            offlineMode ? 'translate-x-7' : 'translate-x-0'
          }`} />
        </button>
      </div>

      {/* ===== LISTA DE LINHAS ===== */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            Linhas Disponíveis
          </h3>
          <span className="text-xs text-slate-400">{buses.length} rotas</span>
        </div>
        
        {buses.map((bus, index) => {
          const config = statusConfig[bus.status];
          
          return (
            <div 
              key={bus.id} 
              className="glass-card rounded-2xl shadow-glass overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Barra de status lateral */}
              <div className={`h-full w-1.5 absolute left-0 top-0 ${config.dot}`}></div>
              
              <div className="p-4 pl-5">
                <div className="flex justify-between items-start gap-3">
                  {/* Info da linha */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-ocean-100 text-ocean-600">
                        <Bus className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-slate-800 text-base truncate">
                        {bus.route}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{bus.location}</span>
                    </div>
                  </div>
                  
                  {/* Status e tempo */}
                  <div className="text-right flex-shrink-0">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${config.bg} ${config.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                      {config.label}
                    </div>
                    <p className="text-2xl font-extrabold text-slate-800 mt-1.5">
                      {bus.nextArrival}
                    </p>
                  </div>
                </div>
                
                {/* Indicador GPS ao vivo */}
                {!offlineMode && bus.status !== 'stopped' && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      GPS Ao Vivo
                    </div>
                    <button className="flex items-center gap-1 text-xs text-ocean-600 font-semibold hover:text-ocean-700 transition-colors">
                      <Navigation className="w-3.5 h-3.5" />
                      Ver no mapa
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== AVISO OFFLINE ===== */}
      {offlineMode && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 animate-fade-in">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-800">Última atualização: há 5 min</p>
            <p className="text-xs text-amber-600 mt-1">
              Conecte-se à internet para dados em tempo real.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabTransport;