import React, { useEffect, useState } from "react";
import Itembar from '../components/itembar';
import { getItems } from '../api';
import Search from "../components/search";
import Category from "../components/category";
import { useHistory } from 'react-router-dom';


const Home = () => {
    const [itemlist, setitemlist] = useState([])
    const history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let itemlist = await getItems();
                setitemlist(itemlist)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const toSearch = () => {
        history.push('/search');
    };
    return (
        <div className="home_page_max">
            <div className="HomeSearchbox" onClick={toSearch}>
                <Search />
            </div>
            <div className="CategoryBox">
                <Category />
            </div>
            <div className="ItemListContainer">
                {itemlist.map((item, index) => (
                    <Itembar key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
