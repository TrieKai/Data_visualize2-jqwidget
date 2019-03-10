
$(document).ready(function () {
        // 資料url
        $.getJSON('http://210.69.115.155/json_link/case_count_dist.aspx?area=A&sdate=1050101&edate=1051231', function(data) {
            //data is the JSON string
            console.log(data)
            var source = [];
            // console.log(data[0].DIGNO_COUNT1)
            for (i in data){
                source.push({
                    DIST_NAME : data[i].DIST_NAME,
                    VAR_COUNT1 : data[i].VAR_COUNT1,
                    VAR_COUNT2 : data[i].VAR_COUNT2,
                    DIGNO_COUNT1 : data[i].DIGNO_COUNT1,
                    DIGNO_COUNT2 : data[i].DIGNO_COUNT2
                })
            }
            
            console.log(source)
            var settings = {
                title: "各行政區審核數量及合法許可證數量統計(不含市養道)",
                description: "",
                showLegend: true,
                enableAnimations: true,
                // 上下左右距離
                padding: { left: 0, top: 5, right: 0, bottom: 5 },
                // titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: source,
                xAxis:
                    {
                        dataField: 'DIST_NAME',
                        // position: 'top',
                        <!-- 指定軸值是否與刻度線對齊 -->
                        valuesOnTicks: true,
                        // tickMarksColor: '#888888',
                        axisSize: 'auto',
                        labels: {

                            <!-- label角度 -->
                            // angle: 90,
                            // offset: { x: 0, y: 38},
                            horizontalAlignment:'left',
                            // axisSize : 'auto',
                             
                            verticalAlignment:'center',
                            // 顯示標線
                            showGridLines: true,
                            // 自動調整大小
                            // size : 'auto'
                            
                        }                    
                    },
                colorScheme: 'scheme17',
                // columnSeriesOverlap: false,
                seriesGroups:
                    [
                        {
                            type: 'column',
                            // XY切換
                            // orientation : 'horizontal',
                            
                            valueAxis:
                            {
                                // flip: true,
                                visible: true,
                                <!-- 刻度  -->
                                unitInterval: 200,
                                axisSize : 'auto',
                                // 最小值
                                minValue: 60,
                                <!--Y軸label-->
                                title: { text: '未申報比例(%)' },
                                
                            },
                            series: [
                                <!--X軸分類data-->
                                
                                { dataField: 'VAR_COUNT1 ', 
                                displayText: '審核案件數量',
                                labels:{
                                    visible: true,
                                    // 長條圖的位置
                                    // verticalAlignment: 'top',
                                    <!-- 'class': fnLabelsClass, -->
                                    backgroundColor: 'white',
                                    padding: {left: 5, right: 5, top: 1, bottom: 1},
                                    backgroundOpacity: 0.7,
                                    borderOpacity: 0.7,
                                    autoHide: false,
									// formatFunction: function (value) {
										// return value + "DIST_NAME";
									// }
                                }},
                                { dataField: 'DIGNO_COUNT1', displayText: '許可證核發案件數' ,labels:{
                                    visible: true,
                                    <!-- 'class': fnLabelsClass, -->
                                    backgroundColor: 'white',
                                    padding: {left: 5, right: 5, top: 1, bottom: 1},
                                    <!-- borderColor: fnLabelsBorderColor, -->
                                    backgroundOpacity: 0.7,
                                    borderOpacity: 0.7
                                }},
                            ]
                        }
                    ]
            };
            
            $('#chartContainer').jqxChart(settings);
            
        });
    });
   
function getExportServer() {
    return 'https://www.jqwidgets.com/export_server/export.php';
}