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

// 百度统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?19f119dc89e5fbc1a5a63448c2544768";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();