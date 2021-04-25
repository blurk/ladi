import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import Lottie from 'react-lottie';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/Navbar';
import Pricing from '../components/Pricings';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import animationData from './loader';

export default function Home() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	const [loading, setLoading] = useState(true);

	setTimeout(() => setLoading(false), 4000);

	return (
		<>
			<Head>
				<title>VVECO DESIGN</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{loading ? (
				<Flex w='100vw' h='100vh' align={'center'} justify={'center'}>
					<Lottie options={defaultOptions} height={400} width={400} speed={2} />
				</Flex>
			) : (
				<>
					<NavBar />
					<Hero />
					<Projects />
					<section id='about'>
						<Testimonials />
						<Team />
					</section>
					<Pricing />
					<Footer />
				</>
			)}
		</>
	);
}
