let t = parseFloat(document.querySelector('#temp').textContent);
let s = parseFloat(document.querySelector('#speed').textContent);
let windchill = ''

console.log("connected to windchill.js")
console.log(`placeholder temp = ${t}`)
console.log(`placeholder speed = ${s}`)

if (t <= 50 && s > 3) {
    windchill = windChill(t, s);
    console.log(`calculated windchill = ${windchill}`)
    windchill = `${windchill}&#176;F`;
} else {
    windchill = 'N/A';
}

document.querySelector('#chill').innerHTML = windchill;

function windChill(temp, speed) {
    return parseFloat(35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * temp * (Math.pow(speed, 0.16)))).toFixed(2)
}