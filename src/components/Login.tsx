import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { auth } from '../firebaseConfig';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			dispatch(setUser(userCredential.user));
		} catch (error) {
			console.error('Login failed', error);
		}
	};

	return (
		<form
			onSubmit={handleLogin}
			className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
				required
				autoComplete="off"
				className="p-2 border rounded"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				required
				autoComplete="off"
				className="p-2 border rounded"
			/>
			<button type="submit" className="p-2 bg-blue-500 text-white rounded">
				Login
			</button>
		</form>
	);
};

export default Login;
