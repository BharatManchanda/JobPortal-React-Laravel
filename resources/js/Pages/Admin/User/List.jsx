import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Chip, Grid, IconButton, TablePagination, Typography } from '@mui/material';
import Constant from './Constant/TableColName';
import SortTh from '../../../Components/Common/SortTh';
import NotFound from '../../../Components/Common/NotFound';
import { getUserListRequest, deleteUserRequest } from '../../../Store/User/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import ThemeButton from '../../../Components/Common/ThemeButton';
import AddIcon from '@mui/icons-material/Add';
import { RoleColor, ThemeColor } from '../../../Helpers/StyleConstant';
import { Link } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Delete from '../../../Components/Common/Delete';

export default function List() {
    const [controller, setController] = React.useState({
        page: 0,
        rowsPerPage: 25
    });
    const dispatch = useDispatch();
    let user = useSelector(state => state.user);
    
    function sortTable(sort){
    }

    function handlePageChange(event, newPage){
        setController({
            ...controller,
            page: newPage
        });
    }

    function handleChangeRowsPerPage(event){
        setController({
            ...controller,
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        });
    }

    function handleDelete(id){
        dispatch(deleteUserRequest({id:id}));
        dispatch(getUserListRequest(controller));
    }

    React.useEffect(() => {
        dispatch(getUserListRequest(controller));
    },[controller])

    return (
        <>
            <Box display='flex' justifyContent={'space-between'} sx={{marginBottom:'10px'}}>
                <Typography variant={'h6'} sx={{mt: '10px', fontWeight: 'bolder'}}>User List</Typography>
                <Button component={Link} to="/admin/user/create" sx={{mb:'2px'}} startIcon={<AddIcon/>} color='secondary' variant="contained" >Create</Button>
            </Box>
                <ToastContainer/>
                <Loader loading={user.loading} />
                {user.loading || (!!user.list.length ? <TableContainer component={Paper}>
                    <Table size="medium" aria-label="user-list">
                        <TableHead>
                            <TableRow>
                                {Constant.UserList.map((row, key) => (
                                    <React.Fragment key={key}>
                                        <SortTh row={row}  sortTable={sortTable} />
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.list.map((row) => (
                                <TableRow key={row.name} >
                                    <TableCell width={'10%'}>{row.id}</TableCell>
                                    <TableCell width={'20%'}>{row.name}</TableCell>
                                    <TableCell width={'25%'}>{row.email}</TableCell>
                                    <TableCell width={'15%'}>{row.verify_at}</TableCell>
                                    <TableCell width={'10%'}>
                                        <Chip size='small' label={row.role} style={{
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            background: RoleColor[row.role],
                                            color: '#fff',
                                        }} />
                                    </TableCell>
                                    <TableCell width={'20%'}>
                                        <IconButton aria-label="edit" component={Link} to={`/admin/user/${row.id}/edit`} size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <ModeEditOutlineOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="view" size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <RemoveRedEyeOutlinedIcon/>
                                        </IconButton>
                                        <Delete handleDelete={handleDelete} id={row.id} />
                                        <IconButton aria-label="chat" component={Link} to={`${row.id}/chat`} size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <ChatOutlinedIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        component="div"
                        onPageChange={handlePageChange}
                        page={controller.page}
                        count={user.pagination.total}
                        rowsPerPage={controller.rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    </TableContainer>
                 : <NotFound />
                )}
        </>
    );
}