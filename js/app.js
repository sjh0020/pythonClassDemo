// import {getData as getDataOfYBZC} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/各省医保支出.js';
import {getData as getDataOfYBZC} from './各省医保支出.js';
import { getData as getDataOfZRK } from './各省总人口.js';
import { getData as getDataOfWSRS } from './各省医师数.js';

document.querySelector('#y2021').onclick = changeOption('zrk');

document.querySelector('#ybzc').addEventListener('click', () => {changeOption('ybzc')});
document.querySelector('#wsrs').addEventListener('click', () => {changeOption('wsrs')});
document.querySelector('#zrk').addEventListener('click', () => {changeOption('zrk')});

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
    var nowOptionId = id;
    if (nowOptionId == 'ybzc') {
        document.querySelector('#y2021').onclick = getDataOfYBZC(2021);
        changeYear('y2021')
        var lists = document.getElementsByClassName('y');
        for (var i = 0; i < lists.length; i++) {
            (function() {
                var id = lists[i].id;
                var y = lists[i].innerHTML;
                lists[i].addEventListener('click', () => {getDataOfYBZC(y);changeYear(id);});
            })(i);
        }
    };
    
    if (nowOptionId == 'zrk') {
        document.querySelector('#y2021').onclick = getDataOfZRK(2021);
        changeYear('y2021')
        var lists = document.getElementsByClassName('y');
        for (var i = 0; i < lists.length; i++) {
            (function() {
                var id = lists[i].id;
                var y = lists[i].innerHTML;
                lists[i].addEventListener('click', () => {getDataOfZRK(y);changeYear(id);});
            })(i);
        }
    };

    if (nowOptionId == 'wsrs') {
        document.querySelector('#y2021').onclick = getDataOfWSRS(2021);
        changeYear('y2021')
        var lists = document.getElementsByClassName('y');
        for (var i = 0; i < lists.length; i++) {
            (function() {
                var id = lists[i].id;
                var y = lists[i].innerHTML;
                lists[i].addEventListener('click', () => {getDataOfWSRS(y);changeYear(id);});
            })(i);
        }
    };
}