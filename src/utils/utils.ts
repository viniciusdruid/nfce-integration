export function generateTicket() {
  const timestamp = Date.now().toString(); // Obtém o timestamp em milissegundos
  const randomDigits = Array.from({ length: 19 - timestamp.length }, () =>
    Math.floor(Math.random() * 10),
  ).join('');
  return timestamp + randomDigits;
}