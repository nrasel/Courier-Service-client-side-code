import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setorders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setorders(data));
    }, [])



    const handleCancel = (id) => {
        const proceed = window.confirm('Are You Sure to Delete')
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successful')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setorders(remainingOrders)
                    }
                })
        }
    }



    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        orders.map(order => <div>
                            <div className="service pb-3">
                                <div className="h-100">
                                    <div className="service-box h-100">
                                        <div className="">
                                            <img className="service-img img-fluid" src={order.imgUrl} alt="" />
                                        </div>
                                        <h4 className="my-4">{order.serviceName}</h4>
                                        <p>{order.userName}</p>
                                        <p>Phone : {order.phone}</p>
                                        <p>{order.userEmail}</p>
                                        <h5>Price : ${order.servicePrice}</h5>
                                        <button onClick={() => handleCancel(order._id)} className="btn btn-success me-4">Delete</button>
                                        <button className="btn btn-danger">Pending</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;