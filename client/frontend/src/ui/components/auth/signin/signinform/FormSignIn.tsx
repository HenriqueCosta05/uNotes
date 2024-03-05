import axios from 'axios';
import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {request } from '../../../../../services/utils/getToken'
import Swal from 'sweetalert2'
interface FormFields {
  Username: string;
  Password: string;
}

export default function FormSignIn() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors, isSubmitting }, login} = useForm<FormFields>({
        defaultValues: {
          Username: "",
          Password: ""
        }
    })
const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
        const response = await request('post', '/auth/login', data);
        console.log(response.data);
        if (response.status === 200) {
            return (
                Swal.fire({
                    title: 'Success!',
                    text: 'User logged in successfully!',
                    icon: 'success',
                    confirmButtonText: 'Go to homepage',
                    didClose: () => {
                        navigate('/app/home');
                    }
                })
            )
        }
    } catch (error) {
        Swal.fire({
                    title: 'Try again!',
                    text: 'Username or password incorrect!',
                    icon: 'error',
                    confirmButtonText: 'Try again',
                })
        console.error(error);
    }
}
  return (
    <>
      <Form className='w-11/12' onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup className="mt-3">
          <FormLabel className='mt-3'>Username: </FormLabel>
          <Controller
            name='Username'
            control={control}
            rules={{
              required: "Please enter your username.", pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Username must contain only letters and numbers."
                            }
            }}
            render={({ field }) => (
              <FormControl
                {...field}
                isInvalid={errors.Username}
                type="email"
                placeholder="Enter username" />
            )}
          />
          {errors.Username && (
            <Feedback type="invalid">{errors.Username.message}</Feedback>
          )}

          <FormLabel className='mt-3'>Password: </FormLabel>
          <Controller
            name='Password'
            control={control}
            rules={{
              required: "Please enter your password.",
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!-\/:-@[-`{-~]).{8,}$/,
                message: "Password must contain at least 8 characters, including at least one letter and one number."
              },
            }}
            render={({ field }) => (
              <FormControl
                {...field}
                isInvalid={errors.Password}
                type="password"
                placeholder="Enter password" />
            )}
          />
          {errors.Password && (
            <Feedback type="invalid">{errors.Password.message}</Feedback>
          )}
          <div className="flex flex-nowrap h-auto mt-2 justify-start items-center">
            <FormCheckInput type="checkbox" />
            <FormLabel className='mt-3 ml-3'>Remember me</FormLabel>
          </div>
          <div className="flex flex-nowrap justify-center mt-8">
            <Button type="submit" disabled={isSubmitting} style={{width: "90%"}}>
              {isSubmitting ? "Signing in..." : "Sign into your account"}
          </Button>
          </div>
        </FormGroup>
      </Form>
    </>
  )
}
