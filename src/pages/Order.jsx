import React, { useEffect, useState } from "react";
import { fetchOrderList } from "../api";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from "react-toastify";
import { DeleteOrderItem } from "../api";
const Order = () => {
    const history = useHistory()
    useEffect(() => {
        getOrderList()
    }, [])
    const [OrderList, setOrderList] = useState([])

    const getOrderList = () => {
        fetchOrderList().then(res => {
            setOrderList(res.orders)
            console.log('res',res);
        }).catch(err => {
            console.error('getOrderList ERROR', err);;
        })
    }

    const deleteItem = (e) => {
        DeleteOrderItem(e.orderid).then(res => {
            toast.success('Delete Success', { autoClose: 1000 })
            getOrderList()
        }).catch(err => {
            toast.error('Delete default', { autoClose: 1000 })
        })
    }

    return (
        <>
            <ToastContainer />
            <div className="Order_page_container">
                <ToastContainer />
                <div className="Order_page_list">
                    <div className="Order_page_list_title"><h2>Order History</h2></div>
                    {OrderList.length > 0 ? (
                        OrderList.map((data, index) => (
                            <div key={index} className="Order_page_item">
                                <div className="Order_page_info">
                                    <div className="Order_page_info_img">
                                        <img src={data.item.photoURL} alt={data.item.name} className="Order_page_img" />
                                    </div>
                                    <div className="Order_page_info_left">
                                        <div><span>name:</span> <span>{data.item.name}</span> </div>
                                        <div><span>quantity:</span> <span>{data.quantity}</span> </div>
                                    </div>
                                    <div className="Order_page_info_right">
                                        <button onClick={() => deleteItem(data)}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="NoOrdersMessage">user no order</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default Order;
