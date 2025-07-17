var c = document.getElementById("canv");
var $ = c.getContext("2d");

c.width = 36;
c.height = 36;

var col = function (x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1, 1);
};

// Your 3 main colors
var color1 = { r: 61, g: 176, b: 160 }; // #3DB0A0
var color2 = { r: 212, g: 93, b: 81 }; // #D45D51
var color3 = { r: 255, g: 160, b: 87 }; // #FFA057

// Lerp helper
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Main wave gradient function
function getColorComponent(x, y, t, c1, c2, c3) {
  // wave factors
  let wave1 = Math.sin((x + t * 10) / 6) * Math.cos((y + t * 10) / 6);
  let wave2 = Math.sin((x - y + t * 8) / 8);

  let f = (wave1 + 1) / 2; // Normalize to 0-1
  let f2 = (wave2 + 1) / 2;

  let r = lerp(lerp(c1.r, c2.r, f), c3.r, f2);
  let g = lerp(lerp(c1.g, c2.g, f), c3.g, f2);
  let b = lerp(lerp(c1.b, c2.b, f), c3.b, f2);

  return { r: Math.floor(r), g: Math.floor(g), b: Math.floor(b) };
}

var t = 0;

var run = function () {
  for (let x = 0; x <= 35; x++) {
    for (let y = 0; y <= 35; y++) {
      let color = getColorComponent(x, y, t, color1, color2, color3);
      col(x, y, color.r, color.g, color.b);
    }
  }
  t += 0.014;
  requestAnimationFrame(run);
};

run();
