import {useTodosStore} from '../store/useTodoStore';
import {useEffect} from 'react';
import ListTodos from '../components/todos/ListTodo';
import {Container} from '@mui/material';
import Box from '@mui/material/Box';
import AddTodo from '../components/todos/AddTodo';

const TodosPage = () => {

    const { getTodos, todoList, isLoading, isError, isSuccess } = useTodosStore();


    // useEffect(()=>getTodos() );
    return(
        <>
            <Container>
                <h1>Todos</h1>
                <Box
                    sx={{
                        marginBottom: 2,
                        border: 1,
                        borderColor: "divider",
                        backgroundColor: "lightblue",
                    }}
                >
                    <h2>Add Todo</h2>
                    <AddTodo />
                </Box>

                <Box
                    sx={{
                        marginBottom: 2,
                        border: 1,
                        borderColor: "divider",
                        backgroundColor: "lightpink",
                    }}
                >
                    <h2>List Todos</h2>
                    <ListTodos />
                </Box>
            </Container>
        </>
    )
}

export default TodosPage;
