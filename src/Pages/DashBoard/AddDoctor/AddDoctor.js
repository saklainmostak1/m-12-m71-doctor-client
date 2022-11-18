import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()
    const {data: specialties , isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async() =>{
        const res  = await fetch('http://localhost:5000/appointmentSpecialty')
        const data = await res.json()
        return data

        }
    })
    const handleAddDoctor = data => {
        console.log(data.image);
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(Response => Response.json())
        .then(imgData =>{
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(Response => Response.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added sucessfully`)
                    navigate('/dashboard/managedoctors')
                })
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name', {
                        required: 'name is requared'
                    })}

                        className="input input-bordered w-full max-w-xs" />
                    <p>{errors.name && <p className='text-red-600'>{errors.name.message}</p>}</p>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', {
                        required: 'email is requared'
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    <p>{errors.email && <p className='text-red-600'>{errors.email.message}</p>}</p>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty =>  <option
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }
                       
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register('image', {
                        required: 'Photo is requared'
                    })}

                        className="input input-bordered w-full max-w-xs" />
                    <p>{errors.img && <p className='text-red-600'>{errors.img.message}</p>}</p>
                </div>
                <br />
                <input className='btn btn-accent w-full' value='Add A Doctor' type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;