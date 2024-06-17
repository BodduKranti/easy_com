import { ChangeEvent, useReducer } from 'react'
import { Actionbtn, Inputfield } from '../../component'
import { Registerfun, registerstate } from './RegisterReducerfun'
import { Link } from 'react-router-dom'
import { CameraIcon } from '@heroicons/react/20/solid'

const Register = () => {

    const [state, dispatch] = useReducer(Registerfun, registerstate)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "fieldVal",
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }

    const RegisterSubmit = (e: any) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">


                <div className='w-[80px] h-[80px] group relative overflow-hidden items-center flex justify-center mx-auto border-2 border-yellow-500 rounded-full'>
                    <figure className='w-[90px] h-[90px]'>
                        <img src='./images/person.png' className='w-full h-full object-cover' alt='user_img' />
                    </figure>

                    <div className=' transition-all delay-300 cursor-pointer  absolute -top-[80px] group-hover:top-[35px]'>
                        <input type='file' className='absolute left-0 right-0 mx-auto w-full h-[40px] opacity-0 border-0' />
                        <CameraIcon className='w-5 h-5 cursor-pointer' />

                    </div>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div className="mt-2">
                            <Inputfield
                                name={"name"}
                                type={"text"}
                                autoComplete={'name'}
                                required={true}
                                value={state.field.name}
                                placeholder={"Enter Your Name"}
                                onChange={inputHandler}
                            />

                        </div>

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

                        <div className="mt-2">
                            <Inputfield
                                name={"confirm_password"}
                                type={"password"}
                                autoComplete={'confirm_password'}
                                required={true}
                                value={state.field.confirm_password}
                                placeholder={"Enter Your Confirm Password"}
                                onChange={inputHandler}
                            />
                        </div>


                        <div>
                            <Actionbtn
                                btnText={"Register"}
                                onClick={RegisterSubmit}
                            />
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Already a member ? {' '}
                        <Link to={"/login"} className="font-semibold leading-6 text-[#ae1c9a] hover:text-[#FFBB38]">
                            Click Here to Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
