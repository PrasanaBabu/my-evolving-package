import {Helmet, HelmetProvider} from 'react-helmet-async';

const HomePage = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home Page</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <h1>Hello World</h1>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;
