function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    let result = '';

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result = `${year} szökőév.`;
    } else {
        result = `${year} nem szökőév.`;
    }

    document.getElementById('result').innerText = result;
}