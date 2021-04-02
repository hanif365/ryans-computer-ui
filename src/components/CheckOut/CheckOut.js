import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Orders from '../Orders/Orders';


const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(props)
    const { productId } = useParams();
    console.log(productId);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                console.log(data[0].Price)
                console.log(data[0].Product_Name)
                setProducts(data[0])
            })
    }, [])

    // extra para
    // const orderDetails = {...loggedInUser, orderTime: new Date()}

    // order new 

    const orderPlaced = () => {
        const orderData = {
            Product_Name: products.Product_Name,
            Price: products.Price,
            Product_Description: products.Product_Description,
            ProductImage_URL: products.imageURL,
            email: loggedInUser.email,
            OrderTime: new Date().toDateString('dd/MM/yyyy')

        };
        const url = `http://localhost:5000/addOrder`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => {
                console.log('server side response', res)
                // window.location.reload(false)
            })
            .then(data => {
                alert('Your order placed successfully')
            })
    }

    // const handleProduct = (productId) =>{
    //     history.push(`/products/${productId}`);
    // }

    const history = useHistory();
    const orderDetails = () =>{
        history.push(`/orders`);
    }

    return (
        <div className="my-5 py-5">
            <Navbar></Navbar>
            <h1>This is checkOut page</h1>
            <h2>Product Name: {products.Product_Name}</h2>
            <img src={products.imageURL} alt="product-image" />
            <h2>Price : {products.Price}</h2>
            <p>Product des: {products.Product_Description}</p>
            <button onClick={() => { orderPlaced(); orderDetails()}}>Checkout</button>

            <h1>{loggedInUser.email}</h1>
        </div>
    );
};

export default CheckOut;