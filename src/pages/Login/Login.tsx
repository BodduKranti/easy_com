import React, { ChangeEvent, useReducer } from 'react'
import { Actionbtn, Inputfield } from '../../component'
import { loginReducer, loginStates } from './LoginReducerFun'
import { Link } from 'react-router-dom'

const Login = () => {

    const [state, dispatch] = useReducer(loginReducer, loginStates)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "fieldVal",
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }


    const LoginSubmit = (e: any) => {
        e.preventDefault()
    }

    console.log(state)

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>

                            <div className="mt-2">
                                <Inputfield
                                    name={"email"}
                                    type={"email"}
                                    autoComplete={'email'}
                                    required={true}
                                    value={state.field.email}
                                    placeholder={"Enter Your Email"}
                                    onChange={inputHandler}
                                />

                            </div>
                        </div>

                        <div>

                            <div className="mt-2">
                                <Inputfield
                                    name={"password"}
                                    type={"password"}
                                    autoComplete={'password'}
                                    required={true}
                                    value={state.field.password}
                                    placeholder={"Enter Your Password"}
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className="flex items-center justify-end mt-2">

                                <div className="text-sm">
                                    <Link to={"/forgotpwd"} className="font-semibold text-[#ae1c9a] hover:text-[#FFBB38]">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Actionbtn
                                btnText={"SignIn"}
                                onClick={LoginSubmit}
                            />
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Not a member ? {' '}
                        <Link to={'/register'} className="font-semibold leading-6 text-[#ae1c9a] hover:text-[#FFBB38]">
                            Create Your Account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
