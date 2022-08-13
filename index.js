


const container = document.querySelector('.container')
const range = document.querySelector('.slider')
const rangeLabel = document.querySelector('#slider-label')
const colorWheel = document.getElementById('color-wheel')
const eraser = document.getElementById('eraser')
const pen = document.getElementById('pen')
const resetPadEl = document.querySelector('.reset-pad')

let mouse = false;




colorWheel.onclick = e => {
    colorWheel.classList.add('selected')
    pen.classList.remove('selected');
    resetPadEl.classList.remove('selected')
    eraser.classList.remove('selected')
}

eraser.onclick = e => {
    e.target.classList.add('selected');
    pen.classList.remove('selected');
    resetPadEl.classList.remove('selected')
    colorWheel.classList.remove('selected')
    erase();
}

pen.onclick = event => {
    event.target.classList.add('selected');
    eraser.classList.remove('selected');
    resetPadEl.classList.remove('selected')
    colorWheel.classList.remove('selected')
    draw();
}

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

// Creates the row and every div inside that row
function createPixel(size){
    const row = document.createElement('div')
    row.className = 'row'
    for(let j=0; j < size; j++){
        const el = document.createElement('div')
        el.className = 'pixel'
        changeColor(el);
        row.appendChild(el)
    }
    container.appendChild(row)
}

// Changes the color of the divs based on user's input, black is default
function changeColor(element){
    let bgColor = colorWheel.value
    colorWheel.addEventListener('input', (event) => {
        bgColor = event.target.value
    })
    element.onmousedown = (e) => {
        e.preventDefault();
        mouse = true;
    }
    element.onmouseup = (e) => {
        e.preventDefault();
        mouse = false;
    }
    element.onmousemove = (e) => {
        if(mouse){
            e.target.style.background = `${bgColor}`
        }
    }
}

// draws onto the screen, similar to changeColor()
function draw(){
    let bgColor = colorWheel.value
    colorWheel.addEventListener('input', (event) => {
        bgColor = event.target.value
    })
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        const pixels = row.querySelectorAll('.pixel')
        pixels.forEach(pixel => {
            pixel.onmousedown = (e) => {
                e.preventDefault();
                mouse = true;
            }
            pixel.onmouseup = (e) => {
                e.preventDefault();
                mouse = false;
            }
            pixel.onmousemove = (e) => {
                if(mouse){
                    e.target.style.background = `${bgColor}`
                }
            }
        })
    })
}

// Erases/changes pixel colors to white
function erase(){
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        const pixels = row.querySelectorAll('.pixel')
        pixels.forEach(pixel => {
            pixel.onmousedown = (e) => {
                e.preventDefault();
                mouse = true;
            }
            pixel.onmouseup = (e) => {
                e.preventDefault();
                mouse = false;
            }
            pixel.onmousemove = (e) => {
                if(mouse){
                    e.target.style.background = `white`
                }
            }
        })
    })
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
    resetPadEl.classList.toggle('selected');
    eraser.classList.remove('selected');
    pen.classList.remove('selected');
    colorWheel.classList.remove('selected')
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        const pixels = row.querySelectorAll('.pixel')
        pixels.forEach(pixel => {
            pixel.style.background = 'white'
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


