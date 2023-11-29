import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { PayOrder } from "../api";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from "react-toastify";
const Pay = () => {
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

    const uporder = async () => {
        let obj = {
            content: []
        }
        for (let i = 0; i < CartList.length; i++) {
            obj.content.push({
                itemid: CartList[i].item.id,
                quantity: CartList[i].count
            })
        }
        await PayOrder(obj).then((res) => {
            toast.success('Place Order Success!', { autoClose: 1000 })
            setTimeout(() => {
                history.push('/order')
            },1000)
        }).catch((err) => {
            toast.error('Place Order ERROR', { autoClose: 1000 })
        })
    }

    return (
        <div className="Pay_page_container">
            <ToastContainer />
            <div className="Pay_page_list">
                <div className="Pay_page_list_title"><h2>Please confirm the order</h2></div>

                {CartList.map((data, index) => (
                    <div key={index} className="Pay_page_item">
                        {/* <img src={data.item.photoURL} alt={data.item.name} className="Pay_page_img" /> */}
                        <div className="Pay_page_info">
                            <div className="Pay_page_name">
                                <span>{data.item.name}</span>
                                <span>€{data.item.price}</span>
                            </div>
                            <div className="Pay_page_count">
                                <span>quantity:  {data.count}</span>
                                <span className="Pay_page_itemSubtotal"> Subtotal: €{(data.item.price * data.count).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Pay_page_total"><div>Total price: €{totalPrice.toFixed(2)}</div></div>
            <div className="Pay_page_footer">
                <button className="Pay_page_checkout" onClick={uporder}>place an order</button>
            </div>
        </div>
    );
};

export default Pay;
