/**
 * ============================================
 * DASHBOARD - Tela Principal do App
 * ============================================
 * 
 * Container principal que gerencia navegação
 * entre as abas e exibe o header com dados
 * do usuário.
 */

import React, { useState } from 'react';
import { Home, Bus, Heart, AlertTriangle, Bell, User as UserIcon, ChevronRight } from 'lucide-react';
import { AppTab, User } from '../types';
import TabHome from './TabHome';
import TabTransport from './TabTransport';
import TabHealth from './TabHealth';
import TabPanic from './TabPanic';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  
  // Dados do usuário logado (mock realista)
  const user: User = {
    name: 'Emizael',
    cpf: '123.456.789-00',
    balance: 1250.00
  };

  // Configuração das abas de navegação
  const navItems = [
    { id: AppTab.HOME, icon: Home, label: 'Início', color: 'text-ocean-600' },
    { id: AppTab.TRANSPORT, icon: Bus, label: 'Transporte', color: 'text-orange-500' },
    { id: AppTab.HEALTH, icon: Heart, label: 'Saúde', color: 'text-rose-500' },
    { id: AppTab.PANIC, icon: AlertTriangle, label: 'Pânico', color: 'text-red-600' },
  ];

  const renderTab = () => {
    switch(activeTab) {
      case AppTab.HOME: return <TabHome user={user} />;
      case AppTab.TRANSPORT: return <TabTransport />;
      case AppTab.HEALTH: return <TabHealth />;
      case AppTab.PANIC: return <TabPanic />;
      default: return <TabHome user={user} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-slate-100/50">
      {/* ===== HEADER ===== */}
      <header className="px-5 pt-safe bg-white/80 backdrop-blur-lg border-b border-slate-100 z-20">
        <div className="pt-12 pb-4 flex justify-between items-center">
          {/* Avatar e Saudação */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center text-white shadow-md">
              <UserIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Bem-vindo de volta,</p>
              <h1 className="text-lg font-bold text-slate-800 leading-tight flex items-center gap-1">
                Olá, {user.name}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </h1>
            </div>
          </div>
          
          {/* Botão de Notificações */}
          <button className="relative p-3 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all btn-touch">
            <Bell className="w-6 h-6" />
            {/* Badge de notificação */}
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </button>
        </div>
      </header>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="flex-1 overflow-y-auto px-5 py-6 no-scrollbar">
        <div className="animate-fade-in">
          {renderTab()}
        </div>
      </main>

      {/* ===== NAVEGAÇÃO INFERIOR ===== */}
      <nav className="glass-card border-t border-slate-200/50 px-4 py-2 fixed bottom-0 w-full z-30 pb-safe">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isPanic = item.id === AppTab.PANIC;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all duration-300 btn-touch
                  ${isActive 
                    ? `${isPanic ? 'bg-red-50 text-red-600' : 'bg-ocean-50 text-ocean-600'} scale-105` 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <item.icon 
                  className={`w-6 h-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} 
                />
                <span className={`text-[10px] font-semibold uppercase tracking-wide transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;