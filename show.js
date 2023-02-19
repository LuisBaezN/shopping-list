'use strict';

const tabla = document.querySelector('ul');
let prod = null;
let div = null;
let check = null;

new URLSearchParams(window.location.search).forEach((value, name) => {
    if (value != '') {
        div = document.createElement('div');
        div.classList.add('f-list');
        check = document.createElement('input');
        check.type = 'checkbox';
        check.required = true;
        prod = document.createElement('li');
        prod.append(`${name}: ${value}`);
        div.appendChild(check);
        div.appendChild(prod);
        tabla.append(div);
    }
})