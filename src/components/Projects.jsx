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
import { motion } from 'framer-motion';

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

export default function Projects() {
	const MotionBox = motion(Box);

	return (
		<section id='projects'>
			<Box bg={useColorModeValue('gray.100', 'gray.700')}>
				<Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
					<Stack spacing={0} align={'center'}>
						<Heading color='red.500' fontSize={48} py={5}>
							Our Projects
						</Heading>
						<chakra.h2
							fontWeight={'medium'}
							color={useColorModeValue('gray.500', 'gray.400')}>
							We have been working with clients around the world
						</chakra.h2>
					</Stack>
					<Box padding={4} sx={{ columnCount: [1, 2, 3], columnGap: '16px' }}>
						{projects.map((project, index) => (
							<MotionBox
								key={'project-' + index}
								position='relative'
								mb={8}
								display='inline-block'>
								<Image src={project.img} alt={project.name} loading='lazy' />
								<Heading as='h3' size='md' mt={4}>
									{project.name}
								</Heading>
								<Text>{project.address}</Text>
							</MotionBox>
						))}
					</Box>
				</Container>
			</Box>
		</section>
	);
}
