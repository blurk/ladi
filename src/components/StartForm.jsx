import {
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

export default function StartForm({ initialRef, finalRef, onClose, isOpen }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting }
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
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
						<FormControl id='firstName' isRequired isInvalid={errors.firstName}>
							<FormLabel htmlFor='firtsName'>First name</FormLabel>
							<Input
								ref={initialRef}
								placeholder='First name'
								{...register('firsrtName', { minLength: 1 })}
							/>
							<FormErrorMessage>
								{errors.firstName && 'Not valid'}
							</FormErrorMessage>
						</FormControl>

						<FormControl id='lastName' isRequired isInvalid={errors.lastName}>
							<FormLabel htmlFor='lastName'>Last name</FormLabel>
							<Input
								placeholder='Last name'
								{...register('lastName', { minLength: 1 })}
							/>
							<FormErrorMessage>
								{errors.lastName && 'Not valid'}
							</FormErrorMessage>
						</FormControl>

						<FormControl id='email' isRequired isInvalid={errors.email}>
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
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							type='submit'
							isLoading={isSubmitting}>
							Create
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
