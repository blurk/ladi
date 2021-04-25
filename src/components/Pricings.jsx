import {
	Box,
	Button,
	Heading,
	HStack,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Pricing() {
	const pricings = [
		{
			name: 'Basic',
			price: 449000,
			descriptions: [
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.'
			]
		},
		{
			name: 'Advanced',
			price: 799000,
			descriptions: [
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.'
			]
		},
		{
			name: 'Ultimate',
			price: 1499000,
			descriptions: [
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.',
				'Lorem ipsum dolor sit amet.'
			]
		}
	];
	return (
		<section id='pricing'>
			<Box py={12}>
				<VStack spacing={2} textAlign='center'>
					<Heading as='h1' fontSize='4xl' color={'red.500'}>
						Plans that fit your need
					</Heading>
					<Text fontSize='lg' color={'gray.500'}>
						Start with 14-day free trial. No credit card needed. Cancel at
						anytime.
					</Text>
				</VStack>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					textAlign='center'
					justify='center'
					spacing={{ base: 4, lg: 10 }}
					py={10}>
					{pricings.map((item, index) => (
						<Box
							mb={4}
							shadow='base'
							borderWidth='1px'
							alignSelf={{ base: 'center', lg: 'flex-start' }}
							borderColor={useColorModeValue('gray.200', 'gray.500')}
							borderRadius={'xl'}
							key={'pricing-' + index}>
							<Box py={4} px={12}>
								<Text fontWeight='500' fontSize='2xl'>
									{item.name}
								</Text>
								<HStack justifyContent='center'>
									<Text fontSize='5xl' fontWeight='900'>
										{item.price.toLocaleString('vn-VN', {
											style: 'currency',
											currency: 'VND'
										})}
									</Text>
								</HStack>
							</Box>
							<VStack
								bg={useColorModeValue('gray.50', 'gray.700')}
								py={4}
								borderBottomRadius={'xl'}>
								<List spacing={3} textAlign='start' px={12}>
									{item.descriptions.map((desc, index) => (
										<ListItem key={'desc-' + index}>
											<ListIcon as={FaCheckCircle} color='green.500' />
											{desc}
										</ListItem>
									))}
								</List>
								<Box w='80%' pt={7}>
									<Button w='full' colorScheme='red' variant='outline'>
										Start Trial
									</Button>
								</Box>
							</VStack>
						</Box>
					))}
				</Stack>
			</Box>
		</section>
	);
}
