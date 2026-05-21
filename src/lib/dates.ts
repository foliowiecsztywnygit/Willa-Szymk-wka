export function isValidIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function compareIsoDates(a: string, b: string) {
  return new Date(a).getTime() - new Date(b).getTime();
}

