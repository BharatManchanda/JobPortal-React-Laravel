import React from 'react'
import { TableCell } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const SortTh = ({row, sortCol=null, sortTable, asc=false}) => {
// const SortTh = () => {
    const {id, label, sort, isSortable} = row;
    return (
        <React.Fragment>
            {isSortable ? <>
                <TableCell onClick={() => sortTable(sort)} sx={{fontWeight:'bolder'}}>
                    <span style={{display:'flex', alignItems:'center'}}>
                        <span>{label}</span>
                        <span>
                            {(sortCol == sort) && (asc ? <ArrowDropDownIcon sx={{ marginTop:'8px' }} /> :<ArrowDropUpIcon sx={{ marginTop:'8px' }} />)}
                        </span>
                    </span>
                </TableCell>
            </> : <>
                <TableCell  sx={{fontWeight:'bolder'}}>{label}</TableCell>
            </>}
        </React.Fragment>
    )
}

export default SortTh;