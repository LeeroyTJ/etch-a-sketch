document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('#grid-container');

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        gridContainer.appendChild(cell);

        cell.addEventListener('mouseenter', function () {
            cell.style.backgroundColor = getRandomColor();
        });
    }
});

const btn = document.createElement('button');
btn.className = 'btn';
btn.textContent = 'Customize Grid';
btn.style.marginLeft = 'auto';
btn.style.marginRight = 'auto';


const firstChild = document.body.firstElementChild;

document.body.insertBefore(btn, firstChild);

btn.addEventListener('click', function() {
    let input = prompt('Enter number of squares per side:');
    let size = parseInt(input);
    size = Math.min(size, 100);
    size = Math.max(size, 1);
    let totalCells = size * size;
    let cellWidth = 480 / size;

    const gridContainer = document.querySelector('#grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellWidth}px`;
        gridContainer.appendChild(cell);
    
        cell.addEventListener('mouseenter', function () {
            cell.style.backgroundColor = getRandomColor();
        });
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}