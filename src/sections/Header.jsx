import React from 'react';
import Navbar from '../components/Navbar';

export default function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<a href='/'>VVECO</a>
			</div>
			<Navbar />
		</header>
	);
}
