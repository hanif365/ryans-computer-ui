import React from 'react';
import './ManageProduct.css'

const ManageProduct = (props) => {
    // console.log(props);
    const { _id, Product_Name, imageURL, Product_Description, Price } = props.product;

    // for update
    // const updateProduct = (id) =>{
    //     fetch(`http://localhost:5000/product/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

    const deleteProduct = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            res.json();
            window.location.reload();
        })
        .then(result =>{
            console.log('Deleted successfully')
        })
    }

    return (
        <div className="manage-product d-flex">
            <h3>{Product_Name}</h3>
            <img src={imageURL} alt="product-image"/>
            <h4>{Price}</h4>
            {/* <button onClick={() => updateProduct(_id)}>Update</button> */}
            <button onClick={() => deleteProduct(_id)}>Delete</button>
        </div>
    );
};

export default ManageProduct;