$.getJSON('https://cdn.jsdelivr.net/gh/sjh0020/pythonClassDemo@master/json/21各省城镇基本医保基金支出.json', data=>{
    const data_list = data;
    console.log(data_list)
    let new_data_list = data_list.map((item, index) => {
        return item.value
    })
    let data_list_max = Math.max(...new_data_list);
    var map_Chart = echarts.init(document.getElementById('map'));
    option = {
        title: {
            text: '21各省城镇基本医保基金支出',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                let num
                let showHtml = ''
                if (isNaN(params.value)) {
                    num = '0'
                } else {
                    num = params.value
                }
                showHtml += `
                    <span style="display: flex;">
                        ${'省份'}：${params.name}</br>
                        ${'支出'}：${num}
                    </span>
                `
                return showHtml
  
            }
        },
  
        dataRange: {
            x: 'left',
            y: 'bottom',
            min: 0,
            max: data_list_max,
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            inRange: {
                color: ['#d1e7fe', '#1989fa'],
  
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
    map_Chart.setOption(option)
})