import {
	Avatar,
	Box,
	Button,
	Center,
	Heading,
	Link,
	LinkOverlay,
	Text,
	useColorModeValue
} from '@chakra-ui/react';

export default function MemberCard({ member }) {
	return (
		<Center py={6}>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={8}
				textAlign={'center'}>
				<Avatar
					size={'xl'}
					src={member.avatar}
					alt={member.name}
					mb={4}
					loading='lazy'
				/>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					{member.name}
				</Heading>
				<Text fontWeight={600} color={'gray.500'} mb={4}>
					{member.email}
				</Text>
				<Text
					textAlign={'center'}
					color={useColorModeValue('gray.700', 'gray.400')}
					px={3}>
					{member.position}. PM for work inquires or{' '}
					<Link href={'#'} color={'blue.400'}>
						#tag
					</Link>{' '}
					me in your posts
				</Text>
				<Button
					mt={4}
					flex={1}
					fontSize={'sm'}
					rounded={'full'}
					bg={'red.500'}
					color={'white'}
					_hover={{
						bg: 'red.600'
					}}
					_focus={{
						bg: 'red.600'
					}}>
					<LinkOverlay href={'mailto:' + member.email}>Contact me</LinkOverlay>
				</Button>
			</Box>
		</Center>
	);
}
