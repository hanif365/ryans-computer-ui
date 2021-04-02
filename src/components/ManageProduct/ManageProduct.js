import React from 'react';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const { _id, Product_Name, imageURL, Product_Description, Price } = props.product;

    const deleteProduct = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                res.json();
                window.location.reload();
            })
            .then(result => {
                console.log('Deleted successfully')
            })
    }

    return (
        <div className="manage-product">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="product-content">{Product_Name}</h3>
                </div>
                <div className="col-md-3">
                    <img className="product-content" src={imageURL} alt="product-image" />
                </div>
                <div className="col-md-3">
                    <h4 className="product-content">{Price}</h4>
                </div>
                <div className="col-md-3">
                    <button className="product-content btn btn-danger" onClick={() => deleteProduct(_id)}>Delete</button>
                </div>
            </div>


        </div>
    );
};

export default ManageProduct;