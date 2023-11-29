import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import {useHistory} from "react-router-dom"
const Cart = () => {
    const history = useHistory()
    const ItemList = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [CartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const countCartList = () => {
        const processedData = [];
        let total = 0;
        ItemList.forEach((item) => {
            const existingItem = processedData.find((data) => data.item.id === item.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                processedData.push({
                    item: { ...item },
                    count: 1,
                });
            }
            total += item.price;
        });
        setCartList(processedData);
        setTotalPrice(total);
    }

    useEffect(() => {
        countCartList()
    }, [ItemList]);

    const handleQuantityChange = (itemId, count) => {
        dispatch({ type: 'UPDATE_CART_ITEM', payload: { itemId, count } });
    };

    const toPaypage = ()=>{
        history.push('/pay')
    }

    return (
        <div className="Cart_page_container">
            <div className="Cart_page_list">
                {CartList.map((data, index) => (
                    <div key={index} className="Cart_page_item">
                        <img src={data.item.photoURL} alt={data.item.name} className="Cart_page_img" />
                        <div className="Cart_page_info">
                            <div className="Cart_page_name">{data.item.name}</div>
                            <div className="Cart_page_price">€{data.item.price}</div>
                            <div className="Cart_page_count">
                                <MdRemoveCircleOutline
                                    onClick={() => handleQuantityChange(data.item.id, data.count - 1)}
                                />
                                {data.count}
                                <MdAddCircleOutline
                                    onClick={() => handleQuantityChange(data.item.id, data.count + 1)}
                                />
                            </div>
                            <div className="Cart_page_subtotal">
                                Subtotal: €{(data.item.price * data.count).toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Cart_page_footer">
                <div className="Cart_page_total">Total price: €{totalPrice.toFixed(2)}</div>
                <button className="Cart_page_checkout" onClick={toPaypage}>Settlement</button>
            </div>
        </div>
    );
};

export default Cart;
