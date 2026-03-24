function hexToRgb(hex: string) {
  let r = 0, g = 0, b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function generateColorPalette(baseHex: string) {
  const baseRgb = hexToRgb(baseHex);
  const palette: { [key: string]: string } = {};
  const shades: { [key: string]: number } = {
    '50': 0.9,
    '100': 0.75,
    '200': 0.5,
    '300': 0.25,
    '400': 0.1,
    '500': 0,
    '600': -0.1,
    '700': -0.25,
    '800': -0.5,
    '900': -0.75,
    '950': -0.9
  };

  for (const shade in shades) {
    const factor = shades[shade];
    let r: number, g: number, b: number;

    if (factor > 0) {
      // Lighter shades
      r = baseRgb.r + (255 - baseRgb.r) * factor;
      g = baseRgb.g + (255 - baseRgb.g) * factor;
      b = baseRgb.b + (255 - baseRgb.b) * factor;
    } else {
      // Darker shades
      r = baseRgb.r + baseRgb.r * factor;
      g = baseRgb.g + baseRgb.g * factor;
      b = baseRgb.b + baseRgb.b * factor;
    }

    palette[shade] = rgbToHex(Math.round(r), Math.round(g), Math.round(b));
  }
  palette['500'] = baseHex;

  return palette;
}
