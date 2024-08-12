import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
	const [isRegistering, setIsRegistering] = useState(false);

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
