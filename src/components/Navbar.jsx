import PropTypes from 'prop-types';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar({ windowPosition }) {
	return (
		<nav
			className='navbar'
			style={{
				position: windowPosition >= 1000 ? 'fixed' : 'absolute',
				top: windowPosition >= 1000 ? '0' : '100vh',
			}}>
			<div className='company-logo'>
				<div className='logo' />
				<div className='logo-text'>
					<span className='losangeles'>LOSANGELES</span>
					<span className='mountains'>MOUNTAINS</span>
				</div>
			</div>
			<div className='links-container'>
				<button className='nav-button'>
					<ScrollIntoView selector='.history-container'>
						01. History
					</ScrollIntoView>
				</button>

				<button className='nav-button'>
					<ScrollIntoView selector='.climb-container'>02. Team</ScrollIntoView>
				</button>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	windowPosition: PropTypes.number,
};
