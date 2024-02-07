import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

export default function FormSignIn() {
  return (
    <>
      <Form className='w-11/12'>
        <FormGroup className="mt-3">
          <FormLabel className='mt-3'>E-mail Address: </FormLabel>
          <FormControl type="email" placeholder="Enter email" />
          <FormLabel className='mt-3'>Password: </FormLabel>
          <FormControl type="password" placeholder="Enter password" />
          <div className="flex flex-nowrap h-auto mt-2 justify-start items-center">
            <FormCheckInput type="checkbox" />
            <FormLabel className='mt-3 ml-3'>Remember me</FormLabel>
          </div>
          <div className="flex flex-nowrap justify-center mt-8">
            <Button href='/app' style={{width: "90%"}}>
              Sign In to your account
          </Button>
          </div>
        </FormGroup>
      </Form>
    </>
  )
}
