export const transformUrlToTitle = (input: string): string => {
  const parts: string[] = input.split('/');

  const lastPart: string = parts[parts.length - 1];

  return lastPart
    .replace(/-/g, ' ')
    .replace(/\b\w/g, match => match.toUpperCase());
};
