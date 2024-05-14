interface RGB {
  r: number;
  g: number;
  b: number;
}
export const colorScheme = ["#8C684E", "#E58C4C", "#8E562C", "#CC8F63", "#D49F78"]; // Example colors
// export const colorScheme = ["#6B240C", "#994D1C", "#E48F45", "#CC8F63", "#D49F78"]; // Example colors

export function isColorTooSimilar(color1: string, color2: string) {
  if (!color1 || !color2) return false;
  const rgb1: RGB = hexToRgb(color1)!;
  const rgb2: RGB = hexToRgb(color2)!;
  const threshold = 20; // Adjust as needed
  const difference = Math.sqrt((rgb1.r - rgb2.r) ** 2 + (rgb1.g - rgb2.g) ** 2 + (rgb1.b - rgb2.b) ** 2);
  return difference < threshold;
}
// Function to convert hex color to RGB
export function hexToRgb(hex: string): RGB | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
