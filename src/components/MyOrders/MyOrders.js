import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setorders] = useState([])
    useEffect(() => {
        fetch(`https://warm-lake-35445.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setorders(data));
    }, [orders])



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
        <div className="container">
            <div className="mt-5 pt-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.filter(order => order.userEmail === user.email).map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.serviceName}</td>
                                    <td>$ {order.servicePrice}</td>
                                    <td>{order.address}</td>
                                    <td>{order.date}</td>
                                    <td>{order.status}</td>
                                    <td><button onClick={() => handleCancel(order._id)} className="btn btn-danger">Cancel</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default MyOrders;