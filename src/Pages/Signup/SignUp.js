import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const handleSignUp = (data) =>{
        console.log(data);
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
                        minLength: {value: 6, message: 'password must be 6 character'}
                    })} 
                      className="input input-bordered w-full max-w-xs" />   
                      <p>{errors.password && <p className='text-red-600'>{errors.password.message}</p> }</p>               
                </div>
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