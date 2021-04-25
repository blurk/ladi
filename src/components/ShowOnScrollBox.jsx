import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ShowOnScrollBox({ children, index, variants }) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ delay: 0.2 * index }}
			variants={variants}>
			{children}
		</motion.div>
	);
}
