import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCityAssistant = async (question: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: `You are 'Saquá-IA', a helpful and friendly smart city assistant for the city of Saquarema, Brazil. 
        Keep answers concise (max 2 sentences) and helpful for a mobile user. 
        Focus on tourism, transport, health, and local services.
        If asked about the weather, assume it is sunny and 28 degrees.
        If asked about the mayor, answer neutrally.`,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "O assistente está indisponível temporariamente.";
  }
};