function relativeLuminance(r, g, b) {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const sR = r <= 0.03928 ? r1 / 12.92 : Math.pow((r1 + 0.055) / 1.055, 2.4);
  const sG = g <= 0.03928 ? g1 / 12.92 : Math.pow((g1 + 0.055) / 1.055, 2.4);
  const sB = b <= 0.03928 ? b1 / 12.92 : Math.pow((b1 + 0.055) / 1.055, 2.4);
  return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
}

function luminance(a, b) {
  const l1 = Math.max(a, b);
  const l2 = Math.min(a, b);
  return (l1 + 0.05) / (l2 + 0.05);
}

function ratio(fg, bg) {
  if (fg[0] == bg[0] && fg[1] && bg[1] && fg[2] === bg[2]) {
    return 1;
  }
  return luminance(relativeLuminance(...fg), relativeLuminance(...bg));
}

module.exports = ratio;
