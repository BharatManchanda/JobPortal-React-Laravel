import React from "react";
import {FormGroup, FormControlLabel, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Chip, IconButton, TablePagination, Typography, Grid, TextField } from '@mui/material';
import Constant from './Constant/TableColName';
import SortTh from '../../../Components/Common/SortTh';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import { ThemeColor, activeAndInactive } from '../../../Helpers/StyleConstant';
import { Link } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Delete from '../../../Components/Common/Delete';
import { getCategoryListRequest, updateStatusChangeRequest } from '../../../Store/Category/actions';
import NotFound from "../../../Components/Common/NotFound";
import SwitchStatusToggle from "../../../Components/Common/SwitchStatusToggle";
import DialogModel from "../../../Components/Common/DialogModel";
import PreForm from './Constant/PreForm';
import { CreateCategoryDialog } from "./Components/CreateOrEdit";

export default function List() {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [controller, setController] = React.useState({
        page: 0,
        rowsPerPage: 25
    });
    const [data, setData] = React.useState(PreForm.Category);
    let category = useSelector(state => state.category);
    let dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCategoryListRequest());
    }, []);

    function handlePageChange(event, newPage){
        setController({
            ...controller,
            page: newPage
        });
    }

    function handleClose () {  setOpen(false);}
    function handleEditClose () {  setOpenEdit(false);}

    function handleOpen () { setOpen(true);}
    function handleEditOpen () { setOpenEdit(true);}

    function handleSubmit () {
        setOpen(true);
    }

    function handleChangeRowsPerPage(event){
        setController({
            ...controller,
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        });
    }

    function sortTable(sort){
    }

    function handleStatusChange(id) {
        dispatch(updateStatusChangeRequest({id}));
    }

    function handleChange(e){
        let {name, value} = e.target;
        setData({
            ...data,
            [name]:value,
        });
    }

    function CreateOrEditCategory() {
        return (<Box sx={{background: ThemeColor.white }}>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <TextField
                    error={false?true:false}
                    type='name'
                    size='small'
                    label="Title"
                    name='title'
                    value={data.title}
                    onChange={handleChange} fullWidth required
                    helperText=""
                />
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <TextField
                    error={false?true:false}
                    type='email'
                    size='small'
                    label="Description"
                    name='description'
                    value={data.description}
                    onChange={handleChange} fullWidth required
                    rows={3} multiline
                    helperText=""
                />
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <Typography
                    fontSize='14px'
                    component='small'
                    sx={{marginBottom:'6px'}}
                >Status</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch
                            checked={data.status ? true : false}
                            name='status'
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    status : e.target.checked ? 1 : 0,
                                });
                            }}
                        />}
                        label={`${data.status ? 'Active' : 'Deactive'}`}
                    />
                </FormGroup>
            </Grid>
        </Box>)
    }
    
    return (<>
        <Box display='flex' justifyContent={'space-between'} sx={{marginBottom:'10px'}}>
            <Typography variant={'h6'} sx={{mt: '10px', fontWeight: 'bolder'}}>Category List</Typography>
            <Button sx={{mb:'2px'}}
                startIcon={<AddIcon/>}
                color='secondary'
                variant="contained"
                onClick={handleOpen}
            >
                Create
            </Button>
            <CreateCategoryDialog
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                data={data}
                setData={setData} 
                handleChange={handleChange}
            />
        </Box>
            <ToastContainer/>
            {category.loading || (!!category.list.length ? <TableContainer>
                <Table size="medium" aria-label="category-list">
                    <TableHead>
                        <TableRow>
                            {Constant.CategoryList.map((row, key) => (
                                <React.Fragment key={key}>
                                    <SortTh row={row}  sortTable={sortTable} />
                                </React.Fragment>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {category.list.map((row, key) => (
                            <TableRow key={key} >
                                <TableCell width={'10%'}>{row.id}</TableCell>
                                <TableCell width={'20%'}>{row.title}</TableCell>
                                <TableCell width={'10%'}>
                                    <Chip size='small' label={row.status ? 'Active' : 'Inactive'}
                                        style={{
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            background: activeAndInactive[row.status ? 'active' : 'inactive'],
                                            color: '#fff',
                                        }}
                                    />
                                </TableCell>
                                <TableCell width={'20%'}>
                                    <SwitchStatusToggle id={row.id} status={row.status} handleSubmit={handleStatusChange}/> 
                                    <IconButton aria-label="edit" onClick={handleOpen} size="small" sx={{
                                        color:ThemeColor.primary
                                    }}>
                                        <ModeEditOutlineOutlinedIcon />
                                    </IconButton>
                                    <Delete />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    onPageChange={handlePageChange}
                    page={controller.page}
                    count={category.pagination.total}
                    rowsPerPage={controller.rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            :
            <NotFound />
            )}
    </>)
}