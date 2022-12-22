// import {getData} from 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/js/getdata.js';
import { getData } from './getdata.js';

// 页面加载的时候加载一次2021年的地图
window.onload = eventHandler(2021);

// 使用for循环给每个年份按钮添加事件监听器(EventListener), 监听click事件并调用eventHandler函数, 传入对应年份作为参数
var lists = document.getElementsByClassName('y'); // 获取有'y'属性的标签
for (var i = 0; i< 20; i++) {
    (() => {
        var y = lists[i].innerHTML;
        lists[i].addEventListener('click', () => {eventHandler(y);})
    })(i);
}

// 使用for循环给上面的选项卡按钮添加事件监听器(EventListener), 监听click事件并调用changeOption函数, 并传入对应选项名作为参数
var option_lists = ['ybzc', 'wsrs', 'zrk', 'csl', 'wsjg', 'ysrs']; // 定义一个写有所有选项的列表(Array)
for (var i = 0; i < option_lists.length; i++) {
    (() => {
        var btn_option = document.getElementById(option_lists[i]);
        btn_option.addEventListener('click', () => {changeOption(btn_option.id)});
    })(i);
}

// 用于处理监听事件, 包括请求JSON数据和变更年份按钮css样式。通过获取当前选项, 请求对应年份数据
// getData函数为外部js函数通过最开始的import才可调用, 其中主要是Ajax动态请求json文件和渲染地图的各项参数
// changeYear函数即为改变年份按钮样式的函数
function eventHandler(y) {
    var option_now = document.getElementsByClassName('nowOptional')[0].id; // 获取当前选项id, 用作后面判断
    if (option_now == 'ybzc') {
        getData(y, 2, '年各省城基镇本医保基金支出（万元）', '支出', '万元');
        changeYear(`y${y}`);
    } else if (option_now == 'zrk') {
        getData(y, 0, '年各省总人口（万人）', '总人口', '万');
        changeYear(`y${y}`);
    } else if (option_now == 'wsrs') {
        getData(y, 1, '年各省卫生人员数量（万人）', '卫生人员数量', '万');
        changeYear(`y${y}`);
    } else if (option_now == 'csl') {
        getData(y, 3, '年各省人口出生率（‰）', '出生率', '‰');
        changeYear(`y${y}`);
    } else if (option_now == 'wsjg') {
        getData(y, 4, '年各省卫生机构数量（个）', '机构数', '个');
        changeYear(`y${y}`);
    } else if (option_now == 'ysrs') {
        getData(y, 5, '年各省职业医师人数（万）', '职业医师人数', '万');
        changeYear(`y${y}`);
    }
};

/* 
先移除现有标签中有nowOptional属性的,
并且清空对背景色的设置,
然后在对应点击的按钮所在标签添加nowYear属性
设置选中年份的点线颜色
 */
function changeYear(id) {
    var class_now = document.getElementsByClassName('nowYear');
    var nth_child = 2021 - Number(class_now[0].innerHTML); // 计算当前年份是第几个年份标签
    document.getElementsByClassName('dot')[nth_child].style.backgroundColor = null;
    document.getElementsByClassName('center')[nth_child].style.backgroundColor = null;
    class_now[0].classList.remove('nowYear');
    var add_class = document.getElementById(`${id}`);
    add_class.classList.add('nowYear');
    nth_child = 2021 - Number(class_now[0].innerHTML);
    document.getElementsByClassName('center')[nth_child].style.backgroundColor = '#005eff';
    document.getElementsByClassName('dot')[nth_child].style.backgroundColor = '#005eff';
};

/* 
和changeYear函数差不多, 先移除现有标签中有nowOptional属性的,
再在对应点击的选项的标签中添加nowOptional属性,
最后调用eventHandler函数重新获取对应年份JSON数据
*/
function changeOption(id) {
    var class_now = document.getElementsByClassName('nowOptional');
    class_now[0].classList.remove('nowOptional');
    var add_class = document.getElementById(id);
    add_class.classList.add('nowOptional');
    var year_now = document.getElementsByClassName('nowYear')[0];
    eventHandler(year_now.innerHTML);
};