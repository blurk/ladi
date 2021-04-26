import {
	Box,
	chakra,
	Container,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import ShowOnScrollBox from '../components/ShowOnScrollBox';

const projects = [
	{ name: 'Aria Penthouse', address: 'Miami, FL', img: '/images/proj-1.jpg' },
	{
		name: 'Historic Building Office Retrofit',
		address: 'Dong Da, Ha noi',
		img: '/images/proj-2.jpg'
	},
	{
		name: 'Niagara River Historic Renovation',
		address: 'Youngstown, NY',
		img: '/images/proj-3.jpg'
	},
	{
		name: 'Space Joy',
		address: 'Dulles, VA',
		img: '/images/proj-4.jpg'
	},
	{
		name: 'R ARCHITECTURE',
		address: 'Melbourne, VIC',
		img: '/images/proj-5.jpg'
	},
	{
		name: 'Dreamin Man',
		address: 'Rue Amelot, Paris',
		img: '/images/proj-6.jpg'
	},
	{
		name: 'Ochilon',
		address: 'Nha Trang, KH',
		img: '/images/proj-7.jpg'
	}
];

const boxVariants = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -200 },
	transition: { type: 'spring' }
};

const containerVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

const MotionBox = motion(Box);

export default function Projects() {
	return (
		<AnimateSharedLayout>
			<ShowOnScrollBox variants={containerVariants} index={0} layout>
				<Box bg={useColorModeValue('gray.100', 'gray.700')}>
					<Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
						<Stack spacing={0} align={'center'}>
							<Heading
								color={useColorModeValue('red.400', 'red.50')}
								fontSize={48}
								py={5}>
								Our Projects
							</Heading>
							<chakra.h2
								fontWeight={'medium'}
								color={useColorModeValue('gray.500', 'gray.400')}>
								We have been working with clients around the world
							</chakra.h2>
						</Stack>
						<MotionBox
							padding={4}
							sx={{ columnCount: [1, 2, 3], columnGap: '32px' }}>
							{projects.map((project, index) => (
								<MotionBox
									key={'project-' + index}
									variants={boxVariants}
									transition={{ delay: index / 1.25 }}>
									<Box position='relative' mb={16} display='inline-block'>
										<Image
											src={project.img}
											alt={project.name}
											maxW='400'
											minH='200'
											rounded='lg'
											background='blackAlpha.400'
										/>
										<Heading as='h3' size='md' mt={4}>
											{project.name}
										</Heading>
										<Text>{project.address}</Text>
									</Box>
								</MotionBox>
							))}
						</MotionBox>
					</Container>
				</Box>
			</ShowOnScrollBox>
		</AnimateSharedLayout>
	);
}
