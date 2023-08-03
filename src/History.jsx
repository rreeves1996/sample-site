import Carousel from './components/Carousel';

export default function History() {
	return (
		<>
			<div className='history-container'>
				<header>
					<div className='header-accent-text'>
						<h1>01.</h1>
						<h3>HISTORY</h3>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
						ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximust
						est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
						Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
						gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
						dignissim tortor nec congue.
					</p>
				</header>
			</div>
			<Carousel />
		</>
	);
}
