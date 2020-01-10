const p = document.querySelector('p');
const colorLeft = document.querySelector('.input-left');
const colorRight = document.querySelector('.input-right');
const bodyStyle = document.body.style;

window.onload = () => {
    bodyStyle.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let setGradient = () => {
    bodyStyle.background = `linear-gradient(to right, ${colorLeft.value}, ${colorRight.value})`;
    p.textContent = bodyStyle.background;
};