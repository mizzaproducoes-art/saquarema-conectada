/**
 * ============================================
 * DASHBOARD - Layout Principal Responsivo
 * ============================================
 * 
 * Container principal com navegação adaptativa:
 * - Desktop: Sidebar lateral
 * - Mobile: Bottom navigation
 */

import React, { useState } from 'react';
import { Home, Bus, Heart, AlertTriangle, Bell, User as UserIcon, ChevronRight, Waves, LogOut, Calendar } from 'lucide-react';
import { AppTab, User, UserRole } from '../types';
import TabHome from './TabHome';
import TabTransport from './TabTransport';
import TabHealth from './TabHealth';
import TabPanic from './TabPanic';
import TabEvents from './TabEvents';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const isResident = role === 'resident';
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  
  // Dados do usuário logado (mock realista adaptado ao role)
  const user: User = {
    name: 'Emizael',
    cpf: isResident ? '123.456.789-00' : undefined,
    balance: isResident ? 1250.00 : undefined,
    role: role
  };

  // Configuração das abas de navegação dinâmica
  const navItems = [
    { id: AppTab.HOME, icon: Home, label: isResident ? 'Início' : 'Explorar', color: 'ocean' },
    { id: AppTab.TRANSPORT, icon: Bus, label: 'Transporte', color: 'orange' },
    ...(isResident 
      ? [{ id: AppTab.HEALTH, icon: Heart, label: 'Saúde', color: 'rose' }]
      : [{ id: AppTab.EVENTS, icon: Calendar, label: 'Eventos', color: 'purple' }]
    ),
    { id: AppTab.PANIC, icon: AlertTriangle, label: 'SOS', color: 'red' },
  ];

  const renderTab = () => {
    switch(activeTab) {
      case AppTab.HOME: return <TabHome user={user} />;
      case AppTab.TRANSPORT: return <TabTransport />;
      case AppTab.HEALTH: return isResident ? <TabHealth /> : <TabHome user={user} />;
      case AppTab.EVENTS: return !isResident ? <TabEvents /> : <TabHome user={user} />;
      case AppTab.PANIC: return <TabPanic />;
      default: return <TabHome user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* ===== SIDEBAR (Desktop) ===== */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center shadow-lg">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-800">Saquarema</h1>
              <p className="text-xs text-slate-500">Conectada</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 mx-4 mt-4 rounded-2xl bg-gradient-to-br from-ocean-50 to-slate-50 border border-ocean-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center text-white">
              <UserIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">{user.name}</p>
              <p className="text-xs text-slate-500">{isResident ? 'Morador' : 'Turista'}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isPanic = item.id === AppTab.PANIC;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`sidebar-item w-full ${isActive ? 'active' : ''} ${isPanic && isActive ? '!bg-red-50 !text-red-600' : ''}`}
              >
                <item.icon className={`w-5 h-5 ${isPanic ? 'text-red-500' : ''}`} />
                <span>{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
          <button className="sidebar-item w-full text-slate-400 hover:text-red-500 hover:bg-red-50">
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">
        
        {/* Header (Mobile) */}
        <header className="md:hidden sticky top-0 px-5 pt-safe bg-white/90 backdrop-blur-xl border-b border-slate-100 z-20">
          <div className="pt-10 pb-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center text-white shadow-md">
                <UserIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Bem-vindo,</p>
                <h1 className="text-base font-bold text-slate-800 leading-tight flex items-center gap-1">
                  {user.name}
                  <span className="text-xs font-normal text-slate-400 ml-1">
                    ({isResident ? 'Morador' : 'Turista'})
                  </span>
                </h1>
              </div>
            </div>
            
            <button aria-label="Notificações" className="relative p-3 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all btn-touch">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* Header (Desktop) */}
        <header className="hidden md:flex sticky top-0 px-8 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-20 items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {navItems.find(n => n.id === activeTab)?.label || 'Início'}
            </h1>
            <p className="text-sm text-slate-500">Olá, {user.name}! Bem-vindo de volta.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button aria-label="Notificações" className="relative p-3 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* ===== CONTEÚDO PRINCIPAL ===== */}
        <main className="px-5 py-6 md:px-8 md:py-8 pb-28 md:pb-8">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {renderTab()}
          </div>
        </main>
      </div>

      {/* ===== NAVEGAÇÃO INFERIOR (Mobile) ===== */}
      <nav className="bottom-nav glass-card border-t border-slate-200/50 px-4 py-2 pb-safe">
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