


const container = document.querySelector('.container')
const range = document.querySelector('.slider')
const rangeLabel = document.querySelector('#slider-label')

let counter = 0;


// Function to create the grid
function createGrid(size){
    for(let i=0; i < size * size; i++){
        counter++;
        if(counter === size){
            createPixel(size);
            counter = 0;
        }
    }
}

function createPixel(size){
    const row = document.createElement('div')
    row.className = 'row'
    for(let j=0; j < size; j++){
        const el = document.createElement('div')
        el.className = 'pixel'
        el.onmouseover = (e) => {
            e.target.style.background = 'black'
        }
        el.onmouseout = (e) => {
            e.target.style.background = 'black'
        }
        row.appendChild(el)
    }
    container.appendChild(row)
}


// Function that removes the grid to set up the creation for a new one
function removeRow(size){
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove();
    })
}

// Function that resets the sketch pad on click
function resetPad(){
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        const pixels = row.querySelectorAll('.pixel')
        pixels.forEach(pixel => {
            pixel.style.background = 'aliceblue'
        })
    })
}

let rangeValue = parseInt(range.value);
createGrid(rangeValue);

range.oninput = (e) => {
    rangeValue = parseInt(e.target.value)
    removeRow(rangeValue);
    createGrid(rangeValue);
    rangeLabel.textContent = `${rangeValue}x${rangeValue}`;
}


