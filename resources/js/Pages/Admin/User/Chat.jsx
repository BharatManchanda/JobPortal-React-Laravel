import React, { useState } from 'react';
import { TextField, Paper, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { chatUserRequest } from '../../../Store/User/actions';
import { useParams } from 'react-router';

const ChatContainer = styled(Paper)`
  height: 400px;
  overflow-y: auto;
  padding: 10px;
`;

const Chat = () => {
	let {id} = useParams();
	const [data, setData] = useState({
		message:'',
		receiver_id: id,
	})
	const [messages, setMessages] = useState([]);
	const dispatch = useDispatch();
	// const pusher = new Pusher({
	// 	appId: import.meta.env.VITE_PUSHER_APP_ID,
	// 	key: import.meta.env.VITE_PUSHER_APP_KEY,
	// 	secret: import.meta.env.VITE_PUSHER_APP_SECRET,
	// 	cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
	// });
	// pusher.trigger("chatMessage", "ChatEvent", { message: "hello world" });
	function handleSendMessage(){
		dispatch(chatUserRequest(data))
	}
	
	React.useEffect(() => {
		// window.Echo = new Echo({
		// 	broadcaster: 'pusher',
		// 	key: import.meta.env.VITE_PUSHER_APP_KEY,
		// 	wsHost: 'realtime-pusher.ably.io',
		// 	wsPort: 443,
		// 	disableStats: true,
		// 	encrypted: true,
		// });
	},[]);

	return (
		<div>
			<ChatContainer elevation={3}>
				<List>
					{messages.map((message, index) => (
						<ListItem key={index}>
							<ListItemText primary={message} />
						</ListItem>
					))}
				</List>
			</ChatContainer>

			<Grid display="flex" mt={2}>
				<TextField
					label="Type your message"
					variant="outlined"
					fullWidth
					value={data.message}
					onChange={(e) => setData({
						...data,
						message: e.target.value,
					})}
					size='small'
				/>
				<IconButton  aria-label="send" onClick={handleSendMessage}>
					<SendIcon />
				</IconButton>
			</Grid>
		</div>
	);
};

export default Chat;
