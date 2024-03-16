import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Chip, IconButton, TablePagination, Typography } from '@mui/material';
import Constant from './Constant/TableColName';
import SortTh from '../../../Components/Common/SortTh';
import NotFound from '../../../Components/Common/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import { ThemeColor, activeAndInactive } from '../../../Helpers/StyleConstant';
import { Link } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Delete from '../../../Components/Common/Delete';
import { getJobListRequest } from '../../../Store/Job/actions';

export default function List() {
    const [controller, setController] = React.useState({
        page: 0,
        rowsPerPage: 25
    });

    const dispatch = useDispatch();
    let job = useSelector(state => state.job);
    
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

    function handleDelete(){
        
    }

    React.useEffect(() => {
        dispatch(getJobListRequest(controller));
    },[controller])

    return (
        <>
            <Box display='flex' justifyContent={'space-between'} sx={{marginBottom:'10px'}}>
                <Typography variant={'h6'} sx={{mt: '10px', fontWeight: 'bolder'}}>Job List</Typography>
                <Button component={Link} to="/admin/job/create" sx={{mb:'2px'}} startIcon={<AddIcon/>} color='secondary' variant="contained" >Create</Button>
            </Box>
            <TableContainer component={Paper}>
                <ToastContainer/>
                <Loader loading={job.loading} />
                {job.loading || (!!job.list.length ?
                <>
                    <Table size="medium" aria-label="job-list">
                        <TableHead>
                            <TableRow>
                                {Constant.JobList.map((row, key) => (
                                    <React.Fragment key={key}>
                                        <SortTh row={row}  sortTable={sortTable} />
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {job.list.map((row) => (
                                <TableRow key={row.name} >
                                    <TableCell width={'10%'}>{row.id}</TableCell>
                                    <TableCell width={'20%'}>{row.title}</TableCell>
                                    <TableCell width={'25%'}>{row.industry_type}</TableCell>
                                    <TableCell width={'15%'}>{row.job_type}</TableCell>
                                    <TableCell width={'10%'}>
                                        <Chip size='small' label={row.status} style={{
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            background: activeAndInactive[row.status],
                                            color: '#fff',
                                        }} />
                                    </TableCell>
                                    <TableCell width={'20%'}>
                                        <IconButton aria-label="edit" component={Link} to={`/admin/job/${row.id}/edit`} size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <ModeEditOutlineOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="view" size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <RemoveRedEyeOutlinedIcon/>
                                        </IconButton>
                                        {/* <IconButton aria-label="delete" size="small" sx={{
                                            color:ThemeColor.primary
                                        }}>
                                            <DeleteOutlinedIcon/>
                                        </IconButton> */}
                                        <Delete />
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
                        count={job.pagination.total}
                        rowsPerPage={controller.rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </> : <NotFound />
                )}
            </TableContainer>
        </>
    );
}