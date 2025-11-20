function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  let t = frameCount * 0.02;
  let bgHue = (200 + sin(t * 0.3) * 40 + 360) % 360;
  background(bgHue, 40, 30);

  let sunSize = 100 + sin(t * 1.2) * 10;
  fill(50, 80, 100);
  ellipse(500, 80, sunSize);

  fill(210, 40, 80);
  rect(80, 200 + sin(t) * 5, 60, 180);
  rect(160, 150 + cos(t * 0.7) * 5, 70, 230);
  rect(250, 220 + sin(t * 1.3) * 4, 80, 160);
  rect(360, 180 + cos(t * 0.9) * 4, 60, 200);

  fill(50, 10, 100, 80);
  for (let x = 90; x < 130; x += 20) { rect(x, 220, 10, 20); }
  rect(170, 180, 15, 25);
  rect(190, 210, 15, 25);
  rect(270, 240, 15, 20);

  let moveX = sin(t * 0.8) * 5;

  fill(350, 70, 90, 80);
  triangle(100 + moveX, 380, 200 + moveX, 250, 300 + moveX, 380);

  fill(140, 60, 80, 70);
  triangle(250 + moveX, 380, 380 + moveX, 230, 500 + moveX, 380);

  let c1 = color(0, 0, 100);
  let c2 = color(200, 20, 100);
  let mixed = lerpColor(c1, c2, (sin(t * 1.5) + 1) / 2);

  fill(mixed);
  ellipse(120 + sin(t * 1.1) * 10, 70, 30, 30);
  ellipse(200 + cos(t * 1.3) * 8, 40, 20, 20);
  ellipse(300 + sin(t * 0.7) * 12, 100, 15, 15);
  ellipse(400 + cos(t * 0.5) * 15, 60, 25, 25);

  let neonSize = 80 + sin(t * 2) * 12;
  fill(170, 80, 90, 60);
  ellipse(520, 300, neonSize);

  fill(320, 90, 90, 70);
  ellipse(470, 320, 40 + cos(t * 1.7) * 8);

  fill(0, 0, 100);
  textSize(16);
  textAlign(LEFT, TOP);
  text("공지윤(20231835)", 10, 10);
}
