import { Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import NavBar from '../components/Navbar';
import ScrollTop from '../components/ScrollTop';
import animationData from '../lottie-files/loader';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Pricing from '../sections/Pricings';
import Projects from '../sections/Projects';
import Team from '../sections/Team';
import Testimonials from '../sections/Testimonials';

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

	const description =
		'est interior, house design, interior design, best quality design for your home';

	return (
		<>
			<Head>
				<title>VVECO DESIGN</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description}></meta>
			</Head>

			{loading ? (
				<Flex w='100vw' h='100vh' align={'center'} justify={'center'}>
					<Image src='/images/loader.gif' w='25%' />
				</Flex>
			) : (
				<>
					<NavBar />
					<Hero />
					<section id='projects'></section>
					<Projects />
					<section id='about'>
						<Testimonials />
						<Team />
					</section>
					<section id='pricing'>
						<Pricing />
					</section>
					<Footer />
					<ScrollTop />
				</>
			)}
		</>
	);
}
