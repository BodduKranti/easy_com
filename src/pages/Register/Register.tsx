import { ChangeEvent, useReducer } from 'react'
import { Actionbtn, Inputfield } from '../../component'
import { Registerfun, registerstate } from './RegisterReducerfun'
import { Link } from 'react-router-dom'
import { CameraIcon } from '@heroicons/react/20/solid'
// import { imageToBase64 } from '../../utility/ImageTobase64'
import { toast } from 'react-toastify'
import { ApiRequestMethod } from '../../component/CommonApiRequestmethod/CommonApiRequiest'
import { imagaProfileUpload, signupUser } from '../../utility/api_url'
import axios from 'axios'

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


    const InputHanlePic = async (e: any) => {
        const imgfile = e.target.files[0]
        const formData = new FormData();
        formData.append('product', imgfile);
        // const userProfile = await imageToBase64(imgfile)
        try {
            const response = await axios.post(imagaProfileUpload, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            dispatch({
                type: "fieldVal",
                payload: {
                    userimgUrl: response.data.image_url
                }
            })
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    const RegisterSubmit = async (e: any) => {
        e.preventDefault()
        toast.success("Wow so easy!")
        let getObj = { ...state.field }
        console.log(signupUser)
        await ApiRequestMethod({ method: "POST", url: signupUser, postObj: getObj })
    }

    console.log(state)
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">


                <div className='w-[80px] h-[80px] group relative overflow-hidden items-center flex justify-center mx-auto border-2 border-yellow-500 rounded-full'>
                    <figure className='w-[90px] h-[90px]'>
                        <img src={`${state.field.userimgUrl ? state.field.userimgUrl : './images/person.png'}`} className='w-full h-full object-cover' alt='user_img' />
                    </figure>

                    <div className=' transition-all delay-300 cursor-pointer  absolute -top-[80px] group-hover:top-[35px]'>
                        <label>
                            <input type='file' className='hidden' onChange={InputHanlePic} />
                            <CameraIcon className='w-5 h-5 cursor-pointer' />
                        </label>
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
