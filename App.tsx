/**
 * ============================================
 * SAQUAREMA CONECTADA - App Principal
 * ============================================
 * 
 * Gerencia o fluxo de autenticação e transições
 * entre Login e Dashboard com animações suaves.
 */

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import { UserRole } from './types';

// Estados possíveis da aplicação
type AppState = 'welcome' | 'login' | 'loading' | 'dashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [fadeOut, setFadeOut] = useState(false);

  /**
   * Gerencia a seleção inicial de perfil
   */
  const handleSelectRole = (role: 'resident' | 'tourist') => {
    setFadeOut(true);
    setUserRole(role);
    
    setTimeout(() => {
      if (role === 'resident') {
        setAppState('login');
      } else {
        // Turistas pulam o login e vão para o loading -> dashboard
        setAppState('loading');
        setTimeout(() => {
          setAppState('dashboard');
        }, 1500);
      }
      setFadeOut(false);
    }, 400);
  };

  /**
   * Gerencia a transição suave do login para o dashboard
   * 1. Fade out do login
   * 2. Exibe loading screen por 1.5s
   * 3. Fade in do dashboard
   */
  const handleLogin = () => {
    // Inicia fade out do login
    setFadeOut(true);
    
    // Após fade out, mostra loading
    setTimeout(() => {
      setAppState('loading');
      setFadeOut(false);
      
      // Após loading, mostra dashboard
      setTimeout(() => {
        setAppState('dashboard');
      }, 1500);
    }, 400);
  };

  // Componente de Loading Screen
  const LoadingScreen = () => (
    <div className="loading-overlay animate-fade-in">
      {/* Logo e Nome */}
      <div className="text-center mb-8 animate-scale-in">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Saquarema
        </h1>
        <p className="text-ocean-200 text-sm font-light mt-1">
          Conectada
        </p>
      </div>

      {/* Spinner */}
      <div className="spinner-ring mb-6"></div>
      
      {/* Mensagem de loading */}
      <p className="text-white/70 text-sm animate-pulse-soft">
        Preparando sua experiência...
      </p>
      
      {/* Indicadores de progresso */}
      <div className="flex gap-2 mt-6">
        <div className="pulse-dot" style={{ animationDelay: '0ms' }}></div>
        <div className="pulse-dot" style={{ animationDelay: '200ms' }}></div>
        <div className="pulse-dot" style={{ animationDelay: '400ms' }}></div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen font-sans antialiased text-slate-900">
      {/* Estado: Welcome / Seleção de Perfil */}
      {appState === 'welcome' && (
        <div className={`min-h-screen ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <WelcomeScreen onSelectRole={handleSelectRole} />
        </div>
      )}

      {/* Estado: Login */}
      {appState === 'login' && (
        <div className={`min-h-screen ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <LoginScreen onLogin={handleLogin} />
        </div>
      )}

      {/* Estado: Loading Transition */}
      {appState === 'loading' && <LoadingScreen />}

      {/* Estado: Dashboard */}
      {appState === 'dashboard' && (
        <div className="min-h-screen animate-fade-in-up">
          <Dashboard role={userRole || 'resident'} />
        </div>
      )}
    </div>
  );
};

export default App;