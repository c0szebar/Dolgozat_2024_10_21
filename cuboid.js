function cuboid(a, b, c) {
    
    const a = 10.4;
    const b = 13.5;
    const c = 8.2;

    const surfaceArea = 2 * (a * b + b * c + c * a);
    const volume = a * b * c;

    document.getElementById('surfaceArea').textContent = surfaceArea.toFixed(2);
    document.getElementById('volume').textContent = volume.toFixed(2);
    }