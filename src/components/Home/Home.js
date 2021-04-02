import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';




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
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            {
                products.length === 0 && <div className="d-flex justify-content-center"><div class="spinner-border text-info " role="status">
                    <span class="visually-hidden text-center">Loading...</span>
                </div></div>
            }

            <div className="d-flex flex-wrap m-auto">


                {
                    products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
                }

            </div>
        </div>
    );
};

export default Home;