function getSouthAfricaColor(d: number, color: string[]) {
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
