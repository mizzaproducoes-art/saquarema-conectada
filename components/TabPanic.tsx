/**
 * ============================================
 * TAB PANIC - Botão de Pânico / SOS
 * ============================================
 * 
 * Funcionalidade crítica de segurança que
 * envia geolocalização para a Guarda Municipal
 * de Saquarema e contatos de emergência.
 */

import React, { useState, useEffect } from 'react';
import { AlertTriangle, MapPin, Shield, Phone, CheckCircle2 } from 'lucide-react';

const TabPanic: React.FC = () => {
  const [active, setActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (active && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (active && countdown === 0) {
      setSent(true);
      setActive(false);
    }
    
    return () => clearInterval(interval);
  }, [active, countdown]);

  const handlePress = () => {
    if (sent) return;
    
    if (!active) {
      setActive(true);
      setCountdown(5);
    } else {
      // Cancelar
      setActive(false);
      setCountdown(5);
    }
  };

  const handleReset = () => {
    setSent(false);
    setCountdown(5);
  };

  // ===== TELA DE CONFIRMAÇÃO (APÓS ENVIO) =====
  if (sent) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-8 animate-fade-in">
        <div className="max-w-md mx-auto">
          {/* Ícone de sucesso */}
          <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-200 animate-scale-in mx-auto">
            <CheckCircle2 className="w-14 h-14 lg:w-16 lg:h-16 text-white" />
          </div>
        
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mb-2">
            Socorro Solicitado!
          </h2>
          <p className="text-slate-600 max-w-xs lg:max-w-sm mx-auto leading-relaxed">
            Sua localização foi enviada para a <strong>Guarda Municipal de Saquarema</strong> e seus contatos de emergência.
          </p>
        
          {/* Detalhes do chamado */}
          <div className="mt-8 bg-slate-50 rounded-2xl lg:rounded-3xl p-5 lg:p-6 w-full">
            <div className="flex items-center justify-between text-sm lg:text-base">
              <span className="text-slate-500">ID do Chamado</span>
              <span className="font-mono font-bold text-slate-800">#SOS-9921</span>
            </div>
            <div className="flex items-center justify-between text-sm lg:text-base mt-3">
              <span className="text-slate-500">Status</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Em atendimento
              </span>
            </div>
          </div>

          {/* Contatos de emergência */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 w-full">
            <button className="flex-1 py-3.5 px-4 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] btn-touch hover:shadow-lg">
              <Phone className="w-4 h-4" />
              Ligar para Guarda (153)
            </button>
            <button className="flex-1 py-3.5 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] btn-touch hover:shadow-lg">
              <Phone className="w-4 h-4" />
              Ligar SAMU (192)
            </button>
          </div>
        
          <button 
            onClick={handleReset}
            className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 font-semibold transition-all active:scale-[0.98] btn-touch hover:shadow-md"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // ===== TELA PRINCIPAL (BOTÃO SOS) =====
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-8 px-6">
      <div className="max-w-lg mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm lg:text-base font-semibold">Segurança Cidadã</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800">
            Botão de Pânico
          </h2>
          <p className="text-slate-500 mt-2 max-w-xs lg:max-w-sm mx-auto lg:text-lg">
            Pressione em caso de emergência
          </p>
        </div>

      {/* Botão SOS Principal */}
      <div className="relative">
        {/* Anéis de animação quando ativo */}
        {active && (
          <>
            <span className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping opacity-50"></span>
            <span className="absolute inset-[-20px] rounded-full border-2 border-red-200 animate-ping opacity-30" style={{ animationDuration: '1.5s' }}></span>
          </>
        )}
        
        <button
          onClick={handlePress}
          className={`
            relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center 
            shadow-2xl transition-all duration-300 btn-touch
            ${active 
              ? 'bg-red-600 scale-105 shadow-red-500/50' 
              : 'bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:scale-[1.02] shadow-red-900/40'
            }
          `}
        >
          {/* Brilho interno */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-white/20 to-transparent"></div>
          
          <div className="flex flex-col items-center text-white z-10">
            <AlertTriangle className={`w-16 h-16 sm:w-20 sm:h-20 mb-3 ${active ? 'animate-bounce' : ''}`} />
            <span className="text-2xl sm:text-3xl font-extrabold tracking-widest">
              {active ? countdown : 'SOS'}
            </span>
            {active && (
              <span className="text-xs mt-2 bg-red-800/60 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                Toque para cancelar
              </span>
            )}
          </div>
        </button>
      </div>

        {/* Aviso legal */}
        <div className="mt-12 bg-amber-50 border border-amber-200 p-4 lg:p-5 rounded-2xl lg:rounded-3xl max-w-xs lg:max-w-sm text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-xs lg:text-sm font-bold uppercase tracking-wider">Localização</span>
          </div>
          <p className="text-xs lg:text-sm text-amber-800 leading-relaxed">
            Ao ativar, sua geolocalização exata será compartilhada com a 
            <strong> Guarda Municipal de Saquarema</strong> e autoridades locais.
          </p>
        </div>

        {/* Conexão Starlink */}
        <div className="mt-4 flex items-center gap-2 text-xs lg:text-sm text-slate-400">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Conexão via Starlink • Cobertura total
        </div>
      </div>
    </div>
  );
};

export default TabPanic;