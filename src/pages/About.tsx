import {Container} from '@mui/material';
import {useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';

const About = () => {
    const [name, setName] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log(event.target.value);
        console.log(searchInputRef.current?.value);
    };

    return (
        <Container>
            <Helmet>
                <title>About Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>About Page</h1>
            <p>Controlled Components - Demo</p>
            <div>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>

            <p>Uncontrolled Components - Demo</p>
            <div>
                <input
                    type="text"
                    placeholder="Search Query"
                    ref={searchInputRef}
                    onChange={handleSearchQueryChange}
                />
            </div>
        </Container>
    );
};


export default About;
