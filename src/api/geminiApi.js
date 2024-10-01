import axios from "axios";

// Replace with your actual Gemini API Key
const geminiApiKey = "AIzaSyC4K1cdCB2cfELd0McoYDLLlTS5-7Z7Ld4";

// Create an axios client with Gemini API headers
const geminiClient = axios.create({
  headers: {
    "x-goog-api-key": geminiApiKey,
    "Content-Type": "application/json",
  },
});

// Define the Gemini API endpoint
const geminiEndpoint =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

// Function to call the Gemini API and process the response
export const getGeminiResponse = async (text) => {
  try {
    const response = await geminiClient.post(geminiEndpoint, {
      contents: [
        {
          role: "user",
          parts: [{ text }],
        },
      ],
    });

    // Extract and clean up the response
    const responseText =
      response.data.candidates[0]?.content.parts[0]?.text.trim() || "No response";

    // Clean the response text by removing asterisks
    return responseText.replace(/\*/g, "").trim();
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    return "Sorry, something went wrong.";
  }
};
