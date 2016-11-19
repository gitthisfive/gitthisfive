
    //初始化地图，设置默认中心点
    var map = new BMap.Map("MapDiv",{enableMapClick:true});
    map.centerAndZoom(new BMap.Point(113.087208,28.251814), 15);
    // map.centerAndZoom(,12);
    //添加鼠标滚轮事件监听
    map.enableScrollWheelZoom(true);
    //加载地图控件
    var top_left_navigation = new BMap.NavigationControl();
    map.addControl(top_left_navigation);
    var index = 0;
	var myGeo = new BMap.Geocoder();
	var adds = [
		"包河区金寨路1号（金寨路与望江西路交叉口）",
		"庐阳区凤台路209号（凤台路与蒙城北路交叉口）",
		"蜀山区金寨路217号(近安医附院公交车站)",
		"蜀山区梅山路10号(近安徽饭店) ",
		"蜀山区 长丰南路159号铜锣湾广场312室",
		"合肥市寿春路93号钱柜星乐町KTV（逍遥津公园对面）",
		"庐阳区长江中路177号",
		"长沙市长沙县政府"
	];

	bdGEO();
	function bdGEO()
	{
		var add = adds[index];
		geocodeSearch(add);
		index++;
	}

	function geocodeSearch(add)
	{
		if(index < adds.length)
		{
			setTimeout(window.bdGEO,400);
		} 
		myGeo.getPoint(add, function(point)
		{
			if (point) 
			{
				// document.getElementById("result").innerHTML +=  index + "、" + add + ":" + point.lng + "," + point.lat + "</br>";
				var address = new BMap.Point(point.lng, point.lat);
				addMarker(address,new BMap.Label(index+":"+add,{offset:new BMap.Size(20,-10)}));
			}
		}, "长沙市");
	}
	// 编写自定义函数,创建标注
	function addMarker(point,label)
	{
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		marker.setLabel(label);
	}
