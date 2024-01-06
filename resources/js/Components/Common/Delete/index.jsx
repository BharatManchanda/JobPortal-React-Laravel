import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButton, Typography } from '@mui/material';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import ThemeButton from '../ThemeButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Delete() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<IconButton onClick={handleClickOpen} aria-label="delete" size="small" sx={{
				color:ThemeColor.primary
			}}>
				<DeleteOutlinedIcon/>
            </IconButton>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="delete-alert-dialog"
				maxWidth='xs'
			>
				<DialogTitle>
					<Typography align='center' variant='h5' sx={{fontWeight:'bolder'}}>Are You Sure?</Typography>
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
					}}
					>
					<CloseIcon />
				</IconButton>
				<DialogContent sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				}}>
					<CancelOutlinedIcon sx={{
						color: ThemeColor.error,
						fontSize: '120px',
						display: 'flex',
					}} />
					<DialogContentText id="delete-alert-dialog" sx={{
						textAlign:'center'
					}}>
						Do you really want to delete these record? This Process cannot be undone
					</DialogContentText>
				</DialogContent>
				<DialogActions sx={{
					display:'flex',
					justifyContent: 'space-evenly',
					mb:'15px'
				}}>
					<ThemeButton variant="contained" color="primary" onClick={handleClose}>Cancel</ThemeButton>
					<ThemeButton variant="contained" color="error" onClick={handleClose}>Delete</ThemeButton>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}