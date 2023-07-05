import {data_but} from "./data.js"
 data_but.map((item) => {
	section_button.innerHTML += `<div id="${item.id}" class="box">
                <button>${item.name}</button>
               </div>`;
});

import{data_con} from './data.js'
data_con.map((item) => {
	container_card.innerHTML += `
            <div id='${item.id}' class="card">
                <img src="${item.img}" alt="">
                <p>${item.name}</p>
            </div>`;
});
import{data_fig} from './data.js'
data_fig.map((item) => {
	figure.innerHTML += `
        <div id="${item.id}" class="figure_card">
        <div class="figure_icon">
            <img src="${item.icon}" alt="">
        </div>
        <div class="figure_text">
            <h2>${item.title}</h2>
            <p>${item.paragraph}</p>
            <div class="left_icon">
                <p>${item.dect}</p>
                <img src="${item.left_icon}" alt="">
            </div>
        </div>
        </div>`;
});
import{data_ol} from '../data.'
data_ol.map((item) => {
	ol.innerHTML += `
        <div id="${item.id}" class="ol_card">
        <div class="ol_icon">
            <img src="${item.icon}" alt="">
        </div>
        <div class="ol_text">
            <h2>${item.title}</h2>
            <p>${item.paragraph}</p>
            <div class="oli_icon">
                <p>${item.dect}</p>
                <img src="${item.left_icon}" alt="">
            </div>
        </div>
        </div>`;
});