import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateDesc(imageBuffer) {
  const prompt = "Gere uma descrição em português do Brasil para a seguinte Imagem";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Descrição não disponível.";
  } catch (err) {
    console.error("Erro ao obter uma descrição da imagem:", err.message, err);
    throw new Error("Erro ao obter uma descrição da imagem do Gemini.");
  }
}

export async function generateAltText(imageBuffer) {
    const prompt = "Gere uma alt text em português do Brasil para a seguinte Imagem";
  
    try {
      const image = {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/png",
        },
      };
      const res = await model.generateContent([prompt, image]);
      return res.response.text() || "Alt-text não disponível.";
    } catch (err) {
      console.error("Erro ao obter alt-text:", err.message, err);
      throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}
