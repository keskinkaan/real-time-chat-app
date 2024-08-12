import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	collection,
	addDoc,
	getDocs,
	orderBy,
	query,
	Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

type TMessage = {
	id: string;
	text: string;
	email: string;
	timestamp: Timestamp;
};

type TMessagesState = {
	messages: TMessage[];
	loading: boolean;
	error: string | null;
};

const initialState: TMessagesState = {
	messages: [],
	loading: false,
	error: null,
};

export const fetchMessages = createAsyncThunk(
	'messages/fetchMessages',
	async () => {
		const q = query(collection(db, 'messages'), orderBy('timestamp'));
		const querySnapshot = await getDocs(q);
		const messages: TMessage[] = querySnapshot.docs.map(
			(doc) =>
				({
					id: doc.id,
					...doc.data(),
				} as TMessage)
		);
		return messages;
	}
);

export const sendMessage = createAsyncThunk(
	'messages/sendMessage',
	async ({ text, email }: { text: string; email: string }) => {
		const newMessage = {
			text,
			email,
			timestamp: Timestamp.now(),
		};
		const docRef = await addDoc(collection(db, 'messages'), newMessage);
		return { id: docRef.id, ...newMessage };
	}
);

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMessages.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMessages.fulfilled, (state, action) => {
				state.loading = false;
				state.messages = action.payload;
			})
			.addCase(fetchMessages.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch messages';
			})
			.addCase(sendMessage.pending, (state) => {
				state.error = null;
			})
			.addCase(sendMessage.fulfilled, (state, action) => {
				state.messages.push(action.payload);
			})
			.addCase(sendMessage.rejected, (state, action) => {
				state.error = action.error.message || 'Failed to send message';
			});
	},
});

export default messagesSlice.reducer;
