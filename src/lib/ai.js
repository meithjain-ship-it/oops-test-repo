// Server helper for the fake demo app.
// FAKE demo key, on purpose. It does not work.
const apiKey = process.env.OPENAI_API_KEY;

export function headers() {
  return { Authorization: `Bearer ${apiKey}` };
}
