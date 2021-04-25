import { Button } from '@chakra-ui/button';
import React, { useEffect, useState } from 'react';

export default function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return isVisible ? (
		<Button onClick={scrollToTop} pos='fixed' bottom='8' right='8' />
	) : null;
}
