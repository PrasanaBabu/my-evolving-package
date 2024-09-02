/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {Button, Container, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useForm, SubmitHandler} from "react-hook-form";
import {addUser} from '../components/user-management/service/UserPageService';
import {toast, ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const mockExistingEmails = [
    'abc@gmail.com',
    'xyz@gmail.com',
    'test@test.com'
];

const CreateUserPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInputs>();

    const [isSaved, setIsSaved] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
        toast.dismiss();
        toast.info('Your request is submitted');
        setIsProcessing(true);
        console.log(data);
        // Handle form submission

        //if email already present show warning toast else add email and show success
        setTimeout(() => {
            if (mockExistingEmails.filter(email => email === data.email).length > 0) {
                toast.dismiss();
                toast.warn('Email already exists', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setIsProcessing(false);
                return;
            }
            else {
                toast.dismiss();
                toast.success('User created successfully', {
                    type: 'success',
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setIsProcessing(false);
                mockExistingEmails.push(data.email);
                return;
            }
        }, 1000);
    };


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                        disabled={isProcessing}
                    >
                        Create User
                    </SubmitButton>
                </form>
            </FormContainer>
        </>
    );
};

export default CreateUserPage;
