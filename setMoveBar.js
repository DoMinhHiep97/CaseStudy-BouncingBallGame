function doKeyDown(e) {
    if (e.keyCode === 37) {
        if (bar.x - dxBar > 0)
            bar.x -= dxBar;
    } else if (e.keyCode === 39) {
        if (bar.x + barImg.width < canvas.width)
            bar.x += dxBar;
    }
}