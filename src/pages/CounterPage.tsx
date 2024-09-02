import {Button, Container} from '@mui/material';
import {useState} from 'react';
import {useCounter} from '../store/useCounter';

const CounterPage = () => {

    const {count, increment, decrement} = useCounter();
    return (
        <>
            <Container>
                <h1>Counter Page</h1>
                <p>Counter: {count}</p>
                <Button
                    variant="contained"
                    color="success"
                    onClick={
                        increment
                    }
                >
                    Increment
                </Button>
                <Button variant="contained" color="error"
                        onClick={decrement}
                >
                    Decrement
                </Button>
            </Container>
        </>
    );
}

export default CounterPage;
