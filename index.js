


const container = document.querySelector('.container')

let counter = 0;


for(let i=0; i < 256; i++){
    counter++;
    if(counter === 16){
        const elCon = document.createElement('div')
        elCon.className = 'row'
        for(let j=0; j < 16; j++){
            const el = document.createElement('div')
            el.className = 'pixel'
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