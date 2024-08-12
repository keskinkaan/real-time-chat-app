import React, { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { auth } from '../firebaseConfig';

const Register: React.FC = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		if (emailRef.current && passwordRef.current) {
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					emailRef.current.value,
					passwordRef.current.value
				);
				dispatch(setUser(userCredential.user));
			} catch (error) {
				console.error('Registration failed', error);
			}
		}
	};

	return (
		<form
			onSubmit={handleRegister}
			className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
			<input
				ref={emailRef}
				type="email"
				placeholder="Email"
				required
				autoComplete="off"
				className="p-2 border rounded"
			/>
			<input
				ref={passwordRef}
				type="password"
				placeholder="Password"
				required
				autoComplete="off"
				className="p-2 border rounded"
			/>
			<button type="submit" className="p-2 bg-blue-500 text-white rounded">
				Register
			</button>
		</form>
	);
};

export default Register;
