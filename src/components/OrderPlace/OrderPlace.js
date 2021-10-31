import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const OrderPlace = () => {
    const [service, setService] = useState({})
    const { id } = useParams()
    const { user } = useAuth()
    const { title, price, description, img, _id } = service

    useEffect(() => {
        fetch(`https://warm-lake-35445.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])


    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const orderDetails = {
            serviceName: title,
            servicePrice: price,
            imgUrl: img,
            id: _id,
            userName: data.name,
            userEmail: data.email,
            address: data.address,
            phone: data.phone,
            date: data.date,
            status: 'Pending'
        }

        fetch('https://warm-lake-35445.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successful')
                    reset()
                }
            })

    };
    return (
        <div className="container box-shadow py-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 m-auto mt-5 pt-5">
                <div >
                    <div className="service-box m-auto w-75 h-100">
                        <div className="">
                            <img className="service-img img-fluid" src={img} alt="" />
                        </div>
                        <h4 className="my-4">{title}</h4>
                        <p>{description}</p>
                        <h5>Price ${price}</h5>
                        <NavLink to="/services" className="appoinment-btn text-white rounded-pill border-0">Back To Services</NavLink>
                    </div>
                </div>
                <div className="mt-5 pt-5">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} className="form-control border-radius-change w-75 m-auto mb-3"  {...register("name")} />

                        <input type="email" className="form-control border-radius-change  w-75 m-auto mb-3" defaultValue={user.email} {...register("email", { required: true })} />


                        <input placeholder="Address ex. village,city etc." type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("address", { required: true })} />

                        <input type="number" placeholder="Phone" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("phone", { required: true })} />

                        <input type="date" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("date", { required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="sign-in-btn btn btn-danger mb-2" type="submit" value="Order Place" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderPlace;