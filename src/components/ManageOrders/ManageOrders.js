import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setorders] = useState([])
    const [statusId, setStatusId] = useState()
    useEffect(() => {
        fetch(`https://warm-lake-35445.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setorders(data));
    }, [statusId, orders])



    const handleCancel = (id) => {
        const proceed = window.confirm('Are You Sure to Delete')
        if (proceed) {
            const url = `https://warm-lake-35445.herokuapp.com/orders/${id}`
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

    const handleStatus = (id) => {
        const url = `https://warm-lake-35445.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                alert("Approved Successful")
                setStatusId(id)
            })
    }



    return (
        <div className="container mt-5 pt-5">
            <h2>Total Ordered Services : {orders.length}</h2>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        orders.map(order => <div key={order._id}>
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
                                        <button onClick={() => handleCancel(order._id)} className="btn btn-danger me-4">Delete</button>
                                        {order.status === "Pending" ?
                                            <button button onClick={() => handleStatus(order._id)} className="btn btn-success">Pending</button>
                                            :
                                            <button onClick={() => handleStatus(order._id)} className="btn btn-success">Approve</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default ManageOrders;