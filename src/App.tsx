import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from './redux/store';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

const App: React.FC = () => {
	const [isRegistering, setIsRegistering] = useState(false);
	const user = useSelector((state: TRootState) => state.user.user);

	if (user) {
		return <Chat />;
	}

	return (
		<div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
			{isRegistering ? <Register /> : <Login />}
			<button
				onClick={() => setIsRegistering(!isRegistering)}
				className="mt-4 text-blue-500">
				{isRegistering
					? 'Already have an account? Login'
					: "Don't have an account? Register"}
			</button>
		</div>
	);
};

export default App;
