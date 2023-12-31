import React from 'react';
import { Product } from './product';
import './shop.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../App.css';

const URI = 'https://tienda-virtual-k237.onrender.com/products/'; //se hacen las peticiones aqui 

export const Shop = () => {

    const[products,setProducts] = useState([]) //se guardan todos los productos
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => { //se hace la peticion para todos los usuarios
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    return (
        <div className="shop" >
            <div className="products" > 
                {products.map((product) => (
                    <Product key={product.id}  data={product}  /> //se llama al producto con sus propias informaciones 
                ))}
            </div>
        </div>
    )
};