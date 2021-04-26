import {
	Box,
	chakra,
	Container,
	IconButton,
	Input,
	Link,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../components/Logo';

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={'500'} fontSize={'lg'} mb={2}>
			{children}
		</Text>
	);
};

export default function LargeWithNewsletter() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid
					templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
					spacing={8}>
					<Stack spacing={6}>
						<Box>
							<Logo color={useColorModeValue('gray.700', 'white')} />
						</Box>
						<Text fontSize={'sm'}>© 2020 design and develop by Hololive</Text>
						<Stack direction={'row'} spacing={6}>
							<SocialButton label={'Facebook'} href={'#'}>
								<FaFacebook />
							</SocialButton>
							<SocialButton label={'YouTube'} href={'#'}>
								<FaYoutube />
							</SocialButton>
							<SocialButton label={'Instagram'} href={'#'}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Contact</ListHeader>
						<Link href={'mailto:info@vvecodesign.com'}>
							info@vvecodesign.com
						</Link>
						<Link href={'tel:+84387056789'}>0387056789</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Address</ListHeader>
						<p>CT1A Tower</p>
						<p>Giao Luu Urban area</p>
						<p>Ha Noi, Viet Nam</p>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Stay up to date</ListHeader>
						<Stack direction={'row'}>
							<Input
								placeholder={'Your email address'}
								bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
								border={0}
								_focus={{
									bg: 'whiteAlpha.300'
								}}
							/>
							<IconButton
								bg={useColorModeValue('red.400', 'red.800')}
								color={useColorModeValue('white', 'gray.800')}
								_hover={{
									bg: 'red.600'
								}}
								aria-label='Subscribe'
								icon={<BiMailSend />}
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
