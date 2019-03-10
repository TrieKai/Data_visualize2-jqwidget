// 讀取資料
$.getJSON('http://210.69.115.155/json_link/com_data_month.aspx?area=A&sdate=1060101&edate=1061231', function(data) {
    
    console.log(data)
    // 資料處理
    var source = [];
    
    // 資料塞入json格式
    for (i in data){
        source.push({
            年月  : data[i].MDATE1.substr(0,3)+"年"+data[i].MDATE1.substr(3,4)+"月",
            已發路證案件數  : data[i].COUNT1 ,
            應提報竣工資料數  : data[i].COUNT2,
            未提報竣工資料數  : data[i].COUNT3,
            未提報竣工比率 : (data[i].COUNT3/data[i].COUNT2*100).toFixed(1)
        })
    }
    console.log(source)
    
    
    // 圖表設定
    var settings = {
        title: "每月應報俊未報俊數量統計",
        backgroundColor:'#FFAA33',
        crosshairsColor: '#00DD00',
        description: "",
        showLegend: true,
        enableAnimations: true,
        // 圖表padding
        padding: { left: 0, top: 5, right: 30, bottom: 5 },
        // 標題padding
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        //資料設定
        source: source,
        colorScheme: 'scheme16',
        //X軸座標設定
        xAxis:
            {   
                //X軸資料設定
                dataField: '年月',
                // unitInterval : 0.9,
                // 指定軸值是否與刻度線對齊
                valuesOnTicks: true,
                //自動調整大小
                axisSize: 'auto',
                labels: {

                    //  X軸label角度
                    // angle: 90,
                    //  X軸label偏移量
                    // offset: { x: 0, y: 38},
                    verticalAlignment:'center',
                    //  顯示標線
                    showGridLines: true,
                    //  自動調整大小
                    // size : 'auto'
                    //  自己定義label顯示樣式
                    // formatFunction: function (value) {
                        // return value + "月";
                    // }
                }                    
            },
        
        // Y軸設定
        seriesGroups:
            [
                {   
                    //圖表樣式
                    type: 'line',
                    // XY互換
                    // orientation : 'horizontal',
                    
                    valueAxis:
                    {
                        // flip: true,
                        visible: true,
                        <!-- 刻度  -->
                        // unitInterval: 0,
                        axisSize : 'auto',
                        // 最小值
                        minValue: 0,
                        <!--Y軸label-->
                        title: { text: '未申報比例(%)' },
                        position: 'right',
                    },
                    series:
                    [
                        {
                            dataField: '未提報竣工比率',
                            //圖例樣式
                            symbolType: 'square',
                            //  線條粗細
                            lineWidth: 5,
                            cellsformat : 'd',
                            //自定義label樣式
                            formatFunction: function (value) {
                                    if (isNaN(value))
                                        return value;
                                    return value + '%';
                            },
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#FEFEFE',
                                backgroundOpacity: 0.2,
                                borderColor: '#7FC4EF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 },
                                
                            }
                        },
                        // {
                            // dataField: '未提報竣工資料數',
                            // symbolType: 'square',
                             // 線條粗細
                            // lineWidth: 5,
                            // labels:
                            // {
                                // visible: true,
                                // backgroundColor: '#FEFEFE',
                                // backgroundOpacity: 0.2,
                                // borderColor: '#7FC4EF',
                                // borderOpacity: 0.7,
                                // padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            // }
                        // }
                    ]
                },
                {   
                    //圖表樣式
                    type: 'column',
                    // XY互換
                    // orientation : 'horizontal',
                    series:
                    [
                        {
                            dataField: '應提報竣工資料數',
                            symbolType: 'square',
                            //  線條粗細
                            lineWidth: 5,
                            labels:
                            {
                                
                                visible: true,
                                backgroundColor: '#FEFEFE',
                                backgroundOpacity: 0.2,
                                borderColor: '#7FC4EF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            },
                            // colorFunction: function (value) {
                                // return (value > 600) ? '#CC1133' : '#55CC55';
                            // }
                        },
                        {
                            dataField: '未提報竣工資料數',
                            symbolType: 'square',
                             // 線條粗細
                            lineWidth: 5,
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#FEFEFE',
                                backgroundOpacity: 0.2,
                                borderColor: '#7FC4EF',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            }
                        }
                    ]
                }
            ]
    };
    // 繪圖
    $('#chartContainer').jqxChart(settings);
    $('#chartContainer').jqxChart('update');
});
        
        
