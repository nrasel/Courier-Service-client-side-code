import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

const MyOrders = () => {
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
        <div className="container">
            <div className="mt-5 pt-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>ProductId</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.productId}</td>
                                    <td>{order.product}</td>
                                    <td>$ {order.price}</td>
                                    <td>{order.date}</td>
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