// import {getData as getDataOfYBZC} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省医保支出.js';
// import { getData as getDataOfZRK } from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省总人口.js';
// import { getData as getDataOfWSRS } from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省卫生人数.js';
import {getData as getDataOfYBZC} from './各省医保支出.js';
import { getData as getDataOfZRK } from './各省总人口.js';
import { getData as getDataOfWSRS } from './各省卫生人数.js';

window.onload = eventHandle(2021);

var lists = document.getElementsByClassName('y');
for (var i = 0; i< 20; i++) {
    (() => {
        var y = lists[i].innerHTML;
        lists[i].addEventListener('click', () => {eventHandle(y);})
    })(i);
}

document.querySelector('#ybzc').addEventListener('click', () => {changeOption('ybzc')});
document.querySelector('#wsrs').addEventListener('click', () => {changeOption('wsrs')});
document.querySelector('#zrk').addEventListener('click', () => {changeOption('zrk')});

function eventHandle(y) {
    var option_now = document.getElementsByClassName('nowOptional')[0].id;
    if (option_now == 'ybzc') {
        getDataOfYBZC(y);
        changeYear(`y${y}`);
    } else if (option_now == 'zrk') {
        getDataOfZRK(y);
        changeYear(`y${y}`);
    } else if (option_now == 'wsrs') {
        getDataOfWSRS(y);
        changeYear(`y${y}`);
    }
}

function changeYear(id) {
    var class_now = document.getElementsByClassName('nowYear');
    class_now[0].classList.remove('nowYear');
    var add_class = document.getElementById(`${id}`);
    add_class.classList.add('nowYear');
}

function changeOption(id) {
    var class_now = document.getElementsByClassName('nowOptional');
    class_now[0].classList.remove('nowOptional');
    var add_class = document.getElementById(id);
    add_class.classList.add('nowOptional');
    var year_now = document.getElementsByClassName('nowYear')[0];
    eventHandle(year_now.innerHTML);
}