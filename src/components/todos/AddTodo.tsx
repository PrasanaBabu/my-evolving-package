import { Box, Button, TextField } from '@mui/material'

const AddTodo = () => {
    return (
        <Box>
            <TextField placeholder="Add Todo" />
            <Button variant="contained">Add Todo</Button>
        </Box>
    )
}

export default AddTodo
