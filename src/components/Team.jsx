import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Stack,
	useColorModeValue
} from '@chakra-ui/react';
import MemberCard from './MemberCard.jsx';
import ShowOnScrollBox from './ShowOnScrollBox';

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
		position: 'Designer',
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
		<Box bg={useColorModeValue('gray.100', 'gray.700')}>
			<ShowOnScrollBox index={1} variants={containerVariants}>
				<Container
					maxW='7xl'
					mx={'auto'}
					py={8}
					px={{ base: 2, sm: 12, md: 17 }}>
					<Stack align={'center'}>
						<Heading
							as='h1'
							fontSize='4xl'
							color={useColorModeValue('red.400', 'red.50')}>
							Our Team
						</Heading>
					</Stack>

					<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
						{team.map((member, index) => (
							<ShowOnScrollBox
								key={'member-' + index}
								index={index}
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
