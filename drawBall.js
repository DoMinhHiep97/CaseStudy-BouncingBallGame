function drawBall(instead) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(instead.x, instead.y, instead.r, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
}
