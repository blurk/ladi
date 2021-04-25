import React from 'react';
import Lottie from 'react-lottie';
import animationData from './toggle';

export default function ToggleUI({ name }) {
	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<Lottie
			options={defaultOptions}
			height={50}
			width={50}
			speed={1}
			segments={name == 'light' ? [0, 60] : [60, 120]}
		/>
	);
}
