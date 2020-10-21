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
	src: '../img/carousel01.jpg',
	href: 'https://www.lavendercottage.com.tw/',
	name: '薰衣草森林(台中新社店)',
	other: '台中市新社區中和村中興街20號 / 04-25931066'
},{
	src: '../img/carousel02.jpg',
	href: 'https://www.graceme.com.tw/',
	name: '葛瑞絲香草田',
	other: '苗栗縣頭屋鄉明德路156號12鄰 / 037-251893'
},{
	src: '../img/carousel03.jpg',
	href: 'https://www.facebook.com/nanyuan6990726',
	name: '南元花園休閒農場',
	other: '苗栗縣頭屋鄉明德路156號12鄰 / 037-251893'
},{
	src: '../img/carousel04.jpg',
	href: 'http://www.flowerhome.com.tw/',
	name: '花露休閒農場',
	other: '苗栗縣卓蘭鎮西坪里西坪43-3號 / 04-25891589'
},{
	src: '../img/carousel05.jpg',
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

