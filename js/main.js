var s = skrollr.init();

$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").addClass("chang_color");
  }else{
    $(".navbar").removeClass("chang_color");
  }
}); 

$(document).on('click','a',function(event){
	event.preventDefault();
	var target=$(this).attr("href");
	
	$('html,body').animate({
	  scrollTop: $(target).offset().top
	}, 500);
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

class Carousel {
	constructor(data, $block) {
		this.data = data
		this.$inner = $block.find('#Carousel .carousel-inner');
		this.showItem()
		this.changePage()
	}
	getHtml() {
		let html = ''
		this.data.map((item, i) => {
			html += `
			<div class="carousel-item" data-index="${i}">
				<img src="${item.src}" alt="園區照片"/>
				<a class="text" href="${item.href}" target="_blank">
					<h5>${item.name}</h5>
					<p>${item.other}</p>
				</a>
			</div>`
		})
		return html
	}

	showItem() {
		this.$inner.html(this.getHtml())
	}
	changePage() {
		let page = 0;
		let length = this.data.length - 1
		console.log(length)
		$("#Carousel button").on('click', function(){
			// if ()
			let slide = $(this).data('slide')
			const $item = $("#Carousel .carousel-item")
			if(slide==='next') {
				page += 1;
				if(page > length){
					page = 0;
				}
				$item.css("left","-"+page*100+"%");
			}else {
				page -= 1;
				if(page < 0){
					page = length;
				}
				$item.css("left","-"+page*100+"%");
			}

			
		});
	}
}

const carousel = new Carousel(AttractionsData, $('section#Attractions'))

