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
        const url = `https://lit-savannah-47451.herokuapp.com/addProduct`
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
        fetch('https://lit-savannah-47451.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div className="container-fluid my-5 py-5 admin-container">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-3 d-flex flex-column">
                    {/* <Link to="/home">Home</Link> */}
                    <button className="btn btn-info py-3" onClick={() => setShowManage(true)}>Manage Product</button>
                    <button className="btn btn-info my-4 py-3" onClick={() => setShowManage(false)}>Add Product</button>
                    <button className="btn btn-info py-3" >Edit Product</button>
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
                                <div className="row">
                                    <div className="col-md-6">
                                        <input name="Product_Name" className="my-5 form-control" placeholder="Add Product Name" ref={register} />

                                        <input name="exampleRequired" className="form-control" type="file" onChange={handleImgUpload} />
                                    </div>
                                    <div className="col-md-6">
                                        <input name="Price" className="my-5 form-control" placeholder="Add Price" ref={register} />

                                        <input name="Product_Description" className=" form-control" placeholder="Add Product Description" ref={register} />

                                    </div>
                                </div>


                                <input className="my-5  btn btn-info ps-4" type="submit" />
                            </form>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Admin;