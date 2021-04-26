import {
	Box,
	chakra,
	Flex,
	SimpleGrid,
	useColorModeValue
} from '@chakra-ui/react';
import ShowOnScrollBox from '../components/ShowOnScrollBox';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
	{
		name: 'Brandon P.',
		role: 'Chief Marketing Officer',
		content:
			'It really saves me time and effort. It is exactly what our business has been lacking. VVECO is the most valuable interior design we have EVER hired. After working with VVECO my life skyrocketed!',
		avatar: '/images/testi1.jpg'
	},
	{
		name: 'Krysta B.',
		role: 'Entrepreneur',
		content:
			"I didn't even need anyone else. We've hired VVECO for the last five years. I have gotten at least 50 times the value from VVECO. My place is so beautiful now!",
		avatar: '/images/testi2.jpg'
	},
	{
		name: 'Darcy L.',
		role: 'Movie star',
		content:
			"Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, VVECO is the coolest, most happening thing around! I love VVECO!",
		avatar: '/images/testi3.jpg'
	},
	{
		name: 'Daniel T.',
		role: 'Musician',
		content:
			"I am so pleased with this product. VVECO's design is both attractive and highly adaptable. Without VVECO, our house would have been a mess by now. Thank you for all of your work!",
		avatar: '/images/testi4.jpg'
	}
];

const testimonialVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 300 }
};

export default function Testimonials() {
	return (
		<Flex
			textAlign={'center'}
			py={10}
			px={10}
			justifyContent={'center'}
			direction={'column'}
			width={'full'}>
			<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
				<chakra.h1
					py={5}
					fontSize={48}
					fontWeight={'bold'}
					color={useColorModeValue('red.400', 'red.50')}>
					People love us
				</chakra.h1>
				<chakra.h2
					margin={'auto'}
					width={'70%'}
					fontWeight={'medium'}
					color={useColorModeValue('gray.500', 'gray.400')}>
					See why over{' '}
					<chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
						150,000+
					</chakra.strong>{' '}
					customers is happy with us
				</chakra.h2>
			</Box>
			<SimpleGrid
				columns={{ base: 1, xl: 2 }}
				spacing={'20'}
				mt={16}
				mx={'auto'}>
				{testimonials.map((cardInfo, index) => (
					<ShowOnScrollBox
						key={'testimonial-' + index}
						index={index / 10}
						variants={testimonialVariants}>
						<TestimonialCard {...cardInfo} index={index} />
					</ShowOnScrollBox>
				))}
			</SimpleGrid>
		</Flex>
	);
}
