import { Box, FormControlLabel, FormGroup, Grid, Switch, TextField, Typography } from "@mui/material";
import DialogModel from "../../../../Components/Common/DialogModel";
import { ThemeColor } from "../../../../Helpers/StyleConstant";

function CreateOrEditCategory({data, handleChange}) {
    return (
        <Box sx={{ background: ThemeColor.white }}>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <TextField
                    error={false ? true : false}
                    type='name'
                    size='small'
                    label="Title"
                    name='title'
                    value={data.title}
                    onChange={handleChange}
                    fullWidth
                    required
                    helperText=""
                />
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <TextField
                    error={false ? true : false}
                    type='email'
                    size='small'
                    label="Description"
                    name='description'
                    value={data.description}
                    onChange={handleChange}
                    fullWidth
                    required
                    rows={3}
                    multiline
                    helperText=""
                />
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <Typography fontSize='14px' component='small' sx={{ marginBottom: '6px' }}>
                    Status
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={data.status ? true : false}
                                name='status'
                                onChange={(e) => {
                                    handleChange(e)
                                    // setData(prevData => ({
                                    //     ...prevData,
                                    //     status: e.target.checked ? 1 : 0,
                                    // }));
                                }}
                            />
                        }
                        label={`${data.status ? 'Active' : 'Deactive'}`}
                    />
                </FormGroup>
            </Grid>
        </Box>
    );
}


function CreateCategoryDialog({ open, handleClose, handleChange, handleSubmit, data, setData }) {
    return (
        <DialogModel
            title="Create Category"
            maxWidth='xs'
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
        >
            <CreateOrEditCategory data={data} handleChange={handleChange} id />
        </DialogModel>
    );
}

export {CreateCategoryDialog}