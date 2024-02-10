import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Feedback from 'react-bootstrap/esm/Feedback'
import InputMask from 'react-input-mask'

interface FormFields {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export default function FormSignUp() {
    const { control, handleSubmit,  getValues, formState: { errors, isSubmitting }, register} = useForm<FormFields>({
        defaultValues: {
            fullName: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    })
const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
}
    return (
        <>
            <Form className='w-11/12' onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup className="mt-3">
                    <FormLabel className='mt-3'>Full name: </FormLabel>
                    <Controller
                        name='fullName'
                        control={control}
                        rules={{
                            required: "Please enter your full name.",
                            pattern: {
                                value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/,
                                message: "Please enter your full name."
                            }, 
                            }}
                        render={({field}) => (
                            <FormControl
                            {...field}
                            isInvalid={errors.fullName}
                            type="text"
                            placeholder="Enter your full name:"
                    />
                        )}
                    />
                    {errors.fullName && (
                        <Feedback type="invalid">
                            {errors.fullName.message}
                        </Feedback>
                    )}
                    
                    
                    <FormLabel className='mt-3'>Choose a Username: </FormLabel>
                    <Controller
                        name="username"
                        control={control}
                        rules={{
                            required: "Please enter a username.", pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Username must contain only letters and numbers."
                            }
                        }}
                       render={({ field }) => (
                <FormControl
                    {...field}
                    isInvalid={errors.username}
                    type="text"
                    placeholder="Enter username:"
                />
            )}
        />

                    {errors.username && (
                        <Feedback type="invalid">
                            {errors.username.message}
                        </Feedback>
                    )}
                    <FormLabel className='mt-3'>E-mail Address: </FormLabel>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Please enter a email address.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address."
                            }
                        }}
                        render={({ field }) => (
                            <FormControl
                                {...field}
                                isInvalid={errors.email}
                                type="email"
                                placeholder="Enter email:"
                            />
                        )}
                    />
                    {errors.email && (
                        <Feedback type='invalid'>{errors.email.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Phone Number: </FormLabel>
                    <Controller 
                        name="phone"
                        control={control}
                        rules={{
                            required: "Please enter a phone number.",
                            pattern: {
                                value: /^\+\d{2} \(\d{2}\) \d{5}-\d{4}$/,
                                message: "Please enter a valid phone number."
                            }
                        }}
                        render={({ field }) => (
                            <FormControl
                                {...field}
                                isInvalid={errors.phone}
                                type="tel"
                                placeholder="(00) 00000-0000"
                                as={InputMask}
                                mask="+55 (99) 99999-9999"
                            />
                        )}
                    />
                    {errors.phone && (
                        <Feedback type='invalid'>{errors.phone.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Choose a Password: </FormLabel>
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: "Please enter a password.",
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!-\/:-@[-`{-~]).{8,}$/,
                                message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                            }
                        }}
                        render={({ field }) => (
                            <FormControl
                                {...field}
                                isInvalid={errors.password}
                                type="password"
                                placeholder="Enter password:"
                            />
                        )}
                    />
                    {errors.password && (
                        <Feedback type="invalid">{errors.password.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Confirm your Password: </FormLabel>
                    <Controller 
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: "Please confirm your password.",
                            validate: value => value === getValues("password") || "The passwords do not match."
                        }}
                        render={({ field }) => (
                            <FormControl
                                {...field}
                                isInvalid={errors.confirmPassword}
                                type="password"
                                placeholder="Confirm password:"
                            />
                        )}
                    />
                    {errors.confirmPassword && (
                        <Feedback type='invalid'>{errors.confirmPassword.message}</Feedback>
                    )}
                    <div className="flex flex-nowrap h-auto mt-2 justify-start items-center">
                        <FormCheckInput type="checkbox" />
                        <FormLabel className='mt-3 ml-3'>Remember me</FormLabel>
                    </div>
                    <div className="flex flex-nowrap justify-center mt-8">
                        <Button type="submit" style={{ width: "90%" }} disabled={isSubmitting}>
                            {isSubmitting ? "Signing up..." : "Create your account"}
                        </Button>
                    </div>
                </FormGroup>
            </Form>
        </>
    )
}
