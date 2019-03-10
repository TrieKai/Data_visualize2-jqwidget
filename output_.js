$(document).ready(function () { 
    
    function getExportServer() {
        return 'https://www.jqwidgets.com/export_server/export.php';
    }
    $("#jpegButton").jqxButton({});
    $("#pngButton").jqxButton({});
    $("#pdfButton").jqxButton({});

    $("#jpegButton").click(function () {
        // call the export server to create a JPEG image
        $('#chartContainer').jqxChart('saveAsJPEG', 'myChart.jpeg', getExportServer());
    });
    $("#pngButton").click(function () {
        // call the export server to create a PNG image
        $('#chartContainer').jqxChart('saveAsPNG', 'myChart.png', getExportServer());
    });
    $("#pdfButton").click(function () {
        // call the export server to create a PNG image
        $('#chartContainer').jqxChart('saveAsPDF', 'myChart.pdf', getExportServer());
    });
});