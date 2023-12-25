function getSouthAfricaColor(d: number, color: string[]) {
  if (d > 90) return color[9];
  if (d > 80) return color[8];
  if (d > 70) return color[7];
  if (d > 60) return color[6];
  if (d > 50) return color[5];
  if (d > 40) return color[4];
  if (d > 30) return color[3];
  if (d > 20) return color[2];
  if (d > 10) return color[1];
  if (d > 0) return color[0];
  return 'rgba(0,0,0,0)';
}

function getSouthEastAsiaColor(d: number, color: string[]) {
  if (d > 40) return color[4];
  if (d > 30) return color[3];
  if (d > 20) return color[2];
  if (d > 10) return color[1];
  if (d > 0) return color[0];
  return 'rgba(0,0,0,0)';
}

export { getSouthAfricaColor, getSouthEastAsiaColor };
