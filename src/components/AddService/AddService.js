import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successful')
                    reset()
                }
            })

    };
    return (
        <div>
            <div className="mt-5 pt-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue="" placeholder="Img Url" className="form-control border-radius-change w-50 m-auto mb-3"  {...register("img")} />

                    <input type="text" placeholder="Service Name" className="form-control border-radius-change  w-50 m-auto mb-3" defaultValue="" {...register("title", { required: true })} />

                    <input type="text" placeholder="Price" className="form-control border-radius-change  w-50 m-auto mb-3" defaultValue="" {...register("price", { required: true })} />

                    <textarea placeholder="Description" type="text" className="form-control border-radius-change  w-50 m-auto mb-3" {...register("description", { required: true })} />


                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;