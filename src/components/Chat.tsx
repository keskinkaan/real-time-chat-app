import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState, TAppDispatch } from '../redux/store';
import { fetchMessages, sendMessage } from '../redux/slices/messageSlice';

const Chat: React.FC = () => {
	const dispatch = useDispatch<TAppDispatch>();
	const { messages, loading, error } = useSelector(
		(state: TRootState) => state.messages
	);
	const newMessageRef = useRef<HTMLInputElement>(null);
	const user = useSelector((state: TRootState) => state.user.user);

	useEffect(() => {
		dispatch(fetchMessages());
	}, [dispatch]);

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (user && newMessageRef.current?.value.trim()) {
			dispatch(
				sendMessage({ text: newMessageRef.current.value, email: user.email! })
			);
			newMessageRef.current.value = '';
		}
	};

	return (
		<div className="p-4">
			{loading && <p>Loading messages...</p>}
			{error && <p className="text-red-500">Error: {error}</p>}
			<div className="mb-4">
				{messages.map((msg) => (
					<div key={msg.id} className="mb-2">
						<p className="text-sm text-gray-600">
							{msg.email} - {msg.timestamp.toDate().toLocaleTimeString()}
						</p>
						<p className="text-lg">{msg.text}</p>
					</div>
				))}
			</div>
			<form onSubmit={handleSendMessage} className="flex">
				<input
					ref={newMessageRef}
					placeholder="Type a message"
					required
					className="flex-1 p-2 border rounded"
				/>
				<button
					type="submit"
					className="p-2 bg-green-500 text-white rounded ml-2">
					Send
				</button>
			</form>
		</div>
	);
};

export default Chat;
