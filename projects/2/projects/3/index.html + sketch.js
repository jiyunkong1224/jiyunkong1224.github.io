let blinkTimer = 0;
let isBlinking = false;
let blinkDuration = 10;

function setup() {
  createCanvas(600, 400);
  noStroke();
  frameRate(30);
}

function draw() {
  background(245, 230, 255);

  // 머리카락
  fill(30);
  rect(180, 100, 240, 280, 120, 120, 60, 60);

  // 얼굴
  fill(255, 220, 200);
  ellipse(300, 200, 180, 220);

  // 윗머리
  fill(30);
  arc(300, 150, 190, 160, PI, TWO_PI);

  // 눈 위치 (마우스 따라 움직임)
  let eyeX = constrain(mouseX, 250, 350);
  let eyeY = constrain(mouseY, 160, 220);
  let offsetX = map(eyeX, 250, 350, -6, 6);
  let offsetY = map(eyeY, 160, 220, -3, 3);

  // 깜빡임
  blinkTimer++;
  if (blinkTimer > 180) isBlinking = true;
  if (isBlinking && blinkTimer > 180 + blinkDuration) {
    isBlinking = false;
    blinkTimer = 0;
  }

  fill(255);
  if (!isBlinking) {
    ellipse(260, 190, 40, 28);
    ellipse(340, 190, 40, 28);
    fill(0);
    ellipse(260 + offsetX, 190 + offsetY, 15, 15);
    ellipse(340 + offsetX, 190 + offsetY, 15, 15);
  } else {
    stroke(0);
    strokeWeight(3);
    line(240, 190, 280, 190);
    line(320, 190, 360, 190);
    noStroke();
  }

  // 코
  fill(230, 150, 130);
  triangle(295, 215, 305, 215, 300, 235);

  // 입
  noFill();
  stroke(180, 80, 120);
  strokeWeight(4);
  arc(300, 255, 70, 35, 0, PI);
  noStroke();

  // 귀 & 귀걸이
  fill(255, 180, 200);
  ellipse(215, 220, 18, 18);
  ellipse(385, 220, 18, 18);

  // 이름
  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);
  text('공지윤, 20231835', 10, 10);
}
