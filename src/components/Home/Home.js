import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';
import './Home.css'




const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <Carousel></Carousel>
            {
                products.length === 0 && <div className="d-flex justify-content-center"><div class="spinner-border text-info " role="status">
                    <span class="visually-hidden text-center">Loading...</span>
                </div></div>
            }

            <h1 className="text-center py-5 home-content">Our Product</h1>

            <div className="d-flex flex-wrap m-auto home-content">


                {
                    products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
                }

            </div>
        </div>
    );
};

export default Home;