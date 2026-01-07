/**
 * ============================================
 * LOGIN SCREEN - Tela de Autenticação Responsiva
 * ============================================
 * 
 * Design premium com glassmorphism, responsivo
 * para mobile e desktop com layout side-by-side.
 */

import React, { useState } from 'react';
import { Loader2, Landmark, Waves, ArrowLeft, Shield, Sparkles } from 'lucide-react';

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
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      
      {/* ===== SEÇÃO ESQUERDA: BACKGROUND HERO ===== */}
      <div className="relative flex-1 min-h-[30vh] lg:min-h-screen">
        {/* Background: Praia de Saquarema */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
          }}
        >
          {/* Overlay com gradiente oceano */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-ocean-900/70 via-ocean-700/60 to-ocean-900/80"></div>
          
          {/* Efeitos de luz */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-ocean-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-sun-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-16 text-white">
          {/* Logo */}
          <div className="animate-fade-in-down">
            <div className="w-20 h-20 lg:w-28 lg:h-28 mx-auto mb-4 rounded-3xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 glow-blue">
              <Waves className="w-10 h-10 lg:w-14 lg:h-14 text-white" />
            </div>
          </div>

          {/* Título */}
          <div className="text-center animate-fade-in-up animate-delay-200">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight glow-text">
              Saquarema
            </h1>
            <p className="text-ocean-200 font-medium tracking-[0.2em] text-sm lg:text-base uppercase mt-1">
              Conectada
            </p>
          </div>

          {/* Tagline (Desktop) */}
          <p className="hidden lg:block text-xl text-white/80 text-center max-w-md mt-6 animate-fade-in animate-delay-400">
            Acesse sua conta para aproveitar todos os serviços da cidade.
          </p>

          {/* Features (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 mt-auto pt-12 animate-fade-in animate-delay-600">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <Shield className="w-5 h-5 text-ocean-300" />
              Acesso seguro via Gov.br
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <Sparkles className="w-5 h-5 text-sun-400" />
              Moeda Social Saquá
            </div>
          </div>
        </div>
      </div>

      {/* ===== SEÇÃO DIREITA: FORMULÁRIO ===== */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 lg:p-16 bg-white lg:rounded-l-[3rem] lg:shadow-2xl z-10 -mt-8 lg:mt-0 rounded-t-[2rem] lg:rounded-t-none">
        
        {/* Botão Voltar (Mobile) */}
        <button 
          type="button"
          aria-label="Voltar"
          className="lg:hidden absolute top-6 left-6 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Header do Formulário */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-50 text-ocean-600 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Área do Morador
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">Acesse sua conta</h2>
          <p className="text-slate-500 mt-2 text-sm">Entre com seu CPF e senha cadastrados</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-sm animate-fade-in-up animate-delay-200">
          {/* Campo CPF */}
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 ml-1 uppercase tracking-wider">
              CPF
            </label>
            <input 
              type="text" 
              inputMode="numeric"
              value={cpf}
              onChange={handleCPFChange}
              placeholder="000.000.000-00"
              className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 
                focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-400 focus:bg-white
                transition-all duration-300 text-base"
              required
            />
          </div>
          
          {/* Campo Senha */}
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 ml-1 uppercase tracking-wider">
              Senha
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 
                focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-400 focus:bg-white
                transition-all duration-300 text-base"
              required
            />
          </div>

          {/* Links auxiliares */}
          <div className="flex justify-between items-center text-xs text-slate-500 px-1">
            <button type="button" className="hover:text-ocean-600 transition-colors py-2">
              Primeiro Acesso
            </button>
            <button type="button" className="hover:text-ocean-600 transition-colors py-2">
              Esqueci a senha
            </button>
          </div>

          {/* Botão Principal */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-ocean-500 to-ocean-600 
              hover:from-ocean-600 hover:to-ocean-700 hover:shadow-xl hover:scale-[1.02]
              text-white font-bold text-base shadow-lg shadow-ocean-500/30 
              transform transition-all duration-300 
              active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
              flex justify-center items-center gap-2 btn-touch btn-glow"
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
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium">ou</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Botão Gov.br */}
          <button 
            type="button"
            className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 
              text-white font-semibold text-sm
              shadow-md hover:shadow-lg
              transform transition-all duration-300 
              active:scale-[0.98] 
              flex justify-center items-center gap-2 btn-touch"
          >
            <Landmark className="w-5 h-5" />
            Entrar com Gov.br
          </button>
        </form>

        {/* Footer */}
        <div className="mt-auto pt-10 text-center animate-fade-in animate-delay-400">
          <p className="text-slate-400 text-xs">Prefeitura Municipal de Saquarema</p>
          <p className="text-slate-300 text-[10px] mt-1">© 2024 • Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;