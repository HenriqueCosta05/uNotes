import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface FormFields {
  email: string;
  password: string;
}

export default function FormSignIn() {
  const { control, handleSubmit, formState: { errors, isSubmitting }, register} = useForm<FormFields>({
        defaultValues: {
          email: "",
          password: ""
        }
    })
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }
  return (
    <>
      <Form className='w-11/12' onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup className="mt-3">
          <FormLabel className='mt-3'>E-mail Address: </FormLabel>
          <Controller
            name='email'
            control={control}
            rules={{
              required: "Please enter your email.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address."
              },
            }}
            render={({ field }) => (
              <FormControl
                {...field}
                isInvalid={errors.email}
                type="email"
                placeholder="Enter email" />
            )}
          />
          {errors.email && (
            <Feedback type="invalid">{errors.email.message}</Feedback>
          )}

          <FormLabel className='mt-3'>Password: </FormLabel>
          <Controller
            name='password'
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
                isInvalid={errors.password}
                type="password"
                placeholder="Enter password" />
            )}
          />
          {errors.password && (
            <Feedback type="invalid">{errors.password.message}</Feedback>
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
