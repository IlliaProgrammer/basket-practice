import React, {useState} from 'react';
import Hero from '../../components/hero/Hero';
import { PRODUCTS } from '../../products';
import {Product} from './product';
import {BsSearch} from "react-icons/bs"
import "./shop.css";

const Shop = () => {

    const [inputValue, setInputValue] = useState("")
    const filteredProducts = PRODUCTS.filter(product => {
        return product.productName.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div className='shop'>
            <Hero/>
            <div className="box">
                <form name="search">
                <input
                    type="text"
                    className="input"
                    name="txt"
                    onMouseOut={(e) => { e.target.value = ''; e.target.blur(); }}
                    onChange={(e) => { setInputValue(e.target.value); }}
                    onMouseOver={(e) => { e.target.value = inputValue}}
                    />
                </form>
                <BsSearch className='icon'/>
            </div>
            <div className='products'>
                {
                    filteredProducts.map(
                        product => <Product key={product.id} data={product}/>
                        )
                }
            </div>
        </div>
    );
};

export default Shop;