// Server helper for the fake demo app.
// FAKE demo key, on purpose. It does not work.
const apiKey = "sk-proj-FAKEdemoKEY1234567890abcdefFAKE";

export function headers() {
  return { Authorization: `Bearer ${apiKey}` };
}
