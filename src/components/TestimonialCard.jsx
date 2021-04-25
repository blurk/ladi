import { Avatar, chakra, Flex, useColorModeValue } from '@chakra-ui/react';

export default function TestmonialCard(props) {
	const { name, role, content, avatar, index } = props;
	return (
		<Flex
			boxShadow={'lg'}
			maxW={'640px'}
			direction={{ base: 'column-reverse', md: 'row' }}
			width={'full'}
			rounded={'xl'}
			p={10}
			justifyContent={'space-between'}
			position={'relative'}
			bg={useColorModeValue('white', 'gray.800')}>
			<Flex
				direction={'column'}
				textAlign={'left'}
				justifyContent={'space-between'}>
				<chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
					{content}
				</chakra.p>
				<chakra.p fontWeight={'bold'} fontSize={14}>
					{name}
					<chakra.span fontWeight={'medium'} color={'gray.500'}>
						{' '}
						- {role}
					</chakra.span>
				</chakra.p>
			</Flex>
			<Avatar
				src={avatar}
				height={'80px'}
				width={'80px'}
				alignSelf={'center'}
				m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
			/>
		</Flex>
	);
}
