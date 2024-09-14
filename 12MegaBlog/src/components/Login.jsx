import React, {useState ,}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authlogin, logout} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
//we use useForm for better form handling

function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register, handleSubmit}=useForm()
    //we need register and handleSubmit for form handling and these are provided by useForm
    //read the documentation from "https://react-hook-form.com/docs/useform"
    //That's why do not forget to install react-hook-form by running "npm install react-hook-form"
    //we are using react-hook-form because it is a better way to handle forms in react
    //so do not create another state for form handling, just use useForm and it will handle everything for you
    //do not create another handleSubmit function, just use handleSubmit from useForm. you can write your own function and pass it to handleSubmit(that we did by creating login function)
    const [error, setError]=useState('')


    const login= async (data)=>{
        setError('')
        try{
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentuser()
                if(userData) dispatch(authlogin(userData));
                    //we are writing authlogin instead of login because we have imported login as authlogin                
                navigate('/')
            }
        }catch(e){
            setError(e.message)
        }
    }

  return (
    <div className='flex items-center justifu-center w-full '>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            {/* handleSubmit is a method where we say how we will handle the submit, as here we wanna handle the submit through our login function that's why we passed login as argument. and this handleSubmit is from */}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        //we have to inject js here as we are using useForm, and we have to use register to register the input field
                        //and we are spreading register because we have to pass all the properties of register to input field
                        //else everytime it will overwrite the properties of register
                        //inside register use a unique name for each input field
                        //here "email" is a key, and we can access the value of input field by using this key
                        //we also have to pass the value of input field to register, so that it can store the value of input field
                        //these all are syntax of react-hook-form
                        {...register("email",{
                            required: true,//this is a validation rule, that email is required
                            validate: {//this is a nested object, where we can write our custom validation rules, here we are matching the email pattern
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password",{
                            required: true,
                        })}
                    />
                    <Button
                        type='submit'
                        className='w-full'
                        Children={'Sign in'}
                    >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login