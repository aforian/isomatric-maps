var currentState = history.state;
var building_path = ["store-taipei","taipei_city","future-experience","extraction","greenhouse_alishan","greenhouse_tainan","airport","laboratory","factory","north_solar","alishan-mountain","alishan-wood",];

var pathArray = window.location.pathname.split( '/' );
var stateObj = { page: "./" };
// history.pushState(stateObj, "page", "./");
if(stateObj['page'] == "./" && pathArray[pathArray.length-1]) {
	// var flag = true;
	// flag = building_path.indexOf(pathArray[pathArray.length-1]) > -1 ? true : false;


	// if(flag){
	// 	history.pushState(stateObj, "page", pathArray[pathArray.length-1]);
	// 	stateObj['page'] = pathArray[pathArray.length-1];
	// }else {
	// 	history.pushState(stateObj, "page", "./");
	// }

	// console.log(currentState);
}
if(stateObj['page'] == "./" && !pathArray[pathArray.length-1]) {
	$(".intro").slideDown(300);
}

$(document).ready(function(){

	var isomap = $(".iso-map"),
		wraper = $("#wraper");

	var now_scroll_top,
		now_scroll_left,
		now_active_building;

	var win_width = $(window).width(),
		win_height = $(window).height();

	var tube_timer, snap_timer, snap_ani;

	var building_datas = [
		{
			title: "store-taipei",
			name: "台北概念店",
			url: "./images/store_taipei.svg",
			top : 500,
			left : 1520 ,
			top_focus: 493 ,
			left_focus: 1580,
			width: 240,
			sign_pos: {left: "40%", top: "20%"},
			animate_class: [".man-store"],
			content: "台北概念店於2015創立至今，在2017年於台北的概念店成立並開幕，為我們的旅程揭開了新的一章。",
			inside: true,
			component:[
				{
					title: "體驗區",
					direction: "lefttop",
					position: {left: "40%", top: "48%"},
					content: "體驗區設有體驗桌椅，能讓顧客舒適地接觸我們的產品，感受高山蘭花所帶來的功效。"
				},
				{
					title: "展售區",
					direction: "righttop",
					position: {left: "80%", top: "28%"},
					content: "為了突出產品帶來的自然色澤，採用特別訂製的陳列櫃，搭配設計的燈光，讓顧客能感受新鮮、高貴的氣息。"
				}
			]
		},
		{
			title: "taipei_city",
			name: "臺灣臺北",
			url: "./images/taipei_city.svg",
			inside: false,
			top: 55,
			left: 1585,
			top_focus: 55,
			left_focus: 1600,
			width: 500,
			sign_pos: {left: "56%", top: "47%"},
			content: "生機勃勃的臺北市，就如同蝴蝶蘭般，是我們開始發光發亮的起點。"
		},
		{
			title: "future-experience",
			name: "未來體驗館",
			url: "./images/future_experience.svg",
			// inside: true,
			top: 1075,
			left: 2430,
			top_focus: 1075,
			left_focus: 2507,
			width: 290,
			sign_pos: {left: "90%", top: "20%"},
			content: "我們期望在阿里山上，能夠讓顧客體驗只屬於阿里山的自然，她的陽光、空氣、水，而這將會在我們的規劃當中"
		},
		{
			title: "extraction",
			name: "萃取廠",
			url: "./images/extraction.svg",
			inside: true,
			top: 1680,
			left: 1640,
			top_focus: 1680,
			left_focus: 1700,
			width: 320,
			sign_pos: {left: "50%", top: "10%"},
			content: "新鮮的高山蘭花會運送到此，萃取出營養成分極高的原液。",
			animate_class: ["#extraction-tube"],
			component:[
				{
					title: "新鮮蘭花",
					direction: "lefttop",
					position: {left: "58%", top: "51%"},
					content: "阿里山上綻放的大白蝴蝶蘭和紅蝴蝶蘭，富含多酚類、花青素、多醣體及天然維生素B、C、E，並且透過複製技術，確保每一朵、每一瓣都能夠萃取出相同且高效的成分。<img class='content-img' src='https://picsum.photos/600/400?image=830'/>"
				},
				{
					title: "萃取系統",
					direction: "righttop",
					position: {left: "69%", top: "43%"},
					content: "高科技的萃取系統，提煉出每一朵蝴蝶蘭的精華，而這蜜桃般的粉紅色，正是精華所在的最佳證明。<img class='content-img' src='https://picsum.photos/600/400?image=798'/>"
				}
			]
		},
		{
			title: "greenhouse_alishan",
			name: "阿里山溫室",
			url: "./images/greenhouse_alishan.png",
			inside: true,
			top: 900,
			left: 2140,
			top_focus: 900,
			left_focus: 2140,
			width: 420,
			sign_pos: {left: "50%", top: "10%"},
			content: "成熟蘭苗送到海拔2000公尺的阿里山溫室，進行抽梗和催花，伴隨著阿里山的陽光、空氣、水，到達最重要的階段－－開花。",
			images: [
				{class: "buildinginside", url: "./images/greenhouse_alishan_inside.png"},
				{class: "shadow", url: "./images/greenhouse_alishan_shadow.png"},
				{class: "alishan-flower-1", url: "./images/greenhouse_alishan_flower.png"},
				{class: "alishan-flower-2", url: "./images/greenhouse_alishan_flower.png"},
				{class: "alishan-flower-3", url: "./images/greenhouse_alishan_flower.png"},
				{class: "alishan-flower-4", url: "./images/greenhouse_alishan_flower.png"},
				{class: "building-outside", url: "./images/greenhouse_alishan.png"},
			],
		},
		{
			title: "greenhouse_tainan",
			name: "台南溫室",
			url: "./images/greenhouse_tainan.png",
			inside: true,
			top: 1580,
			left: 560,
			top_focus: 1500,
			left_focus: 560,
			width: 500,
			sign_pos: {left: "45%", top: "5%"},
			content: "我們的起點，是位於台南的蘭苗溫室，透過高科技的設備和技術，培育出健康且優質的種苗，隨後便運送到阿里出進行最為重要的流程。",
			component:[
				{
					title: "智能調節系統",
					direction: "lefttop",
					position: {left: "17%", top: "32%"},
					content: "在台南的溫室的每個工序，都是透過智能調節系統進行操作，確保每一株蘭苗都受到最好的照料。"
				},
				{
					title: "陽光調節系統",
					direction: "righttop",
					position: {left: "49%", top: "17%"},
					content: "在阿里山上能接受最直接的陽光，但強烈陽光所帶來溫度和亮度會對蘭花的開花有莫大的影響，因此智能系統會操作黑色的布幕過濾陽光，進行最合適的調節。"
				},
				{
					title: "水分調節系統",
					direction: "leftbottom",
					position: {left: "25%", top: "65%"},
					content: "蘭花以水草種植，當中的水分、濕度對蘭苗的成長有著舉足輕重的作用，水分調節系統皆由系統操作，確保水分達到最佳比例。"
				},
				{
					title: "瓶苗置放",
					direction: "lefttop",
					position: {left: "80%", top: "45%"},
					content: "瓶苗從植苗到出瓶，需要經歷時長18個月的置放成長，期間溫度會是最重要的因素，需要把溫度維持在18°C，瓶苗才能健康成長。"
				}
			],
			images: [
				{class: "shadow", url: "./images/greenhouse_tainan_shadow.png"},
				{class: "buildinginside", url: "./images/greenhouse_tainan_inside.png"},
				{class: "building-outside", url: "./images/greenhouse_tainan.png"},
			],
			svg: {class: "building-svg", url: "./images/greenhouse_tainan_component.svg"}

		},
		{
			title: "airport",
			name: "桃園機場",
			url: "./images/airport.svg",
			top: 767,
			left: 290,
			top_focus: 767,
			left_focus: 290,
			width: 500,
			sign_pos: {left: "50%", top: "10%"},
			content: "我們希望把阿里山和新鮮的理念傳達至全世界。",
			animate_class: [".airplane"],
		},
		{
			title: "laboratory",
			name: "實驗室",
			url: "./images/laboratory.svg",
			inside: true,
			top: 1386,
			left: 1243,
			top_focus: 1406,
			left_focus: 1376,
			width: 380,
			sign_pos: {left: "60%", top: "15%"},
			content: "蘭花萃取後的原液，會來到實驗室，進行一系統的檢測和處理。",
			component:[
				{
					title: "萃取原液",
					direction: "lefttop",
					position: {left: "58%", top: "51%"},
					content: "色澤呈粉紅的萃取原液，會送往實驗室進行一系列嚴密的檢測。<img class='content-img' src='https://picsum.photos/600/400?image=997'/>"
				},
				{
					title: "檢測器材",
					direction: "righttop",
					position: {left: "69%", top: "43%"},
					content: "除了確保原料的功效品質，我們更重視產品的安全性，而實驗室的高科技器材可對萃取材料進行更有效的檢測。<img class='content-img' src='https://picsum.photos/600/400?image=976'/>"
				},
				{
					title: "微生物檢測",
					direction: "leftbottom",
					position: {left: "72%", top: "64%"},
					content: "品牌的蘭花萃取液韵含極高的營養，非常適合微生物生長，為確保顧客能夠獲得最新鮮的保養，微生物的檢測是非常重要的步驟。<img class='content-img' src='https://picsum.photos/600/400?image=955'/>"
				},
				{
					title: "配方調整",
					direction: "rightbottom",
					position: {left: "80%", top: "57%"},
					content: "萃取液的新鮮功效顯著，而加上天然配方能令成品更進一步發揮功效。<img class='content-img' src='https://picsum.photos/600/400?image=940'/>"
				}
			]
		},
		{
			title: "factory",
			name: "GMP填充廠",
			url: "./images/factory.svg",
			inside: false,
			top: 585,
			left: 948,
			top_focus: 569,
			left_focus: 1010,
			width: 330,
			sign_pos: {left: "45%", top: "20%"},
			content: "在實驗室透過多重檢測後，會即時把原料送往填充廠誰行填充，確保新鮮能夠被鎖住，直到你把瓶子打開。"
		},
		{
			title: "north_solar",
			name: "北回歸線太陽館",
			url: "./images/north_solar.svg",
			inside: false,
			top: 1076,
			left: 1111,
			top_focus: 1009,
			left_focus: 1057,
			width: 400,
			sign_pos: {left: "35%", top: "20%"},
			content: "命中註定的北回歸線，命中註定的我們。"
		},
		{
			title: "alishan-wood",
			name: "阿里山神木",
			url: "./images/alishan-wood.png",
			top: 864,
			left: 1868,
			top_focus: 849,
			left_focus: 1868,
			width: 175,
			sign_pos: {left: "55%", top: "20%"},
			content: "阿里山得天獨厚的氣候，孕育出只屬於阿里山的神木，同時也是品牌夠蓬勃成長的根。",
			images: [
				{class: "building-outside", url: "./images/alishan-wood.png"},
			],
			animate_class: [".godwood"]
		},
		{
			title: "alishan-mountain",
			name: "阿里山雲海日出",
			url: "./images/alishan-mountain2.svg",
			top: 473,
			left: 2061,
			top_focus: 379,
			left_focus: 2040,
			width: 724,
			sign_pos: {left: "50%", top: "35%"},
			content: "阿里山的日出和雲海，沐浴了蝴蝶蘭，每一瓣花瓣都閃爍著阿里山的陽光。"
		}
	];

	//避免觸發tap的ghost click
	var can_tap = true;
	var tap_timer = null;

	//存放building的ham物件
	var building_dom = [];

	//上面時間軸對應建築
	var timeline_sort = [5,4,3,7,8,0],
		timeline_now = 0;

	var map_hammer = new Hammer( wraper[0],{domEvents: true});
	map_hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

	$(".timeline-item > li").each(function(){
		$(this).attr("data-index", timeline_sort[$(this).index()]);
	});

	$('.intro-close, .btn-close').click(function(e){
		$('.intro').slideUp(300);
	})

	for(var i=0; i < building_datas.length; i++) {
		//根據data產生DOM
		var building_data = building_datas[i],
			building_blocks = $("<div class='building-block'></div>"),
			menu_item = $("<li></li>"),
			article_li = $("<li></li>"),
			article = $("<article></article>");

		var articles = [];

		menu_item.html("<h3>"+building_data.name+"</h3>");

		$("#menu > ul").append(menu_item);
		isomap.append(building_blocks);

		if(building_data.component) {
			for(var j=0;j<building_data.component.length;j++){
				articles.push("<li><h4>"+ building_data.component[j].title + "</h4><p>" + building_data.component[j].content +"</p></li>");
			}
		};

		article_li.html("<h2>"+building_data.name+"</h2>");
		article.html("<p>" + building_data.content + "</p><ul class='component-content'>"+ articles.join("") +"</ul>");
		article_li.append(article);

		$("ul.article").append(article_li);
		//根據data產生DOM-end

		//使用ajax 取得svg/png 並把圖片放到對應DOM
		(function(building,index){
			$.get(building.url, function(data) {

				var sign = $("<div class='sign'></div>"),
					building_block = $(".building-block").eq(index),
					building_id = $("#"+building.title),
					this_building_block = building_id.parents('.building-block');

				sign.html("<span>"+building.name+"</span>");
				sign.css({
					left: building.sign_pos.left,
					top: building.sign_pos.top
				});
				building_block.append(sign);

				//根據URL類型載入
				if(building.url.indexOf(".svg") != -1) {

					building_block.append(data.getElementsByTagName('svg')[0]);

				}else{

					var img_data = $("<div id='"+ building.title +"' class='building-box'></div>");

					for(var j=0; j<building.images.length; j++){

						var img = $("<img/>");

						img.addClass(building.images[j].class).attr("src",building.images[j].url);

						img_data.append(img);

					}

					var img_outside = $("<div id='" + building.title + "-outside' class='img-layer'></div>");

					img_data.append(img_outside);

					if(building.svg) {

						$.get(building.svg.url,function(svg_data){
							img_data.append(svg_data.getElementsByTagName('svg')[0]);
						})

					}

					building_block.append(img_data);

				}

				//建築位置與大小
				building_block.css({
					left: building.left,
					top: building.top,
					width: building.width
				});

				building_dom[index] = new Hammer( document.getElementById(building.title) ,{domEvents: true});
				building_dom[index].get("pan").set({enable: false});

				//建築內標籤
				if(building.component){

					for(var j=0;j < building.component.length; j++) {

						var component = building.component[j];
						var component_sign = $("<div class='component-sign'><span>"+ component.title +"</span></div>");

						component_sign.addClass(component.direction);
						if(win_width >= 768){

							component_sign.css({
								left: component.position.left,
								top: component.position.top
							});

						} else {

							component_sign.css({
								left: parseInt(component.position.left)/1.5 + "%",
								top: parseInt(component.position.top)/1.5 + "%"
							});

						}

						building_block.append(component_sign);

						component_sign.click(function(e){

							var item_x,item_y;
							var dom = dom || $("#"+building.title);

							item_x = building.left_focus - win_width + building.width/2 + 350 + 1800;

							if(dom.parent().hasClass('inside-right')) {
								item_y = building.top_focus - win_height * .5 + dom.height()/1.5/2 + 500;
							}else {
								item_y = building.top_focus - win_height * .5 + dom.height()/1.5/2/1.25 + 500;
								dom.parent().addClass('inside-right');
							}

							var com_id = $(this).index('.component-sign');

							$(".component-content > li").fadeOut(300).eq(com_id).stop().delay(300).fadeIn(300);

							// building_active();
							wraper.stop().animate({
								scrollTop : item_y,
								scrollLeft : item_x
							},500,function(){
								now_scroll_top = item_y;
								now_scroll_left = item_x;
							});
						})

					}

				};

				function tap_pos(dom){
					var item_x,item_y;
					var dom = dom || $("#"+building.title);

					$(".intro").slideUp(300);

					window.location.hash = building.title;
					// history.pushState(stateObj, "page 2", building.title);

					now_scale = 1;

						// item_x = building.left_focus - win_width + building.width/2 + 350;
						// item_y = building.top_focus - win_height * .5 + dom.height()/2 + 500;

					if(win_width >= 1400){

						item_x = building.left_focus + 1800 - win_width * .5 + dom.children(".building-outside")[0].getBoundingClientRect().width/2 - 200;

						item_y = building.top_focus - win_height * .5 + dom.height()/2 + 400;

					}else if(win_width >= 768){

						item_x = building.left_focus + 1800 - win_width * .5 + dom.children(".building-outside")[0].getBoundingClientRect().width/2;

						item_y = building.top_focus - win_height * .5 + dom.height()/2 + 400;

					}else{

						item_x = building.left_focus + 1800 - win_width * .5 + dom.children(".building-outside")[0].getBoundingClientRect().width/2;

						item_y = building.top_focus - win_height + dom.height() + 550;

					};



					// console.log(dom.height());

					now_active_building = building;

					$(".map-header").addClass("active");
					$("#menu>ul li").stop().removeClass("active").eq(index).addClass("active");
					dom.parents(".building-block").addClass('active');


					if(building.animate_class && win_width >= 768){
						for(var j=0;j<building.animate_class.length;j++) {
							$(building.animate_class[j]).addClass('active');
						}
					}
					map_hammer.get("pan").set({enable: false});

					if(wraper.scrollLeft() == Math.floor(item_x) && wraper.scrollTop() == Math.floor(item_y)){

						building_active();

					}else{

						wraper.stop().animate({
							scrollTop : item_y,
							scrollLeft : item_x
						},500,function(){

							building_active();
							now_scroll_top = item_y;
							now_scroll_left = item_x;

						});

					};

					//萃取廠用
					if (building.title === "extraction") {
						extraction_init();
						extraction_animate();
					}
				};

				function building_active(){
					var building_id = $("#"+building.title),
						this_building_block = building_id.parents('.building-block');

					building_id.stop().addClass('active');

					if(building.inside){
						building_id.stop().addClass('inside');
						building_id.stop().parent().addClass('inside');
					};

					$(".sign").addClass("active");

					$("#layer").slideDown(400);
					$(".article > li").eq(index).delay(400).fadeIn(300);
					$(".close").delay(400).fadeIn(400);

					var timeline_sort_index = timeline_sort.indexOf(this_building_block.index('.building-block'));

					if( timeline_sort_index != -1) {
						timeline_color(timeline_sort_index);
					}else{
						$(".timeline-item > li").removeClass('active').removeClass('now');
						timeline_now = 0;
					}
				};

				$("#menu > ul li:eq("+index+"), .timeline-item > li[data-index='"+index+"']").click(function(e){
					$(".building-block, .building-block > svg, .building-box").stop().removeClass('active').removeClass('inside').removeClass('inside-right');
					$(".building-block > svg, .building-box").removeClass('inside').removeClass('inside-right');
					$(".building-component").children().removeClass('active')
					$(".article > li").hide();
					tap_pos();
					$("#menu").removeClass('active');
				});

				if(window.location.hash == "#"+building.title) {
					tap_pos();
					building_active();
				}
				$(window).on('hashchange', function(e) {
					e.preventDefault();
					if(window.location.hash == "#"+building.title){

						layer_close();
						tap_pos();
						building_active();
					}
				});
				// console.log(currentState);

				if(stateObj['page'] == building.title) {
					tap_pos();
					building_active();
				}
				window.onpopstate = function (e){
					if(stateObj['page'] == building.title) {
						layer_close();
						tap_pos();
						building_active();
					}
				}

				$("#"+building.title+"-outside").on("tap", function(e){
					if(can_tap) {
						can_tap = false;
						tap_timer = setTimeout(function(){
							can_tap = true;
						},200);
						e.stopPropagation();
						e.preventDefault();
						tap_pos();

					}
				});

				$("#"+building.title).prev().on("tap", function(e){
					tap_pos();
				});

			})
		})(building_data,i);
	}

	function map_init_size(){
		var outer = parseInt(isomap.css("margin-left"),10) + parseInt(isomap.css("margin-right"),10);
		wraper.scrollTop( (isomap.outerHeight() - win_height) / 2);
		wraper.scrollLeft( (isomap.outerWidth()+outer - win_width) / 2);
	}
	map_init_size();

	//hide wrap scroll bar
	// wraper.css({
	// 	"padding-right": wraper[0].offsetWidth - wraper[0].clientWidth,
	// 	"padding-bottom": wraper[0].offsetHeight - wraper[0].clientHeight
	// });

	$("ul.article").css({
		"padding-right": wraper[0].offsetWidth - wraper[0].clientWidth,
		"padding-bottom": wraper[0].offsetHeight - wraper[0].clientHeight
	});

	wraper.on("pan",function(e){
		e.originalEvent.preventDefault();
	});

	wraper.on("panstart", function(e){
		if(e.originalEvent){
			now_scroll_top = wraper.scrollTop();
			now_scroll_left = wraper.scrollLeft();
		}
	});
	wraper.on("panmove", function(e){
		if(e.originalEvent){
			var ev = e.originalEvent.gesture;
			wraper.scrollTop(now_scroll_top - ev.deltaY);
			wraper.scrollLeft(now_scroll_left - ev.deltaX);
		}
	});
	wraper.on("panend",function(e){
		if(e.originalEvent){
			now_scroll_top = wraper.scrollTop();
			now_scroll_left = wraper.scrollLeft();
		}
	});

	$(window).on("keyup",function(e){
		if(e.keyCode == 27) {
			layer_close();
			clean_hash();
		}
		if(e.keyCode == 32) {
			e.preventDefault();
		}
	});

	//放大縮小用
	// var now_scale = 1;
	// $(window).mousewheel(function(e){
	// 	var size;
	// 	if(e.deltaY<0){
	// 		now_scale -= Math.abs(e.deltaY)*0.001;
	// 	}else{
	// 		now_scale += Math.abs(e.deltaY)*0.001;
	// 	}
	// 	now_scale = now_scale > 1?1:now_scale;
	// 	now_scale = now_scale < 0.3?0.3:now_scale;
	// 	// $(".iso-map").css("transform","scale("+ now_scale +")");
	// });
	$(window).resize(function(event) {
		/* Act on the event */
		win_width = $(window).width();
		win_height = $(window).height();
		if(now_active_building) {
			var el = $("#"+now_active_building.title);

			var item_x = now_active_building.left_focus + 1800 - win_width * .5 + el.children(".building-outside")[0].getBoundingClientRect().width/2;
			var item_y = now_active_building.top_focus - win_height * .5 + el.height()/2 + 400;

			// wraper.scrollTop(item_y);
			// wraper.scrollLeft(item_x);
		}
	});

	var hammer_close = new Hammer( $(".close")[0], {
		domEvents: true
	});
	$(".close").on("click",function(){
		layer_close();
		clean_hash();
	});
	$(".nav-icon").click(function(){
		$("nav#menu").toggleClass('active');
	});

	function clean_hash(){
		window.location.hash = "";
		// history.pushState(stateObj, "page", "./");
	}

	function layer_close(){
		$("#layer").slideUp(400);
		$(".iso-map, .map-header, .building-block, .building-block > svg, .building-box, .component-sign, .sign").stop().removeClass('active').removeClass('inside').removeClass('inside-right');
		$(".building-block > svg, .building-box").removeClass('inside').removeClass('inside-right');

		$(".article > li").stop().hide();
		$(".component-content > li").slideUp(300);

		map_hammer.get("pan").set({enable: true});
		$(".building-component").children().removeClass('active');

		$(".timeline-item > li").removeClass('active').removeClass('now');
		timeline_now = 0;



		clearTimeout(tube_timer);
		clearInterval(tube_timer);
		tube_timer = null;
		snap_ani = null;

	};

	function timeline_color(index){
		if(timeline_now <= index) {
			for(var i = timeline_now; i <= index; i++){
				var delay_time = 250*(i-timeline_now);
				$(".timeline-item > li").eq(i).stop().delay(delay_time).queue(function(next){
					$(this).addClass('active');
					next();
				});
				if(i == index){
					$(".timeline-item > li").removeClass('now').eq(i).addClass('now');
				}
			}
		}else{
			for(var i = timeline_now; i > index; i--) {
				var delay_time = 250*(timeline_now - i);
				$(".timeline-item > li").eq(i).stop().delay(delay_time).queue(function(next){
					$(this).removeClass('active');
					next();
				});
				if(i == index+1){
					$(".timeline-item > li").removeClass('now').eq(i-1).addClass('now');
				}
			}
		}
		timeline_now = index;
	};

	//萃取廠管線
	function extraction_interval() {
		if($("#extraction-tube").hasClass('active')) {

			clearInterval(tube_timer);
			clearTimeout(tube_timer);

			tube_timer = setTimeout(function(){
				// extraction_animate();
				extraction_animate();
				tube_timer = setInterval(function(){
					// extraction_animate();
					extraction_animate();
				},12000);
			},3000);

		}else{

			return false;

		}
	};

	function extraction_init() {
		var a = TweenMax;
		var line = document.getElementById("fill-line");
		var paths = line.getElementsByTagName('path');

		paths = [].slice.call(paths);

		paths.forEach(function(path, i){
		  var len = Math.ceil(path.getTotalLength());
			path._len = len;
			path.style.strokeDasharray = len;
			path.style.strokeDashoffset = len;
		});

		paths.forEach(function(path, i){
			a.to(path, 0, {strokeDashoffset: path._len});
		});
	}

	function extraction_animate() {
		var a = TweenMax;
		var line = document.getElementById("fill-line");
		var paths = line.getElementsByTagName('path');

		paths = [].slice.call(paths);

		paths.forEach(function(path, i){
		  var len = Math.ceil(path.getTotalLength());
			path._len = len;
			path.style.strokeDasharray = len;
			path.style.strokeDashoffset = len;
		});

		paths.forEach(function(path, i){
			a.to(path, 0, {strokeDashoffset: path._len});
		});

		a.to(paths[0], 3, {
			strokeDashoffset: 0,
			onComplete: function(){
				a.to(paths[1], 2, {
					strokeDashoffset: 0,
					onComplete: function(){
						a.to(paths[2], 4, {
							strokeDashoffset: 0,
							onComplete: function(){
								setTimeout(function(){
									extraction_animate()
								},3000);
							}
						})
					}
				})
			}
		})
	}

	$('.footer-year').html(new Date().getFullYear());
})

$(window).load(function(){
	$(".loading-page").fadeOut(500);
})


