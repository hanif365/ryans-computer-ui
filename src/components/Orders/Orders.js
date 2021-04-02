import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // new code
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setProducts(data)
    //         })
    // }, [])

    return (
        <div className="py-5 my-5">
            <Navbar></Navbar>
            <h1>This is order page</h1>
            <h3>You have {orders.length} Bookings</h3>
            {
                orders.map(order => {
                    return <div>
                        <li>{order.Product_Name}</li>
                        <li>{order.Price}</li>
                        <li>{order.OrderTime}</li>
                    </div>
                })
            }
        </div>
    );
};

export default Orders;