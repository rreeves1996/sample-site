import { useEffect, useState } from 'react';
import Hero from './Hero';
import History from './History';
import Team from './Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/style/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	const [windowPosition, setWindowPosition] = useState(0);

	useEffect(() => {
		const getWindowPosition = () => {
			const windowPos = window.scrollY;
			setWindowPosition(windowPos);
		};

		window.addEventListener('scroll', getWindowPosition);

		return () => {
			window.removeEventListener('scroll', getWindowPosition);
		};
	}, []);

	return (
		<>
			<main>
				<Hero />
				<Navbar windowPosition={windowPosition} />
				<History />
				<Team />
			</main>
			<Footer />
		</>
	);
}

export default App;
