import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
export async function generateDesc(imageBuffer) {
  const prompt = "Generate a description for this following image";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Description unavailable.";
  } catch (err) {
    console.error("Error when getting a image description:", err.message, err);
    throw new Error("Error when getting a image description from Gemini.");
  }
}

export async function generateAltText(imageBuffer) {
    const prompt = "Generate a alt text for this following image";
  
    try {
      const image = {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/png",
        },
      };
      const res = await model.generateContent([prompt, image]);
      return res.response.text() || "Alt-text unavailable.";
    } catch (err) {
      console.error("Error when getting a image alt text:", err.message, err);
      throw new Error("Error when getting a image alt text from Gemini.");
    }
}
