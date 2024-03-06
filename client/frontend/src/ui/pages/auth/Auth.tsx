import React, { useState, useEffect } from 'react';
import Header from '../../components/shared/header/Header';
import useFetch from '../../../services/hooks/useFetch/UseFetch';
import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import readJSON from '../../../services/utils/readJSON';
import ExternalLoginButton from '../../components/auth/ExternalLoginButton';
import FormSignIn from '../../components/auth/signin/signinform/FormSignIn';
import FormSignUp from '../../components/auth/signup/signupform/FormSignUp';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
type login = {
    isLoginPage: boolean;
}
export default function Auth({isLoginPage}: login) {
    const { data: authpageinfo, isPending, error } = useFetch('http://localhost:8000/authpageinfo');
    const [loginData, setLoginData] = useState<any | null>(null);
    const [registerData, setRegisterData] = useState<any | null>(null);
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await readJSON();
            setLoginData(response.authpageinfo.login);
            setRegisterData(response.authpageinfo.register);
        };

        fetchData();
    }, []);

     const handleLoginClick = () => {
        setIsLogin(true);
        navigate("/auth/login");
        };
        
        const handleRegisterClick = () => {
            setIsLogin(false);
            navigate("/auth/register");
        };

    return (
        <>
            {error && <p>{error}</p>}
            {isPending && <Spinner animation='border' variant='primary' className='p-4 d-flex align-items-center mx-auto my-40'/>}
            {!isPending && (
                <>
                    <Header logo='uNotes' buttontext='Back to home' buttonLink='/'  />
                    {isLogin ? (
                        <>
                             <div className="flex flex-nowrap mx-auto items-stretch justify-center my-28">
                                <div className="flex flex-col bg-purple-900 w-2/5 p-12 justify-center items-center rounded-tl-2xl rounded-bl-2xl">
                                    <img src="/assets/logo.svg" alt="logo" width={120} />
                                    <h1 className='font-black text-purple-200 lg:text-4xl text-center'>{loginData && loginData[0].name}</h1>
                                    <p className='text-slate-50 lg:text2xl'>{loginData && loginData[1].name}</p>
                                </div>
                                <div className="flex flex-col min-h-full bg-white w-2/5 justify-start items-center rounded-tr-2xl rounded-br-2xl p-24">
                                    <ButtonGroup style={{display: 'flex', flexWrap: 'nowrap', marginBottom: '40px', width: '100%', alignItems: 'stretch'}}>
           <Button variant="primary" style={{ borderRadius: "15px 0 0 15px", width: "100%"}}  onClick={handleLoginClick}>Login</Button>
            <Button variant="primary" style={{ borderRadius: "0 15px 15px 0", width: "100%", borderLeft: "1px solid rgb(233 213 255)"}} className="w-1/2" onClick={handleRegisterClick}>Register</Button>
                                    </ButtonGroup>
                                    <ExternalLoginButton text='Log in with Google' link='/auth/google' iconUrl='/assets/icons8-google.svg' iconWidth={24} />
                                    <ExternalLoginButton text='Log in with Apple' link='/auth/apple' iconUrl='/assets/icons8-apple.svg' iconWidth={24} />
                                    <FormSignIn />
                                </div>
                            </div>
                        
                           
                        </>    
                    ) : (
                            <>
                                <div className="flex flex-nowrap mx-auto items-stretch justify-center my-28">
                                <div className="flex flex-col bg-purple-900 w-2/5 p-12 justify-center items-center rounded-tl-2xl rounded-bl-2xl">
                                    <img src="/assets/logo.svg" alt="logo" width={120} />
                                    <h1 className='font-black text-purple-200 lg:text-4xl text-center'>{registerData && registerData[0].name}</h1>
                                    <p className='text-slate-50 lg:text2xl'>{registerData && registerData[1].name}</p>
                                </div>
                                <div className="flex flex-col min-h-full bg-white w-2/5 justify-start items-center rounded-tr-2xl rounded-br-2xl p-24">
                                    <ButtonGroup style={{display: 'flex', flexWrap: 'nowrap', marginBottom: '40px', width: '100%', alignItems: 'stretch'}}>
                                                   <Button variant="primary" style={{ borderRadius: "15px 0 0 15px", width: "100%"}}  onClick={handleLoginClick}>Login</Button>
            <Button variant="primary" style={{ borderRadius: "0 15px 15px 0", width: "100%", borderLeft: "1px solid rgb(233 213 255)"}} className="w-1/2" onClick={handleRegisterClick}>Register</Button>
                                        </ButtonGroup>
                                        <ExternalLoginButton text='Sign up with Google' link='/auth/google' iconUrl='/assets/icons8-google.svg' iconWidth={24} />
                                    <ExternalLoginButton text='Sign up with Apple' link='/auth/apple' iconUrl='/assets/icons8-apple.svg' iconWidth={24} />
                                    <FormSignUp />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}    
        </>
    );
}
