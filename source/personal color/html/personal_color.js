const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".color-selector");

let color = "#ff0000";
let sticker;

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
  video.play();
});

video.addEventListener("play", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  // png 스티커 이미지 로드
  sticker = new Image();
  sticker.src = "personal.png";
  
  
  setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    drawSticker();
  }, 1000 / 30);
});

function drawSticker() {
  // png 스티커 이미지 그리기
  ctx.drawImage(sticker, 100, 100, 100, 100);
  
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

colors.forEach((c) => {
  c.addEventListener("click", () => {
    color = c.style.backgroundColor;
  });
});


navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
  
  sticker = new Image();
  sticker.src = "personal.png";
  sticker.onload = function() {
    video.addEventListener("play", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        drawSticker();
      }, 1000 / 30);
    });
  };
  
  function drawSticker() {
    // png 스티커 이미지 그리기
    ctx.drawImage(sticker, 100, 100, 100, 100);
    
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
  