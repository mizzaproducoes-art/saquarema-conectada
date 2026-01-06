/**
 * ============================================
 * LOGIN SCREEN - Tela de Autenticação
 * ============================================
 * 
 * Primeira impressão do app. Usa glassmorphism
 * sobre imagem de praia de Saquarema para
 * criar visual premium e moderno.
 */

import React, { useState } from 'react';
import { Loader2, Landmark, Waves } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Formata CPF automaticamente enquanto digita
   */
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    if (formatted.length <= 14) setCpf(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simula validação de API
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* ===== BACKGROUND: Praia de Saquarema ===== */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
        }}
      >
        {/* Overlay com gradiente oceano */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-700/50 to-ocean-900/70 backdrop-blur-[2px]"></div>
        
        {/* Efeito de luz no topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* ===== CARD DE LOGIN (Glassmorphism) ===== */}
      <div className="relative z-10 w-full max-w-sm mx-4 p-8 rounded-3xl glass shadow-glass-lg animate-fade-in-up">
        
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-glow-blue">
            <Waves className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">
            Saquarema
          </h1>
          <p className="text-ocean-200 text-sm mt-1 font-medium tracking-wide">
            CONECTADA
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo CPF */}
          <div>
            <label className="block text-white/90 text-xs font-semibold mb-2 ml-1 uppercase tracking-wider">
              CPF
            </label>
            <input 
              type="text" 
              inputMode="numeric"
              value={cpf}
              onChange={handleCPFChange}
              placeholder="000.000.000-00"
              className="w-full px-4 py-3.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 
                focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:bg-white/30 focus:border-transparent
                transition-all duration-300 backdrop-blur-sm text-base"
              required
            />
          </div>
          
          {/* Campo Senha */}
          <div>
            <label className="block text-white/90 text-xs font-semibold mb-2 ml-1 uppercase tracking-wider">
              Senha
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 
                focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:bg-white/30 focus:border-transparent
                transition-all duration-300 backdrop-blur-sm text-base"
              required
            />
          </div>

          {/* Links auxiliares */}
          <div className="flex justify-between items-center text-xs text-white/70 px-1">
            <button type="button" className="hover:text-white transition-colors py-2">
              Primeiro Acesso
            </button>
            <button type="button" className="hover:text-white transition-colors py-2">
              Esqueci a senha
            </button>
          </div>

          {/* Botão Principal */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 
              hover:from-ocean-600 hover:to-ocean-700 
              text-white font-bold text-base shadow-lg shadow-ocean-900/30 
              transform transition-all duration-300 
              active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
              flex justify-center items-center gap-2 btn-touch"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Entrando...</span>
              </>
            ) : (
              "Entrar"
            )}
          </button>

          {/* Divisor */}
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="flex-shrink mx-4 text-white/50 text-xs font-medium">ou</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          {/* Botão Gov.br */}
          <button 
            type="button"
            className="w-full py-3.5 rounded-xl bg-white hover:bg-white/90 
              text-ocean-800 font-semibold text-sm
              shadow-md border border-white/50 
              transform transition-all duration-300 
              active:scale-[0.98] 
              flex justify-center items-center gap-2 btn-touch"
          >
            <Landmark className="w-4 h-4" />
            Entrar com Gov.br
          </button>
        </form>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 text-white/40 text-xs font-light text-center">
        <p>Prefeitura Municipal de Saquarema</p>
        <p className="mt-1">© 2024 • Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default LoginScreen;