import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import email_icon from '../assets/mail.png'
import name_icon from '../assets/user.png'
import password_icon from '../assets/padlock.png'
import travel_icon from '../assets/travel.png'
import plane_icon from '../assets/plane.png'
import bed_icon from '../assets/bed.png'


// TODO: CreateAccount back end call to create user
// TODO: ValidateLogin back end call to get user data

export const LoginSignup = () => {
    let navigate = useNavigate()
    const [isLoginView, setIsLogin] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorsCreate, setErrorsCreate] = useState({})
    const [errorsLogin, setErrorsLogin] = useState({})

    const CreateAccount = (event) => {
        event.preventDefault();
        const errors = ValidateCreateAccount();
        setErrorsCreate(errors)

        if (Object.keys(errors).length == 0){
            //TODO: add backend call creating user before navigating
            navigate('/')
        }
    }

    const ValidateCreateAccount = () => {
        const error = {};
    
        if (!name) {
            error.name = "name required"
        }
    
        if (!email) {
            error.email = "email required"
        } else if (!/\S+@\S+\./.test(email)) {
            error.email = "please use a real email"
        }
        if (!password) {
            error.password = "password required"
        } else if (password.length < 6) {
            error.password = "password needs to be at least 6 characters"
        }

        return error
    
    }

    const Login = (event) => {
        event.preventDefault()
        const errors = ValidateLogin();
        setErrorsLogin(errors)
        if (Object.keys(errors).length == 0){
            navigate('/')
        }
    }

    const ValidateLogin = () => {
        const error = {};
        //TODO add backend call to check that user exists before navigating
        //current way of handling error
        error.noUserFound = "No account found for that email and password"
        return error;
    }
    
    return (
        <div className='min-h-screen flex'>
            <div className='w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center'>
                <div className='flex items-center mb-4'>
                    <span className='text-yellow-400 text-3xl mr-3'>◇</span>
                    <span className='text-white font-semibold text-3xl'>Ziggy</span>
                </div>
                {isLoginView ? (

                    <div className='w-full max-w-sm'>
                        <h2 className='font-bold items-center text-center text-2xl text-white mb-8'>
                            Create Account Now
                        </h2>
                        <div className=''>
                            <div className='flex items-center bg-white rounded-md mt-4 px-4 py-4'>
                                <img src={name_icon} alt='' className='w-8 h-8 mr-5' />
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Full Name' className='bg-white w-full text-base py-2 text-black' />
                            </div>
                            {errorsCreate.name && <div className='text-red-600 text-sm mb-4'>{errorsCreate.name}</div>}
                            <div className='flex items-center bg-white rounded-md mt-4 px-4 py-4'>
                                <img src={email_icon} alt='' className='w-8 h-8 mr-5' />
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='bg-white w-full text-base py-2 text-black' />
                            </div>
                            {errorsCreate.email && <div className='text-red-600 text-sm mb-4'>{errorsCreate.email}</div>}
                            <div className='flex items-center bg-white rounded-md mt-4 px-4 py-4'>
                                <img src={password_icon} alt='' className='w-8 h-8 mr-5' />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='bg-white w-full text-base py-2 text-black' />
                            </div>
                            {errorsCreate.password && <div className='text-red-600 text-sm mb-4'>{errorsCreate.password}</div>}

                        </div>
                        <span className='text-sm text-center text-white'>Already have an account?</span>
                        <span> 
                            <button onClick={() => setIsLogin(false)} className='ml-2 hover:underline text-sm text-center text-yellow-500'>Login </button>
                        </span>
                        <div className='flex justify-center'>
                            <button onClick={CreateAccount}className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 mt-4 rounded-4xl font-semibold justify-center'>
                                Create Account
                            </button>
                        </div>


                    </div>
                ) :
                    <div className='w-full max-w-sm'>
                        <h2 className='font-bold items-center text-center text-2xl text-white mb-8'>
                            Login
                        </h2>
                        <div className=''>
                            <div className='flex items-center bg-white rounded-md mb-4 px-4 py-4'>
                                <img src={name_icon} alt='' className='w-8 h-8 mr-5' />
                                <input type="text" placeholder='Full Name' className='bg-white w-full text-base py-2 text-black' />
                            </div>
                            <div className='flex items-center bg-white rounded-md mb-4 px-4 py-4'>
                                <img src={password_icon} alt='' className='w-8 h-8 mr-5' />
                                <input type="password" placeholder='Password' className='bg-white w-full text-base py-2 text-black' />
                            </div>
                            {errorsLogin.noUserFound && <div className='text-red-600 text-sm mb-4'>{errorsLogin.noUserFound}</div>}

                        </div>
                        <span className='text-sm text-center text-white'>New here?</span>
                        <span> 
                            <button onClick={() => setIsLogin(true)} className='ml-2 hover:underline text-sm text-center text-yellow-500'> Create an account </button>
                        </span>
                        <div className='flex justify-center'>
                            <button onClick={Login} className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 mt-4 rounded-4xl font-semibold justify-center'>
                                Login
                            </button>
                        </div>


                    </div>}


            </div>

            <div className='w-1/2 flex flex-col justify-center items-center p-15'>
                <div className='flex items-center bg-transparent shadow-sm rounded-md mb-10 px-4 py-4 w-full'>
                    <img src={bed_icon} alt='' className='w-16 h-16 mr-4' />
                    <div className=''>
                        <h3 className='font-semibold mb-2'>Affordable Lodgings</h3>
                        <p className='text-sm text-gray-600'> Find local accommodations with the best rates</p>
                    </div>

                </div>
                <div className='flex items-center bg-transparent shadow-sm rounded-md mb-10 px-4 py-4 w-full'>
                    <img src={plane_icon} alt='' className='w-16 h-16 mr-4' />
                    <div className=''>
                        <h3 className='font-semibold mb-2'>Available Flights</h3>
                        <p className='text-sm text-gray-600'> Get the best flights and hotels all in one place</p>
                    </div>

                </div>
                <div className='flex items-center bg-transparent shadow-sm rounded-md mb-10 px-4 py-4 w-full'>
                    <img src={travel_icon} alt='' className='w-16 h-16 mr-4' />
                    <div className=''>
                        <h3 className='font-semibold mb-2'>Satisfaction Gaurantee</h3>
                        <p className='text-sm text-gray-600'> Verified ratings from other travelers</p>
                    </div>

                </div>
            </div>


        </div>
    )


    
}



