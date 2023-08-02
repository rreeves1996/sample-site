import { useState } from 'react';
import Carousel from './components/Carousel';

export default function SiteContent() {
	const [currentMountain, setCurrentMountain] = useState(1);

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
			<div className='climb-container'>
				<header>
					<div className='header-accent-text'>
						<h1>02.</h1>
						<h3>CLIMB</h3>
					</div>

					<p>
						Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
						gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
						dignissim tortor nec congue.
					</p>
				</header>

				<nav>
					<button
						onClick={() => setCurrentMountain(1)}
						style={{
							textDecoration: currentMountain === 1 ? 'underline' : 'none',
							backgroundColor:
								currentMountain === 1 ? '#b0b4be' : 'transparent',
							color: currentMountain === 1 ? '#404f6c' : '#b0b4be',
						}}>
						MOUNTAIN 1
					</button>
					<button
						onClick={() => setCurrentMountain(2)}
						style={{
							textDecoration: currentMountain === 2 ? 'underline' : 'none',
							backgroundColor:
								currentMountain === 2 ? '#b0b4be' : 'transparent',
							color: currentMountain === 2 ? '#404f6c' : '#b0b4be',
						}}>
						MOUNTAIN 2
					</button>
				</nav>

				<div className='climb-body'>
					<div
						className='mountain-1 mountain'
						style={{
							transform:
								currentMountain === 1 ? `translateX(0%)` : 'translateX(-100%)',
						}}>
						<div className='schedule'>
							<h3>SCHEDULE</h3>
							<ul>
								<li className='schedule-item'>
									<span className='schedule-date'>25 Nov 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>28 Nov 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'></span>
									<span className='schedule-text'></span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>18 Dec 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'></span>
									<span className='schedule-text'></span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>7 Jan 2017</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>
							</ul>
						</div>
					</div>
					<div
						className='mountain-2 mountain'
						style={{
							transform:
								currentMountain === 1 ? `translateX(100%)` : 'translateX(0)',
						}}>
						<div className='schedule'>
							<h3>SCHEDULE</h3>
							<ul>
								<li className='schedule-item'>
									<span className='schedule-date'>17 Nov 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'></span>
									<span className='schedule-text'></span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>13 Dec 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>28 Dec 2016</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'></span>
									<span className='schedule-text'></span>
								</li>

								<li className='schedule-item'>
									<span className='schedule-date'>9 Feb 2017</span>
									<span className='schedule-text'>Vestibulum viverra</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
