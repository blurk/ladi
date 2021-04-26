import {
	Box,
	chakra,
	Flex,
	SimpleGrid,
	useColorModeValue
} from '@chakra-ui/react';
import ShowOnScrollBox from './ShowOnScrollBox';
import TestimonialCard from './TestimonialCard';

const testimonials = [
	{
		name: 'Brandon P.',
		role: 'Chief Marketing Officer',
		content:
			'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
		avatar:
			'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
	},
	{
		name: 'Krysta B.',
		role: 'Entrepreneur',
		content:
			"I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
		avatar:
			'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
	},
	{
		name: 'Darcy L.',
		role: 'Movie star',
		content:
			"Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
		avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
	},
	{
		name: 'Daniel T.',
		role: 'Musician',
		content:
			'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
		avatar:
			'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
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
