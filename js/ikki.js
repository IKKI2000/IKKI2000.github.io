/* JS for IKKI Studio | Written by IKKI | 2018-02-03 */

var path = $('base').attr('href');

$(function() {
    $.ajax({
        type: 'get',
        url: path + 'json/menu.json',
        dataType: 'json',
        success: function(res) {
            if (res.result === 'y') {
                $('#navPanelBar').kendoPanelBar({
                    dataSource: res.data
                });
                $('#menuH').kendoMenu({
                    dataSource: res.data
                });
            }
        }
    });
});