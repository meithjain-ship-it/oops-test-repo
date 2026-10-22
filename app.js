// FAKE demo key, on purpose. It does not work.
const OPENAI_API_KEY = "" /* OOPS: move this call to your server and read the key from the environment variable OPENAI_API_KEY. Never put a key in browser code. */;

async function askAI(question) {
  // Pretend call. A real app would send OPENAI_API_KEY from the browser, which is the mistake OOPS catches.
  return { question, usedKey: OPENAI_API_KEY.slice(0, 6) };
}
