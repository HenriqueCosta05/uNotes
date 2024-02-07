        import React from 'react'
        import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
        import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

        export default function FormSignUp() {
        return (
            <>
            <Form className='w-11/12'>
                    <FormGroup className="mt-3">
                    <FormLabel className='mt-3'>Full name: </FormLabel>
                    <FormControl type="text" placeholder="Enter your full name:" />
                    <FormLabel className='mt-3'>Choose a Username: </FormLabel>
                    <FormControl type="text" placeholder="Enter username:" />
                <FormLabel className='mt-3'>E-mail Address: </FormLabel>
                <FormControl type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" placeholder="Enter email:" />
                <FormLabel className='mt-3'>Phone Number: </FormLabel>
                <FormControl type="tel" placeholder="Enter phone number:" />
                <FormLabel className='mt-3'>Choose a Password: </FormLabel>
                <FormControl type="password" placeholder="Enter password:" />
                <FormLabel className='mt-3'>Confirm your Password: </FormLabel>
                <FormControl type="password" placeholder="Enter password:" />
                <div className="flex flex-nowrap h-auto mt-2 justify-start items-center">
                    <FormCheckInput type="checkbox" />
                    <FormLabel className='mt-3 ml-3'>Remember me</FormLabel>
                </div>
                <div className="flex flex-nowrap justify-center mt-8">
                    <Button href='/app' style={{width: "90%"}}>
                    Create account
                </Button>
                </div>
                </FormGroup>
            </Form>
            </>
        )
        }
