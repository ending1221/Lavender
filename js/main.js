var s = skrollr.init();

$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").addClass("chang_color");
  }else{
    $(".navbar").removeClass("chang_color");
  }
}); 


const AttractionsData = [{
	src: 'https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/-1.jpg',
	href: 'https://www.lavendercottage.com.tw/',
	name: '薰衣草森林(台中新社店)',
	other: '台中市新社區中和村中興街20號 / 04-25931066'
},{
	src: 'https://img.nanai.tw/pixnet/97528cb162132185ecb35c0d8c38a1be.jpg',
	href: 'https://www.graceme.com.tw/',
	name: '葛瑞絲香草田',
	other: '苗栗縣頭屋鄉明德路156號12鄰 / 037-251893'
},{
	src: 'https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/nanyuan%E5%8D%97%E5%85%83%E8%96%B0%E8%A1%A3%E8%8D%89-2.jpg',
	href: 'https://www.facebook.com/nanyuan6990726',
	name: '南元花園休閒農場',
	other: '苗栗縣頭屋鄉明德路156號12鄰 / 037-251893'
},{
	src: 'https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/12193840_906789569400646_176628394362657715_n.jpg',
	href: 'http://www.flowerhome.com.tw/',
	name: '花露休閒農場',
	other: '苗栗縣卓蘭鎮西坪里西坪43-3號 / 04-25891589'
},{
	src: 'https://pic.pimg.tw/sunmoonlove898/1513558464-1647265027_n.jpg',
	href: 'https://www.nine.com.tw/',
	name: '九族文化村',
	other: '南投縣魚池鄉金天巷45號 / 04-92895361'
}]
let html = ''
AttractionsData.map((item, i) => {
	html += `
	<div class="carousel-item" data-index="${i}">
		<img src="${item.src}" alt="園區照片"/>
		<a class="text" href="${item.href}" target="_blank">
			<h5>${item.name}</h5>
			<hr/>
			<p>${item.other}</p>
		</a>
 	</div>`
})
console.log(html)

// <div class="carousel-inner">
// 	<div class="carousel-item active">
// 	<div class="imgwarp"><img class="d-block w-100" src="https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/-1.jpg" alt=""/><a class="text" href="https://www.lavendercottage.com.tw/" target="_blank">
// 		<h5>薰衣草森林(台中新社店)</h5>
// 		<hr/>
// 		<p>台中市新社區中和村中興街20號／04-25931066</p></a></div>
// 	</div>
// 	<div class="carousel-item">
// 	<div class="imgwarp"><img class="d-block w-100" src="https://img.nanai.tw/pixnet/97528cb162132185ecb35c0d8c38a1be.jpg" alt=""/><a class="text" href="https://www.graceme.com.tw/" target="_blank">
// 		<h5>葛瑞絲香草田</h5>
// 		<hr/>
// 		<p>苗栗縣頭屋鄉明德路156號12鄰／037-251893</p></a></div>
// 	</div>
// 	<div class="carousel-item">
// 	<div class="imgwarp"><img class="d-block w-100" src="https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/nanyuan%E5%8D%97%E5%85%83%E8%96%B0%E8%A1%A3%E8%8D%89-2.jpg" alt=""/><a class="text" href="https://www.facebook.com/nanyuan6990726" target="_blank">
// 		<h5>南元花園休閒農場</h5>
// 		<hr/>
// 		<p>台南市柳營區果毅里南湖25號／06-6990726</p></a></div>
// 	</div>
// 	<div class="carousel-item">
// 	<div class="imgwarp"><img class="d-block w-100" src="https://cdn.kikinote.net/travel/wp-content/uploads/2017/05/12193840_906789569400646_176628394362657715_n.jpg" alt=""/><a class="text" href="http://www.flowerhome.com.tw/" target="_blank">
// 		<h5>花露休閒農場</h5>
// 		<hr/>
// 		<p>苗栗縣卓蘭鎮西坪里西坪43-3號／04-25891589</p></a></div>
// 	</div>
// 	<div class="carousel-item">
// 	<div class="imgwarp"><img class="d-block w-100" src="https://pic.pimg.tw/sunmoonlove898/1513558464-1647265027_n.jpg" alt=""/><a class="text" href="https://www.nine.com.tw/" target="_blank">
// 		<h5>九族文化村</h5>
// 		<hr/>
// 		<p>南投縣魚池鄉金天巷45號／04-92895361</p></a></div>
