/**
 * 
 * @param {*} y 年份
 * @param {*} filepath json文件相对于网页根目录的路径
 * @param {*} titletext 地图标题文本
 * @param {*} labeltextfront 每个悬浮框第二行冒号前的文本
 * @param {*} labeltextback 每个悬浮框第二行数字后的文本
 */

export function getData(y, option, titletext, labeltextfront, labeltextback) {
    $.getJSON('./json/all.json', data => {
        var json_data = data;
        var num = 2021 - y;
        var gd = json_data[option]['data'][18]['value'][num];
        showData(json_data, y, option, titletext, labeltextfront, labeltextback, gd, num);
    })
};

function showData(json_data, y, option,  titletext, labeltextfront, labeltextback, gd, n) {
    let data_list = [];
    for (var i = 0; i < 31; i++) {
        data_list[i] = json_data[option]['data'][i]['value'][n];
    }
    let data = json_data[option]['data'];
    for (var i = 0; i < 31; i++) {
        var value = json_data[option]['data'][i]['value'][n];
        data[i]['value'] = value;
    }
    let data_list_max = Math.max(...data_list);
    var map_Chart = echarts.init(document.getElementById('map'));
    var option = {
        title: {
            // text: y + '年各省总人口（万人）',
            text: y + titletext,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                let num;
                let showHtml = '';
                if (isNaN(params.value)) {
                    num = '0';
                } else {
                    num = params.value;
                }
                showHtml += `
                <span style="display: flex;">
                    ${'省份: ' + params.name + '<br>'}
                    ${labeltextfront + `: ` + num + labeltextback + `<br>`}
                    ${'vs 广东省: ' + gd + labeltextback}
                </span>
            `;
                return showHtml;
            }
        },

        dataRange: {
            x: 'left',
            y: 'bottom',
            min: 0,
            max: data_list_max,
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#d1e7fe', '#1989fa'],
                // color: ['#ffd4bb', '#ff5e00'],
            }
        },
        series: [{
            name: '数据',
            type: 'map',
            mapType: 'china',
            roam: false,
            selectedMode: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: 'black'
                        }
                    }
                },
                emphasis: {
                    areaColor: '#95ec69',
                    label: {
                        show: true
                    }
                }
            },
            data: data
        }]
    };
    map_Chart.setOption(option);
}
