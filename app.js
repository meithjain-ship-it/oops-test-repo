// FAKE demo key, on purpose. It does not work.
const OPENAI_API_KEY = "sk-proj-FAKEdemoKEY1234567890abcdefFAKE";

async function askAI(question) {
  // Pretend call. A real app would send OPENAI_API_KEY from the browser, which is the mistake OOPS catches.
  return { question, usedKey: OPENAI_API_KEY.slice(0, 6) };
}
