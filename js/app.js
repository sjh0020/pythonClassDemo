// import {getData as getDataOfYBZC} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省医保支出.js';
// import { getData as getDataOfZRK } from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省总人口.js';
// import { getData as getDataOfWSRS } from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省卫生人数.js';
import {getData as getDataOfYBZC} from './各省医保支出.js';
import { getData as getDataOfZRK } from './各省总人口.js';
import { getData as getDataOfWSRS } from './各省卫生人数.js';

window.onload = eventHandle(2021);

document.getElementById('y2021').addEventListener('click', () => {eventHandle(2021);});
document.getElementById('y2020').addEventListener('click', () => {eventHandle(2020);});
document.getElementById('y2019').addEventListener('click', () => {eventHandle(2019);});
document.getElementById('y2018').addEventListener('click', () => {eventHandle(2018);});
document.getElementById('y2017').addEventListener('click', () => {eventHandle(2017);});
document.getElementById('y2016').addEventListener('click', () => {eventHandle(2016);});
document.getElementById('y2015').addEventListener('click', () => {eventHandle(2015);});
document.getElementById('y2014').addEventListener('click', () => {eventHandle(2014);});
document.getElementById('y2013').addEventListener('click', () => {eventHandle(2013);});
document.getElementById('y2012').addEventListener('click', () => {eventHandle(2012);});
document.getElementById('y2011').addEventListener('click', () => {eventHandle(2011);});
document.getElementById('y2010').addEventListener('click', () => {eventHandle(2010);});
document.getElementById('y2009').addEventListener('click', () => {eventHandle(2009);});
document.getElementById('y2008').addEventListener('click', () => {eventHandle(2008);});
document.getElementById('y2007').addEventListener('click', () => {eventHandle(2007);});
document.getElementById('y2006').addEventListener('click', () => {eventHandle(2006);});
document.getElementById('y2005').addEventListener('click', () => {eventHandle(2005);});
document.getElementById('y2004').addEventListener('click', () => {eventHandle(2004);});
document.getElementById('y2003').addEventListener('click', () => {eventHandle(2003);});
document.getElementById('y2002').addEventListener('click', () => {eventHandle(2002);});

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