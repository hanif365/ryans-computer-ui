import React, { useEffect, useState } from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ManageProduct from '../ManageProduct/ManageProduct';
import Navbar from '../Navbar/Navbar';

const Admin = () => {
    const [showManage, setShowManage] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            Product_Name: data.Product_Name,
            imageURL: imageURL,
            Price: data.Price,
            Product_Description: data.Product_Description
        };
        const url = `http://localhost:5000/addProduct`
        // console.log(data)

        // console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res)
                window.location.reload(false)
            })

    };

    const handleImgUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '6f873b434b5debc1f50d236f35571a75');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response);
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // New code
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
        <div className="container-fluid my-5 py-5">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-3 d-flex flex-column">
                    {/* <Link to="/home">Home</Link> */}
                    <button onClick={() => setShowManage(true)}>Manage Product</button>
                    <button onClick={() => setShowManage(false)}>Add Product</button>
                    <button>Edit Product</button>
                </div>
                <div className="col-md-9">
                    {showManage ? <div>
                        {
                            products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                        }
                    </div> :

                        <div>
                            <h1>Add Product</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="Product_Name" placeholder="Add Product Name" ref={register} />

                                <input name="exampleRequired" type="file" onChange={handleImgUpload} />

                                <input name="Price" placeholder="Add Price" ref={register} />

                                <input name="Product_Description" placeholder="Add Product Description" ref={register} />

                                <input type="submit" />
                            </form>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Admin;