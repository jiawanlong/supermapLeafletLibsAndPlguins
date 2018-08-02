(function () {
    var r = new RegExp("(^|(.*?\\/))(supermapAndLeafletAndPuligns\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");

        // 加载leaflet
        inputCSS("./lib/leftsupermap/leaflet.css");
        inputScript("./lib/leftsupermap/leaflet.js");

        // 加载9d支持
        inputScript("./lib/leftsupermap/iclient9-leaflet.min.js");
        inputCSS("./lib/leftsupermap/iclient9-leaflet.min.css");

        // 加载热力图
        inputScript("./lib/heatmap/heatmap.min.js");
        inputScript("./lib/heatmap/leftheatmap.js");

        // 加载聚合图
        inputCSS("./lib/juhe/MarkerCluster.css");
        inputCSS("./lib/juhe/MarkerCluster.Default.css");
        inputScript("./lib/juhe/leaflet.markercluster-src.js");

        // 加载echrts图
        inputScript("./lib/echarts/leaflet-echarts.js");
        inputScript("./lib/echarts/echarts.source.js");

        // 加载draw
        inputCSS("./lib/draw/leaflet.draw.css");
        inputScript("./lib/draw/Leaflet.draw.js");
        inputScript("./lib/draw/Leaflet.Draw.Event.js");
        inputScript("./lib/draw/Toolbar.js");
        inputScript("./lib/draw/Tooltip.js");
        inputScript("./lib/draw/ext/GeometryUtil.js");
        inputScript("./lib/draw/ext/LatLngUtil.js");
        inputScript("./lib/draw/ext/LineUtil.Intersect.js");
        inputScript("./lib/draw/ext/Polygon.Intersect.js");
        inputScript("./lib/draw/ext/Polyline.Intersect.js");
        inputScript("./lib/draw/ext/TouchEvents.js");
        inputScript("./lib/draw/draw/DrawToolbar.js");
        inputScript("./lib/draw/draw/handler/Draw.Feature.js");
        inputScript("./lib/draw/draw/handler/Draw.SimpleShape.js");
        inputScript("./lib/draw/draw/handler/Draw.Polyline.js");
        inputScript("./lib/draw/draw/handler/Draw.Marker.js");
        inputScript("./lib/draw/draw/handler/Draw.Circle.js");
        inputScript("./lib/draw/draw/handler/Draw.CircleMarker.js");
        inputScript("./lib/draw/draw/handler/Draw.Polygon.js");
        inputScript("./lib/draw/draw/handler/Draw.Rectangle.js");
        inputScript("./lib/draw/edit/EditToolbar.js");
        inputScript("./lib/draw/edit/handler/EditToolbar.Edit.js");
        inputScript("./lib/draw/edit/handler/EditToolbar.Delete.js");
        inputScript("./lib/draw/Control.Draw.js");
        inputScript("./lib/draw/edit/handler/Edit.Poly.js");
        inputScript("./lib/draw/edit/handler/Edit.SimpleShape.js");
        inputScript("./lib/draw/edit/handler/Edit.Rectangle.js");
        inputScript("./lib/draw/edit/handler/Edit.Marker.js");
        inputScript("./lib/draw/edit/handler/Edit.CircleMarker.js");
        inputScript("./lib/draw/edit/handler/Edit.Circle.js");
    }

    load();
    window.isLocal = false;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : 'http://' + document.location.host;
})();
