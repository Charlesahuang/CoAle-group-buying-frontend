import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Itembar = (item) => {
    const [itemobj, setitemobj] = useState({});
    const [progressPercentage, setprogressPercentage] = useState(null);
    const dispatch = useDispatch()
    const addcartFun = (newData, callback) => {
        dispatch({ type: 'CART', payload: newData })
        callback(); 
    }
    useEffect(() => {
        setitemobj(item.item);
        
    }, [item]);

    useEffect(() => {
        setprogressPercentage(
            (itemobj.orders_now / itemobj.orders_needed) * 100
        );
    }, [itemobj]);

    const addCart = () => {
        addcartFun(itemobj, () => {
            toast.success('Add Success', { autoClose: 1000 })
        });
    }

    return (
        <>
        <ToastContainer/>
            <div className="item_bar-product-container">
                <img
                    src={itemobj.photoURL}
                    alt="banana"
                    className="item_bar-product-image"
                />
                <div className="item_bar-product-info">
                    <div className="item_bar-product-name-price">
                        <span>{itemobj.name}</span>
                        <span>{itemobj.price} €</span>
                    </div>
                    {
                        itemobj.sorting_tags && (<div className=".item_bar-product-sort">
                            {itemobj.sorting_tags.map((tag, index) => (
                                <span key={index} className="item-tag" >{tag}</span>
                            ))}
                        </div>)
                    }
                    <div className="item_bar-progress-bar-container">
                        <div
                            className="item_bar-progress-bar"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <div className="item_bar-timeAndcartbox">
                        <div className="item_bar-time">
                            <p>endTime: 2023-12-31</p>
                        </div>
                        <div className="item_bar-cart">
                            <IoAddCircle onClick={addCart} className="item_bar-shopping-cart-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Itembar;
