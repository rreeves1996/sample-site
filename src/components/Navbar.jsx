import PropTypes from 'prop-types';

export default function Navbar({ currentPage, setCurrentPage }) {
	if (currentPage === 'HERO') {
		return (
			<nav className='home-nav'>
				<div className='logo' />

				<div className='links-container'>
					<button
						className='nav-button'
						onClick={() => setCurrentPage('SITECONTENT')}>
						01. History
					</button>
					<button className='nav-button'>02. Team</button>
				</div>
			</nav>
		);
	} else if (currentPage === 'SITECONTENT') {
		return (
			<nav className='navbar'>
				<div className='company-logo' onClick={() => setCurrentPage('HERO')}>
					<div className='logo' />
					<div className='logo-text'>
						<span className='losangeles'>LOSANGELES</span>
						<span className='mountains'>MOUNTAINS</span>
					</div>
				</div>
				<div className='links-container'>
					<button className='nav-button' onClick={() => setCurrentPage('HERO')}>
						01. History
					</button>
					<button className='nav-button'>02. Team</button>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	currentPage: PropTypes.string,
	setCurrentPage: PropTypes.func,
};
