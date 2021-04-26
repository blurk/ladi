import {
	Alert,
	AlertDescription,
	AlertTitle,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import animationData from '../lottie-files/success';

const SuccessAnimation = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return <Lottie options={defaultOptions} height={60} width={60} speed={1.5} />;
};

export default function StartForm({ initialRef, finalRef, onClose, isOpen }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting, isSubmitted }
	} = useForm();

	const onSubmit = (data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 3000);
		});
	};

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />

				<ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />

					<ModalBody pb={6}>
						{isSubmitted ? (
							<Alert
								status='success'
								variant='subtle'
								flexDirection='column'
								alignItems='center'
								justifyContent='center'
								textAlign='center'
								height='200px'>
								<SuccessAnimation />
								<AlertTitle mt={4} mb={1} fontSize='lg'>
									Subsciption submitted!
								</AlertTitle>
								<AlertDescription maxWidth='sm'>
									Thanks for your subscription. Our team will get send you an
									email to you soon.
								</AlertDescription>
							</Alert>
						) : (
							<>
								<FormControl
									id='firstName'
									isRequired
									isInvalid={errors.firstName}
									mb={4}>
									<FormLabel htmlFor='firtsName'>First name</FormLabel>
									<Input
										placeholder='First name'
										{...register('firsrtName', { minLength: 1 })}
									/>
									<FormErrorMessage>
										{errors.firstName && 'Not valid'}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									id='lastName'
									isRequired
									isInvalid={errors.lastName}
									mb={4}>
									<FormLabel htmlFor='lastName'>Last name</FormLabel>
									<Input
										placeholder='Last name'
										{...register('lastName', { minLength: 1 })}
									/>
									<FormErrorMessage>
										{errors.lastName && 'Not valid'}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									id='email'
									isRequired
									isInvalid={errors.email}
									mb={4}>
									<FormLabel htmlFor='email'>Email</FormLabel>
									<Input
										placeholder='Email'
										{...register('email', {
											pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
										})}
									/>
									<FormErrorMessage>
										{errors.email && 'Email Not Valid'}
									</FormErrorMessage>
								</FormControl>

								<Text color='gray.400' mt='4'>
									We will send you email to confirm subscription
								</Text>
							</>
						)}
					</ModalBody>

					<ModalFooter>
						{!isSubmitted ? (
							<Button
								colorScheme='blue'
								mr={3}
								type='submit'
								isLoading={isSubmitting}>
								Start
							</Button>
						) : (
							<Button onClick={onClose}>Finish</Button>
						)}
						{!isSubmitted && <Button onClick={onClose}>Cancel</Button>}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
