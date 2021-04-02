import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = (props) => {
    console.log(props);
    console.log(props.product);
    const { _id, Product_Name, imageURL, Product_Description, Price } = props.product;

    const history = useHistory();

    const handleProduct = (productId) =>{
        history.push(`/products/${productId}`);
    }
    return (
        <div className="main-card">
            <div className="card product-details-container m-3 p-4">
                <img src={imageURL} className="card-img-top" alt="product-image" />
                <div className="card-body">
                    <h5 className="card-title">{Product_Name}</h5>
                    <p className="card-text">{Product_Description}</p>
                    <p>${Price}</p>

                    <button onClick={() => handleProduct(_id)} className="btn btn-primary">Buy Now</button>
                    {/* <a href= className="btn btn-primary">Buy Now</a> */}
                    {/* <Link to={`/products/${_id}`}  className="btn btn-primary">Buy Now</Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;