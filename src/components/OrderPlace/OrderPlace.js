import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const OrderPlace = () => {
    const { id } = useParams()
    const { user } = useAuth()

    const [serviceDetails, setServiceDetails] = useState([])
    const [singleServiceDetails, setsingleServiceDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    console.log(singleServiceDetails);

    useEffect(() => {
        const foundService = serviceDetails.find(service => service._id === id)
        setsingleServiceDetails(foundService)
    }, [serviceDetails, id])




    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                if (res.data.insertedId) {
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
                            <img className="service-img img-fluid" src={singleServiceDetails?.img} alt="" />
                        </div>
                        <h4 className="my-4">{singleServiceDetails?.title}</h4>
                        <p>{singleServiceDetails?.description}</p>
                        <h5>Price ${singleServiceDetails?.price}</h5>
                        <NavLink to="/services" className="appoinment-btn text-white rounded-pill border-0">Back To Services</NavLink>
                    </div>
                </div>
                <div className="mt-5 pt-5">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} className="form-control border-radius-change w-75 m-auto mb-3"  {...register("name")} />

                        <input type="email" className="form-control border-radius-change  w-75 m-auto mb-3" defaultValue={user.email} {...register("email", { required: true })} />

                        <input defaultValue={singleServiceDetails?.title} type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("product", { required: true })} />

                        <input defaultValue={singleServiceDetails?._id} className="form-control border-radius-change  w-75 m-auto mb-3" {...register("productId", { required: true })} />

                        <input defaultValue={singleServiceDetails?.price} placeholder="Price" type="number" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("price", { required: true })} />

                        <input placeholder="Address ex. village,city etc." type="text" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("address", { required: true })} />

                        <input placeholder="Phone" type="tel" className="form-control border-radius-change  w-75 m-auto mb-3" {...register("address", { required: true })} />

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