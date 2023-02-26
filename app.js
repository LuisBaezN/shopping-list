'use strict';

//////////////////////////// Functions ////////////////////////////

/**
 * Shows all the items of the shop list
 */
function start(){
    let lista = document.querySelector('ul');
    let limit = Object.keys(data).length;
    let item = null;
    let sect = null;
    let cuad = null;
    let cant = null;
    
    for (let i = 0; i < limit; i++) {
        item = document.createElement('li');
        sect = document.createElement('div');

        sect.classList.add('fila');

        for (let j = 0; j < 3; j++) {
            cuad = document.createElement('div');
            switch (j) {
                case 0:
                    cuad.classList.add('columna-p');
                    cuad.innerText = `${data[`${i}`].name}`;
                    sect.appendChild(cuad);
                    break;
                case 1:
                    cuad.classList.add('columna');
                    if (data[`${i}`].quantity > 1) {
                        cuad.innerText = `${data[`${i}`].quantity} ${data[`${i}`].metricM}`;
                    } else {
                        cuad.innerText = `${data[`${i}`].quantity} ${data[`${i}`].metricS}`;
                    }
                    sect.appendChild(cuad);
                    break;
                case 2:
                    cuad.classList.add('columna');
                    cant = document.createElement('input');
                    if (data[i].name === 'Especias') {
                        cant.type = 'text';
                    } else {
                        cant.type = 'number';
                    }
                    cant.name = `${data[i]['name']}`;
                    cant.id = `${i}`;
                    cuad.appendChild(cant);
                    sect.appendChild(cuad);
                    break;
                default:
                    console.log('> Control row error')
            }
        }
        item.appendChild(sect);
        lista.appendChild(item);
    }
}

//////////////////////////// Main ////////////////////////////
console.log("> Running app...")

let data = fetch('db.json')
    .then((res, req) => res.json())
    .then(d => {
        data = d['products'];
        start();
    });