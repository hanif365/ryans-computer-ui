import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://lit-savannah-47451.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    return (
        <div className="py-5 my-5 order-container">
            <Navbar></Navbar>
            {
                loggedInUser && <h1 className="ms-5">You Log In with <span className="text-success">{loggedInUser.email}</span></h1>
            }
            <div className="order-content container my-5">
                <h3>You have {orders.length} Bookings</h3>
                {
                    orders.map(order => {
                        return <div className="container ms-auto ps-5 ">
                            <div className="row">
                                <div className="col">
                                    <h5>{order.Product_Name}</h5>
                                    <h5>{order.Price}</h5>
                                    <h5>{order.OrderTime}</h5>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    })
                }
                <button className="btn btn-success ms-5 w-50">Confirm</button>
            </div>
        </div>
    );
};

export default Orders;