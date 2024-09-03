import { Box, List, ListItem, ListItemText } from '@mui/material'
import {useTodosStore} from '../../store/useTodoStore';

const ListTodos = () => {

    const { getTodos, todoList, isLoading, isError, isSuccess } = useTodosStore();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <Box>
            <List dense={true}>
                {
                    todoList.map((todo: any) => {
                        return (
                            <ListItem key={todo.id}>
                                <ListItemText primary={todo.title}/>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    );
}

export default ListTodos;
