
import { GoogleGenAI } from "@google/genai";

export async function generateLovePoem(keywords: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Écris un message d'amour court, poétique et sincère pour une personne nommée Bachira. 
    Inclus ou inspire-toi de ces mots/idées : ${keywords}. 
    Le ton doit être élégant, romantique et très doux, comme une lettre de Saint-Valentin. 
    Réponds uniquement avec le texte du poème/message en français.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Mon cœur ne trouve pas les mots, mais il bat pour toi.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Même l'intelligence artificielle ne peut exprimer l'immensité de mon amour pour toi.";
  }
}
