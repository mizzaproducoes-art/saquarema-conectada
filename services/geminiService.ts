import { GoogleGenAI } from "@google/genai";

import { UserRole } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI(apiKey);

export const askCityAssistant = async (question: string, role: UserRole): Promise<string> => {
  try {
    const model = 'gemini-1.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: `You are 'Saquá-IA', a helpful and friendly smart city assistant for the city of Saquarema, Brazil. 
        Current user role: ${role}.
        ${role === 'tourist' 
          ? 'Focus on tourism, beaches (Itaúna, Vila), surf picos, and where to eat (seafood). Be very welcoming and enthusiastic.' 
          : 'Focus on public services, health (UPA), Moeda Saquá, and citizen rights. Be professional and efficient.'}
        Keep answers concise (max 2 sentences).
        If asked about the weather, assume it is sunny and 28 degrees.`,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "O assistente está indisponível temporariamente.";
  }
};