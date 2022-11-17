import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = (data) =>{
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
                const user = result.user
                console.log(user);
                toast.success('User Created SucessFully')
                const userInfo ={
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email)
                })
                .catch(error => {
                    console.error(error)
                    
                })
        })
        .catch(error => {
            setSignUpError(error.message)
            console.error(error)
        })
    }
    const saveUser = (name, email) =>{
        const user = {name, email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
        .then(Response => Response.json() )
        .then(data => {
            console.log('save user',data)
            
            navigate('/')
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-2xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name', {
                        required: 'name is requared'
                    })}
                    
                      className="input input-bordered w-full max-w-xs" />  
                       <p>{errors.name && <p className='text-red-600'>{errors.name.message}</p> }</p>   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', {
                        required: 'email is requared'
                    })}                    
                      className="input input-bordered w-full max-w-xs" />  
                       <p>{errors.email && <p className='text-red-600'>{errors.email.message}</p> }</p>   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register('password', {
                        required: 'password is requared',
                        minLength: {value: 6, message: 'password must be 6 character'},
                        pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ , message:'password must be strong'}
                    })} 
                      className="input input-bordered w-full max-w-xs" />   
                      <p>{errors.password && <p className='text-red-600'>{errors.password.message}</p> }</p>              
                </div>
                {  signUpError && <p className='text-red-600'>{signUpError}</p> }
                <br />
                <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
               
            </form>
            <p>Already Have An Account <Link className='text-secondary' to='/login'>Please Login</Link> </p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;