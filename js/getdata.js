export function getData(y, filepath, titletext, labeltextfront, labeltextback) {
    // var filename = 'https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/json/各省城镇基本医保基金支出/' + y + '.json'
    // var filename = './json/各省总人口/' + y + '.json'
    var filename = filepath + y + '.json';
    $.getJSON(filename, data => {
        showData(data, y, titletext, labeltextfront, labeltextback);
    });
}

function showData(data, y, titletext, labeltextfront, labeltextback) {
    const data_list = data;
    let new_data_list = data_list.map((item, index) => {
        return item.value;
    });
    let data_list_max = Math.max(...new_data_list);
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
                    ${'省份'}：${params.name}</br>
                    <!-- ${'总人口'}：${num}${'万'} -->
                    ${labeltextfront}：${num}${labeltextback}
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
            data: data_list
        }]
    };
    map_Chart.setOption(option);
}
