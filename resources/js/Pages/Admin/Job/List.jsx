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
import { getUserListRequest } from '../../../Store/User/actions';
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
import { TreeItem, TreeView } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function List() {
    const [controller, setController] = React.useState({
        page: 0,
        rowsPerPage: 25
    });

    const [treeData, setTreeData] = React.useState([
        {
            nodeId: '1',
            label: 'Applications',
            children: [
            { nodeId: '2', label: 'Calendar' },
            { nodeId: '7', label: 'Calendar 7' },
            ],
        },
        {
            nodeId: '5',
            label: 'Documents',
            children: [
            {
                nodeId: '10',
                label: 'OSS',
                children: [
                    {
                        nodeId: '50',
                        label: ' OSS 2',
                        children: [
                            {
                                nodeId: '51',
                                label: ' OSS 3',
                            },
                        ]
                    },
                ]
            },
            {
                nodeId: '6',
                label: 'MUI',
                children: [
                { nodeId: '8', label: 'index.js' },
                ],
            },
            ],
        },
    ]);

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

    function handleDelete(){
        
    }

    React.useEffect(() => {
        dispatch(getUserListRequest(controller));
    },[controller])



    const MyTreeView = ({ nodes }) => {
        const renderTree = (nodes) => (
          nodes.map((node) => (
            <TreeItem key={node.nodeId} nodeId={node.nodeId} label={node.label}>
              {Array.isArray(node.children) && node.children.length > 0 ? (
                renderTree(node.children)
              ) : null}
            </TreeItem>
          ))
        );
      
        return (
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {renderTree(nodes)}
          </TreeView>
        );
    }

    // const App = () => {
    //     const [treeData, setTreeData] = useState([
    //         {
    //             nodeId: '1',
    //             label: 'Applications',
    //             children: [
    //             { nodeId: '2', label: 'Calendar' },
    //             // Add more nested nodes as needed
    //             ],
    //         },
    //         {
    //             nodeId: '5',
    //             label: 'Documents',
    //             children: [
    //             {
    //                 nodeId: '10',
    //                 label: 'OSS',
    //             },
    //             {
    //                 nodeId: '6',
    //                 label: 'MUI',
    //                 children: [
    //                 { nodeId: '8', label: 'index.js' },
    //                 ],
    //             },
    //             ],
    //         },
    //     ]);
      
    //     return <MyTreeView nodes={treeData} />;
    // }

    return (
        <>
            <MyTreeView nodes={treeData} />
            <Box display='flex' justifyContent={'space-between'} sx={{marginBottom:'10px'}}>
                <Typography variant={'h6'} sx={{mt: '10px', fontWeight: 'bolder'}}>Job List</Typography>
                <Button component={Link} to="/admin/job/create" sx={{mb:'2px'}} startIcon={<AddIcon/>} color='secondary' variant="contained" >Create</Button>
            </Box>
            <TableContainer component={Paper}>
                <ToastContainer/>
                <Loader loading={user.loading} />
                {user.loading || (!!user.list.length ?
                <>
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
                        count={user.pagination.total}
                        rowsPerPage={controller.rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </> : <NotFound />
                )}
            </TableContainer>
            <Box>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    <TreeItem nodeId="1" label="Applications">
                        <TreeItem nodeId="2" label="Calendar" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="10" label="OSS" />
                        <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="8" label="index.js" />
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </Box>
        </>
    );
}