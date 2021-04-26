import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Text,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import MemberCard from '../components/MemberCard.jsx';
import ShowOnScrollBox from '../components/ShowOnScrollBox';

const team = [
	{
		name: 'Alicia Diaz',
		email: 'alicia.diaz@example.com',
		position: 'Team Leader',
		avatar: '/images/ava2.jpg'
	},
	{
		name: 'Leon Dixon',
		email: 'leon.dixon@example.com',
		position: 'Project Manager',
		avatar: '/images/ava3.jpg'
	},
	,
	{
		name: 'Travis Barrett',
		email: 'travis.barrett@example.com',
		position: 'Interior Designer',
		avatar: '/images/ava4.jpg'
	}
];

const containerVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

const itemVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 400 },
	transition: { duration: 1 }
};

export default function Team() {
	return (
		<Box bg={useColorModeValue('gray.100', 'gray.700')} minH='3xl'>
			<ShowOnScrollBox index={1} variants={containerVariants}>
				<Container
					maxW='7xl'
					mx={'auto'}
					height={'full'}
					py={8}
					px={{ base: 2, sm: 12, md: 17 }}>
					<VStack align={'center'} spacing={4}>
						<Heading
							as='h1'
							fontSize={48}
							color={useColorModeValue('red.400', 'red.50')}>
							Our Team
						</Heading>
						<Text
							m='auto'
							w='50%'
							textAlign='center'
							color={useColorModeValue('gray.400', 'gray.300')}>
							VVECO Design team brings much more than interior design
							experience. Backgrounds in architecture, construction and other
							allied services help bring a unique project experience that
							clients love.
						</Text>
					</VStack>

					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={{ base: 5, lg: 8 }}
						mt='24'>
						{team.map((member, index) => (
							<ShowOnScrollBox
								key={'member-' + index}
								index={index / 4}
								variants={itemVariants}>
								<MemberCard member={member} />
							</ShowOnScrollBox>
						))}
					</SimpleGrid>
				</Container>
			</ShowOnScrollBox>
		</Box>
	);
}
