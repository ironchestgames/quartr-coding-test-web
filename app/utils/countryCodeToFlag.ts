export const countryCodeToFlag = (code: string): string => {
  if (code.length !== 2) return code; // fallback if not 2 letters

  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};
