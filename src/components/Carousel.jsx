import Slider from 'react-slick';

export default function Carousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='carousel-container'>
			<div className='carousel'>
				<Slider {...settings}>
					<div className='slide-1'></div>
					<div className='slide-2'></div>
				</Slider>
			</div>
		</div>
	);
}
