let inputEl = document.querySelector('.num-input');
// getting the length elements
const toFeet = document.getElementById('to-feet');
const toMeter = document.getElementById('to-meter');

// getting the volume elements
const toGallon = document.getElementById('to-gallon');
const toLiter = document.getElementById('to-liter');

// getting the mass elements
const toPound = document.getElementById('to-pound');
const toKilo = document.getElementById('to-kilo');

inputEl.onchange = unitConverter;

function unitConverter(event) {
    // length converter
    let meterToFt = event.target.value * 3.28084;
    toFeet.textContent = `${event.target.value} meters = ${meterToFt.toFixed(3)} feet`;
    let ftToMeter = event.target.value / 3.28084;
    toMeter.textContent = `${event.target.value} feet = ${ftToMeter.toFixed(3)} meters`;

    // volume converter
    let ltrToGallon = event.target.value * 0.264172
    toGallon.textContent = `${event.target.value} liters = ${ltrToGallon.toFixed(3)} gallons`;
    let gallonToLtr = event.target.value / 0.264172;
    toLiter.textContent = `${event.target.value} liters = ${gallonToLtr.toFixed(3)} gallons`;

    // mass converter
    let kiloToPound = event.target.value * 2.20462;
    toPound.textContent = `${event.target.value} kilos = ${kiloToPound.toFixed(3)} pounds`;
    let poundToKilo = event.target.value / 2.20462;
    toKilo.textContent = `${event.target.value} pounds = ${poundToKilo.toFixed(3)} kilos`;
}