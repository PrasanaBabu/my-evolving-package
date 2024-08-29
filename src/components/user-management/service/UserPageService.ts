import axios from 'axios';

interface User {
    name: string,
    phone: string,
    email: string
}

export const addUser = (user: User) => {
    console.log('Adding User ', user)
    let dataGot: boolean = false;
    axios
        .post('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('User added successfully')
        })
        .catch((error) => {
            console.log('Error while adding user', error)
        }).finally(
            () => {
                console.log('User added finally')
            }
        )


}
