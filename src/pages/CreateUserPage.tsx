/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {Button, Container, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useForm, SubmitHandler} from "react-hook-form";
import {addUser} from '../components/user-management/service/UserPageService';

const FormContainer = styled(Container)`
  margin-top: 40px;
  max-width: 600px;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
`;

interface IFormInputs {
    name: string;
    phone: string;
    email: string;
}

const CreateUserPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInputs>();

    const [isSaved, setIsSaved] = useState(false)
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
        console.log(data);
        // Handle form submission
        const value = addUser(data);
        console.log(value, 'value')
        // if (value){
        setIsSaved(true)
        // }
        setTimeout(() => {
            setIsSaved(false);
        }, 1000);


    };


    return (
        <FormContainer>
            <Title variant="h4">Create User</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        {...register("name", {required: "Name is required"})}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </FormGroup>

                <FormGroup>
                    <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                                value: /^[0-9]{2,10}$/,
                                message: "Please enter a valid 2 to 10-digit phone number",
                            },
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                </FormGroup>

                <FormGroup>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </FormGroup>

                <SubmitButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Create User
                </SubmitButton>
            </form>
            {isSaved && <Typography variant="h6">User created successfully</Typography>}
        </FormContainer>
    );
};

export default CreateUserPage;
