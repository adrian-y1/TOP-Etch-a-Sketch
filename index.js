


const container = document.querySelector('.container')
const range = document.querySelector('.slider')
const rangeLabel = document.querySelector('#slider-label')

// Function to create the grid
let counter = 0;
function createGrid(size){
    for(let i=0; i < size * size; i++){
        counter++;
        if(counter === size){
            const elCon = document.createElement('div')
            elCon.className = 'row'
            for(let j=0; j < size; j++){
                const el = document.createElement('div')
                el.className = 'pixel'
                el.innerHTML = j;
                el.onmouseover = (e) => {
                    e.target.style.background = 'black'
                }
                el.onmouseout = (e) => {
                    e.target.style.background = 'black'
                }
                elCon.appendChild(el)
            }
            container.appendChild(elCon)
            counter = 0;
        }
    }
}


function removeRow(size){
    const rows = container.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove();
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


