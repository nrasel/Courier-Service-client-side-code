import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const OrderPlace = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mt-5 pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.name} type="text" {...register("name")} />


                <input type="email" defaultValue={user.email} {...register("email", { required: true })} />

                <input type="" defaultValue={user.email} {...register("address", { required: true })} />


                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default OrderPlace;