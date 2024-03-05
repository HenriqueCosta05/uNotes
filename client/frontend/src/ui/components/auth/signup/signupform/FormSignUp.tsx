import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Feedback from 'react-bootstrap/esm/Feedback'
import InputMask from 'react-input-mask'
import { getAuthToken, request } from '../../../../../services/utils/getToken'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
interface FormFields {
    name: string;
    Username: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    confirmPassword: string;
    role: string;
}

export default function FormSignUp() {
    const navigate = useNavigate();
    const getToken = getAuthToken();
    const { control, handleSubmit,  getValues, formState: { errors, isSubmitting }, register} = useForm<FormFields>({
        defaultValues: {
            name: "",
            Username: "",
            Email: "",
            PhoneNumber: "",
            Password: "",
        }
    })

const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
        const response = await request('post', '/auth/register', data);
        console.log(response.data);
        if (response.status === 200) {
            return (
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully!',
                    icon: 'success',
                    confirmButtonText: 'Go to user page',
                    didClose: () => {
                        navigate('/app/home');
                    }
                })
            )
        }
    } catch (error) {
        Swal.fire({
                    title: 'Try again!',
                    text: 'User was not created because the email or username have already been taken!',
                    icon: 'warning',
                    confirmButtonText: 'Try again',
                })
        console.error(error);
    }
}
    return (
        <>
            <Form className='w-11/12' onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup className="mt-3">
                    <FormLabel className='mt-3'>Full name: </FormLabel>
                    <Controller
                        name='name'
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
                            isInvalid={errors.name}
                            type="text"
                            placeholder="Enter your full name:"
                    />
                        )}
                    />
                    {errors.name && (
                        <Feedback type="invalid">
                            {errors.name.message}
                        </Feedback>
                    )}
                    
                    
                    <FormLabel className='mt-3'>Choose a Username: </FormLabel>
                    <Controller
                        name="Username"
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
                    isInvalid={errors.Username}
                    type="text"
                    placeholder="Enter username:"
                />
            )}
        />

                    {errors.Username && (
                        <Feedback type="invalid">
                            {errors.Username.message}
                        </Feedback>
                    )}
                    <FormLabel className='mt-3'>E-mail Address: </FormLabel>
                    <Controller
                        name="Email"
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
                                isInvalid={errors.Email}
                                type="email"
                                placeholder="Enter email:"
                            />
                        )}
                    />
                    {errors.Email && (
                        <Feedback type='invalid'>{errors.Email.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Phone Number: </FormLabel>
                    <Controller 
                        name="PhoneNumber"
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
                                isInvalid={errors.PhoneNumber}
                                type="tel"
                                placeholder="(00) 00000-0000"
                                as={InputMask}
                                mask="+55 (99) 99999-9999"
                            />
                        )}
                    />
                    {errors.PhoneNumber && (
                        <Feedback type='invalid'>{errors.PhoneNumber.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Choose a Password: </FormLabel>
                    <Controller
                        name="Password"
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
                                isInvalid={errors.Password}
                                type="password"
                                placeholder="Enter password:"
                            />
                        )}
                    />
                    {errors.Password && (
                        <Feedback type="invalid">{errors.Password.message}</Feedback>
                    )}
                    <FormLabel className='mt-3'>Confirm your Password: </FormLabel>
                    <Controller 
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: "Please confirm your password.",
                            validate: value => value === getValues("Password") || "The passwords do not match."
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
