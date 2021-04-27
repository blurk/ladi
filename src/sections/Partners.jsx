import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import BrandAnimation from '../components/BrandAnimation';
import brand6 from '../lottie-files/brands/brand-2wrap';
import brand4 from '../lottie-files/brands/brand-bart';
import brand2 from '../lottie-files/brands/brand-bleue';
import brand1 from '../lottie-files/brands/brand-g';
import brand7 from '../lottie-files/brands/brand-gb';
import brand5 from '../lottie-files/brands/brand-oa';
import brand8 from '../lottie-files/brands/brand-p';
import brand3 from '../lottie-files/brands/brand-sway';

// Replace test data with your own
export default function Partners() {
	return (
		<Box p={32} bg={useColorModeValue('gray.100', 'gray.700')}>
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={48}>Partners</Heading>
				<Text color={'gray.400'} fontSize={'lg'}>
					Solid partnership with leading specialty firms is a key element in the
					VVECO Design strategy.
				</Text>
			</Stack>

			<Container maxW={'6xl'} mt={10}>
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 4 }}
					spacing={{ base: 2, md: 5 }}>
					{[brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8].map(
						(brand, index) => (
							<VStack align={'start'} key={'brand-' + index}>
								<BrandAnimation animationData={brand} />
							</VStack>
						)
					)}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
