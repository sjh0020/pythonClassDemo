import {getData as getData} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省医保支出.js';

document.querySelector('#y2021').onclick = getData(2021);

document.querySelector('#y2021').addEventListener('click', () => {show(2021)});
document.querySelector('#y2020').addEventListener('click', () => {show(2020)});
document.querySelector('#y2019').addEventListener('click', () => {show(2019)});
document.querySelector('#y2018').addEventListener('click', () => {show(2018)});
document.querySelector('#y2017').addEventListener('click', () => {show(2017)});
document.querySelector('#y2016').addEventListener('click', () => {show(2016)});
document.querySelector('#y2015').addEventListener('click', () => {show(2015)});
document.querySelector('#y2014').addEventListener('click', () => {show(2014)});
document.querySelector('#y2013').addEventListener('click', () => {show(2013)});
document.querySelector('#y2012').addEventListener('click', () => {show(2012)});
document.querySelector('#y2011').addEventListener('click', () => {show(2011)});

function show(y) {
    getData(y);
    var class_now = document.getElementsByClassName('now');
    class_now[0].classList.remove('now');
    var add_class = document.getElementById(`y${y}`);
    add_class.classList.add('now');
}