import { useState } from 'react';
import Hero from './Hero';
import SiteContent from './SiteContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/style/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	const [currentPage, setCurrentPage] = useState('HERO');

	console.log(currentPage);
	const renderPage = () => {
		switch (currentPage) {
			case 'HERO':
				return <Hero />;
			case 'SITECONTENT':
				return <SiteContent />;
		}
	};

	return (
		<>
			<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<main>{renderPage(currentPage)}</main>
			<Footer />
		</>
	);
}

export default App;
