import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const ErrorPage = () => {

    return (
        <>
            404 Error Page not found
            <Link to={'/home'}>
                <Button >
                    Home
                </Button>

            </Link>
        </>
    )
}

export default ErrorPage
