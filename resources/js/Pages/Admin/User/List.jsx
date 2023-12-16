import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import Constant from './Constant/TableColName';
import SortTh from '../../../Components/Common/SortTh';
import NotFound from '../../../Components/Common/NotFound';
const rows = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yopmail.com',
        verify_at: '12 Dec, 2023',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Rohan Doe',
        email: 'rohandoe@yopmail.com',
        verify_at: '12 Dec, 2023',
        role: 'client'
    },
    {
        id: 3,
        name: 'Rishul Doe',
        email: 'rohandoe@yopmail.com',
        verify_at: '12 Dec, 2023',
        role: 'client'
    },
    {
        id: 4,
        name: 'Akeli Doe',
        email: 'akelidoe@yopmail.com',
        verify_at: '12 Dec, 2023',
        role: 'client'
    },
    {
        id: 4,
        name: 'Sonali Doe',
        email: 'sonalidoe@yopmail.com',
        verify_at: '12 Dec, 2023',
        role: 'client'
    },
];

export default function List() {
    const sortTable = (sort) => {
        console.log(sort);
    }
    return (
        <TableContainer component={Paper}>
            {!!rows.length ?
                <Table sx={{ minWidth: 650 }} size="medium" aria-label="user-list">
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
                        {rows.map((row) => (
                            <TableRow key={row.name} >
                                <TableCell component="td" scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.verify_at}</TableCell>
                                <TableCell>
                                    <Chip size='small' label={row.role} style={{
                                        borderRadius: "7px"
                                    }} />
                                </TableCell>
                                <TableCell>{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>:
                <NotFound />
            }
        </TableContainer>
    );
}