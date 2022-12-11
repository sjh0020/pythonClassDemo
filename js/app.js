// import {getData} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/getdata.js';
import { getData } from './getdata.js';

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
        getData(y, './json/各省城镇基本医保基金支出/', '年各省城基镇本医保基金支出（万元）', '支出', '万元');
        changeYear(`y${y}`);
    } else if (option_now == 'zrk') {
        getData(y, './json/各省总人口/', '年各省总人口（万人）', '总人口', '万');
        changeYear(`y${y}`);
    } else if (option_now == 'wsrs') {
        getData(y, './json/各省卫生人员数/', '年各省卫生人员数量（万人）', '卫生人员数量', '万');
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