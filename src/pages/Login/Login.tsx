import React, { ChangeEvent, useEffect, useReducer, useState } from 'react'
import { Actionbtn, Inputfield } from '../../component'
import { loginReducer, loginStates } from './LoginReducerFun'
import { Link } from 'react-router-dom'
import { ApiRequestMethod } from '../../component/CommonApiRequestmethod/CommonApiRequiest'
import { loginUser } from '../../utility/api_url'
import { toast } from 'react-toastify'
import { getCookie } from '../../utility/getToken'

const Login = () => {

    const [state, dispatch] = useReducer(loginReducer, loginStates)
    const [token, setToken] = useState<any>('')

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "fieldVal",
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }


    const LoginSubmit = async (e: any) => {
        e.preventDefault()
        dispatch({
            type: "fieldVal",
            payload: {
                loader: true
            }
        })
        const header: any = { withCredentials: true }
        const getUser = { ...state.field }
        const headerObj = { ...header }
        const response = await ApiRequestMethod({ method: 'POST', url: loginUser, postObj: getUser });
        console.log(response)
        if (response.success) {
            setTimeout(() => {
                toast.success(response.data.data.message)
                dispatch({
                    type: "fieldVal",
                    payload: {
                        loader: false,
                        email: '',
                        password: ''
                    }
                })
            }, 2000)
        } else {
            setTimeout(() => {
                // toast.success(response.data.data.message)
                dispatch({
                    type: "fieldVal",
                    payload: {
                        loader: false,
                        email: '',
                        password: ''
                    }
                })
                toast.error(response.error)
            }, 2000)
        }
    }

    useEffect(() => {
        const token = getCookie('token')
        console.log(token)
    }, [])
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className='w-[80px] h-[80px] relative overflow-hidden items-center flex justify-center mx-auto border-2 border-yellow-500 rounded-full'>
                    <figure className='w-[90px] h-[90px]'>
                        <img src={`${state.field.userimgUrl ? state.field.userimgUrl : './images/person.png'}`} className='w-full h-full object-cover' alt='user_img' />
                    </figure>
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
                                btnText={
                                    state.field.loader ?
                                        <div className='w-full flex justify-center items-center'>
                                            <div className='innerBtnloader'></div>
                                        </div> :
                                        <>
                                            Login
                                        </>
                                }
                                onClick={LoginSubmit}
                                disabled={state.field.email && state.field.password ? false : true}
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
