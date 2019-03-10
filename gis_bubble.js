
$(document).ready(function () {
        
        // 取得今年年分
        var Today=new Date();
        var Today_year = Today.getFullYear()-1911;
        var url = 'http://210.69.115.155/json_link/case_count_dist.aspx?area=A&sdate='+Today_year+'0101&edate='+Today_year+'1231'
        console.log(url)
        // 資料url
        $.getJSON(url, function(data) {
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
                title: "各行政區審核案件數量",
                description: "(the size of the circles represents relative YoY growth)",
                enableAnimations: true,
                showLegend: true,
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                backgroundColor:'#FFAA33',
                source: source,
                colorScheme: 'scheme04',
                xAxis:
                {
                    dataField: 'DIST_NAME',
                    valuesOnTicks: false
                },
                // valueAxis:
                // {
                    // unitInterval: 50000,
                    // minValue: 50000,
                    // maxValue: 350000,
                    // title: { text: 'Sales ($)<br>' },
                    // labels: {
                        // formatSettings: { prefix: '$', thousandsSeparator: ',' },
                        // horizontalAlignment: 'right'
                    // }
                // },
                seriesGroups:
                    [
                        {
                            type: 'bubble',
                            series: [
                                    { dataField: 'DIGNO_COUNT1', radiusDataField: 'DIGNO_COUNT1', minRadius: 10, maxRadius: 30, displayText: '審核案件數量-不含市養道' },
                                    // { dataField: 'DIGNO_COUNT2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2' }
                                ]
                        }
                    ]
            };
            
            $('#chartContainer').jqxChart(settings);
            
            
            var chart = $('#chartContainer').jqxChart('getInstance');
            // symbol selection drop down
            var symbolsList = ["circle", "diamond", "square", "triangle_up", "triangle_down", "triangle_left", "triangle_right"];
            $("#dropDownSerie1Symbol").jqxDropDownList({ source: symbolsList, selectedIndex: 0, width: '200', height: '25', dropDownHeight: 100 });
            $('#dropDownSerie1Symbol').on('change', function (event) {
                var value = event.args.item.value;
                chart.seriesGroups[0].series[0].symbolType = value;
                chart.update();
            });
            $("#dropDownSerie2Symbol").jqxDropDownList({ source: symbolsList, selectedIndex: 0, width: '200', height: '25', dropDownHeight: 100 });
            $('#dropDownSerie2Symbol').on('change', function (event) {
                var value = event.args.item.value;
                chart.seriesGroups[0].series[1].symbolType = value;
                chart.update();
            });
            
            
        });
    });
   
function getExportServer() {
    return 'https://www.jqwidgets.com/export_server/export.php';
}