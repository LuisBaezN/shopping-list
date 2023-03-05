'use strict';

const tabla = document.querySelector('ul');
let prod = null;
let div = null;
let check = null;

/**
 * Shows the items needed
 */
function start() {
    new URLSearchParams(window.location.search).forEach((value, name) => {
        if (value != '') {
            let cont = 0;
            let limit = Object.keys(data).length;

            div = document.createElement('div');
            div.classList.add('f-list');
            check = document.createElement('input');
            check.type = 'checkbox';
            check.required = true;
            prod = document.createElement('li');
            for (cont; cont < limit; cont++) {
                if (data[cont].name === name) {
                    if (value > 1) {
                        prod.append(`${name}: ${value} ${data[cont].metricM}`);
                        break;
                    } else {
                        prod.append(`${name}: ${value} ${data[cont].metricS}`);
                        break;
                    }
                }
            }
            div.appendChild(check);
            div.appendChild(prod);
            tabla.append(div);
        }
    })
}

let data = fetch('db.json')
    .then((res, req) => res.json())
    .then(d => {
        data = d['products'];
        start();
    });