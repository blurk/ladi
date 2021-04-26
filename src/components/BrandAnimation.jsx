import React from 'react';
import Lottie from 'react-lottie';

export default function BrandAnimation({ animationData }) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return <Lottie options={defaultOptions} height={250} width={250} speed={1} />;
}
